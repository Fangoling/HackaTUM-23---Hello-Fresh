import { getDB } from "../../../db";
import { mapUser } from "../../../sessionManagement.js"

export async function POST (req) {

  const existingSessionId = req.cookies.get("session_id");

  const db = getDB();
  const session = mapUser(existingSessionId);
  const { filters, preferences } = session;

  console.log(existingSessionId);

  const response = NextResponse.json({message: "test"})
  return response;
}
