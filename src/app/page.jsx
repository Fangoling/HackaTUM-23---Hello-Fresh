"use client";

import axios from 'axios'
import { useEffect, useState } from "react";

import Image from 'next/image';

import RecipeDisplay from "../components/recipe/RecipeDisplay"
import RecipeList from "../components/recipe/RecipeList"
import TagSelector from "../components/tagselector/TagSelector"
import BarComponent from "../components/bar/BarComponent"
import TagRecipeList from "../components/recipe/TagRecipeList"
import Placeholder from "../components/basic/Placeholder"
import Loading from '../components/basic/Loading';


export default function Home() {

  const recipeApiURL = "/api/recipes";
  const filterApiURL = "/api/filter";

  const [dietFilter, setDietFilter] = useState("All");
  const [activeTags, setActiveTags] = useState(["Popular"]);

  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(false);


  // function toggleTag(tag) {
  //   setActiveTags(prev => {
  //       if (prev.includes(tag)) {
  //           return prev.filter(t => t !== tag);
  //       } else {
  //           return [tag, ...prev];
  //       }
  //   });
  // }

  function toggleFilter(f) {
    setLoading(true);
    axios.post(filterApiURL, { filter: f }).then((r) => {
      if (r.data.session){
        setActiveTags(r.data.session.filters);
      } else {
        console.error(r.data);
      }
    }).catch((e) => {
        console.error(e);
    }).finally(() => {
      setLoading(false);
    })
  }

  function getResults() {
    setLoading(true);
    axios.get(recipeApiURL + "?skip=" + recipes.length + "&take=" + "20").then((res) => {

      if (!res.data.recipes) {
        console.error("error " + res.data);
      } else {
        setRecipes(res.data.recipes);
      }

    }).catch((error) => {
      console.error("error " + error);
    }).finally(() => {
        setLoading(false);
      });
  }


  useEffect(() => {
    getResults();
  },[])

  return (
    <main className="h-screen bg-white n w-screen ">
      <div className='flex items-center ml-3  mt-2'>
        <Image src="/HF.png" width={100} height={100}/>
      </div>
      <div className='w-full p-2 overflow-y-scroll'>

        { loading &&
          <Loading loading={loading}/>
        }

        {recipes.map((recipe, index) => (
          <RecipeDisplay key={index} recipe={recipe}/>
        ))}

        { recipes.length < 3 &&
          <Placeholder/>
        }
        <div className='mt-[30vh]'>
          Ende
        </div>
      </div>
      <div className='fixed bottom-0 w-full z-50 backdrop-blur'>
        <BarComponent activeTags={activeTags} toggleTag={toggleFilter} dietFilter={dietFilter} setDietFilter={setDietFilter}/>
      </div>
    </main>
  )
}
