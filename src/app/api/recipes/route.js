import { NextResponse } from "next/server.js";

import lib from "../../../sessionManagement.js";

export async function GET(req) {

  const existingSessionId = req.cookies.get("session_id");

  const db = getDB();
  const session = mapUser(existingSessionId);
  const { filters, preferences } = session;

  // session.filters
  // session.preferences



  return response;
}
