import { NextResponse } from "next/server.js";
import { insertMeals, findMealByTags } from "../../../../prisma/meals.js";

export function GET (req) {

  // TODO: db query
  const keys = [];
  const values = [];
  req.nextUrl.searchParams.forEach((value, key) => {
    keys.push(key);
    values.push(value);
  });

  console.log(keys);
  console.log(values);
  const foundMeals = findMealByTags(values);
  console.log(foundMeals)

  return NextResponse.json({ foundMeals });
}