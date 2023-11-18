import { NextResponse } from "next/server.js";

export function GET (req) {

  const tagsParam = req.nextUrl.searchParams.get('tags');

  if (!tagsParam) {
    return new NextResponse("tags parameter required", { status: 400 });
  }

  const tags = tagsParam.split(",");

  if (tags.length === 0) {
    return new NextResponse("Bad Request: 'tags' parameter cannot be empty", { status: 400 });
  }

  if (!tags || tags == [] ) {
    return new NextResponse(null, { status: 400 });
  }



  // tags = ["vegan", "fish"]

  // TODO: db query



  return NextResponse.json({ tags });
}


