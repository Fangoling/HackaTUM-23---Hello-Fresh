import { NextResponse } from "next/server.js";

import { mapUser, updatePreferences } from "../../../sessionManagement.js";
import { poll } from "../../../matching.js";
import { getDB, query } from "../../../db.js";

export async function GET(req) {

  const existingSessionId = req.cookies.get("session_id");

  const skip = Number(req.nextUrl.searchParams.get('skip')) || 0;
  const take = Number(req.nextUrl.searchParams.get('skip')) || 20;
  const recipeId = req.nextUrl.searchParams.get('recipeId');
  const recipe = query(recipeId);

  const session = mapUser(existingSessionId.value);

  updatePreferences(existingSessionId.value, recipe.tags.map( r => ({ [r] : Math.round(60/(recipe.tags.length)) })));

  const db = JSON.parse(JSON.stringify(getDB()));

  const db_exclude_current = db.filter( recipe => recipe.id !== recipeId );
  const suggestions = poll(skip, take, session, db_exclude_current);
  return NextResponse.json({ recipe, suggestions });
}
