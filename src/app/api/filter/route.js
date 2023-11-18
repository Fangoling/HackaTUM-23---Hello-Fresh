import { NextResponse } from "next/server.js";

import { getDB } from "../../../db";
import { mapUser, toggleFilter } from "../../../sessionManagement.js"
import { poll } from "../../../matching.js"

export async function POST (req) {

  const existingSessionId = req.cookies.get("session_id");

  const db = getDB();
  const session = mapUser(existingSessionId.value);

  const { filter, skip, take } = await req.json();

  toggleFilter(existingSessionId.value, filter);

  const recipes = poll(skip, take, session, db);

  return NextResponse.json({ recipes, filters : session.filters });
}
