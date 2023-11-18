import { NextResponse } from "next/server.js";

import lib from "../../../sessionManagement.js";
import { getBest } from "../../../matching.js ";

export async function GET(req) {

  const existingSessionId = req.cookies.get("session_id");
  const skip = Number(req.nextUrl.searchParams.get('skip')) || 0;
  const take = Number(req.nextUrl.searchParams.get('skip')) || 20;

  const db = JSON.parse(JSON.stringify(getDB().copy));
  const session = mapUser(existingSessionId);
  const { filters, preferences } = session;

  // session.filters
  // session.preferences
  getBest(0,0,session,db);


  return NextResponse.json({
      recipes : "empty"
  });
}
