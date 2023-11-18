import { NextResponse } from "next/server.js";

import { mapUser } from "../../../sessionManagement.js";
import { poll } from "../../../matching.js";
import { getDB } from "../../../db.js";

export async function GET(req) {

  const existingSessionId = req.cookies.get("session_id");
  const skip = Number(req.nextUrl.searchParams.get('skip')) || 0;
  const take = Number(req.nextUrl.searchParams.get('skip')) || 20;

  const db = JSON.parse(JSON.stringify(getDB()));
  const session = mapUser(existingSessionId.value);

  const { filters, preferences } = session;

  const recipes = poll(skip, take, session, db);

  return NextResponse.json({ recipes });
}
