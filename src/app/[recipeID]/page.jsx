"use client";

import Image from "next/image";
const { useState } = require("react");
import TagScroller from "../../components/tagscroller/TagScroller";
import TagRecipeList from "../../components/recipe/TagRecipeList";
import Link from "next/link";
import axios from "axios";

const RecipePage = ({ params }) => {

  const recipeAndResultsApiUrl = "/api/recipe";

  const TAKE = 20;
  const SKIP = 0;

  const { recipeID } = params;

  const fetchRecipe = () => {
    axios.get(recipeAndResultsApiUrl + "?recipe_id=" + recipeID + "&take=" + TAKE + "&skip=" + SKIP )
  }


  const [recipe, setRecipe] = useState({});

  function convertDuration(duration) {
    const match = duration.match(/PT(\d+)M/);

    if (match) {
        const minutes = parseInt(match[1], 10);
        return `${minutes} minutes`;
    } else {
        return "Invalid format";
    }
  }

  function goHome() {
    window.location = "/";
  }


  return (
    <div> 
      <div className="p-4 bg-gray-100 rounded-b-3xl">
        <div className="flex">
          <h1 className="text-2xl font-semibold">{ recipe.name }</h1>
          <Link className="mt-1 rounded-full p-2" href={"/"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <Image src={ recipe.image } width={380} height={250}/>
        </div>
        <div className="mt-2">
          <TagScroller activeTags={[]} toggleTag={() => {}} range={recipe.tags}/>
        </div>
        <p className="my-3">{ recipe.headline }</p>
        <div className="flex flex-col items-center justify-center full-width mb-2">
          <a href={recipe.websiteURL} className="py-2 px-4 rounded-xl text-white bg-darkgreen full-width">choose</a>
          <p className="text-darkgreen">You will need { convertDuration(recipe.prepTime) }</p>
        </div>

        <h2 className="font-semibold">Details</h2>
        <div className="grid grid-cols-2 px-2 rounded-2xl">
          <h3>{ recipe.energy } Joules</h3>
          <h3>{ recipe.calories } calories</h3>
          <h3>{ recipe.carbohydrate } carbs</h3>
          <h3>{ recipe.protein } mg Protein</h3>
        </div>
      </div>

      <div className="p-4">
        <TagRecipeList tag={recipe.tags[0]}/>
        <TagRecipeList tag={recipe.tags[1]}/>
      </div>

    </div>
  )

}
export default RecipePage;
