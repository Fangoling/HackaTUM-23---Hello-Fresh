import { NextResponse } from "next/server.js";

import lib from "../../../lib.js";

// export async function GET (req) {
//   const keys = [];
//   const values = [];
//   req.nextUrl.searchParams.forEach((value, key) => {
//     keys.push(key);
//     values.push(value);
//   });

//   console.log(keys);
//   console.log(values);
//   const foundMeals = await findMealByTagsConjunction(keys);
//   console.log(foundMeals)

//   return NextResponse.json({ foundMeals });
// }



export async function GET(req) {

  const existingSessionId = req.cookies.get("session_id");

  const db = getDB();
  const session = mapUser(existingSessionId);
  const { filters, preferences } = session;

  // session.filters
  // session.preferences



  return response;
}
