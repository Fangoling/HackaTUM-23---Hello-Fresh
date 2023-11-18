import { NextResponse } from "next/server.js";
import { insertMeals, findMealByTagsConjunction, findMealByTagsDisjunction } from "../../../../prisma/meals.js";

export async function GET (req) {
  await insertMeals();
  // TODO: db query
  const keys = [];
  const values = [];
  req.nextUrl.searchParams.forEach((value, key) => {
    keys.push(key);
    values.push(value);
  });

  console.log(keys);
  console.log(values);
  const foundMeals = await findMealByTagsConjunction(keys);
  console.log(foundMeals)

  return NextResponse.json({ foundMeals });
}