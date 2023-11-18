"use client";

import axios from 'axios'
import { useEffect, useState } from "react";

import Image from 'next/image';

import RecipeDisplay from "../components/recipe/RecipeDisplay"
import BarComponent from "../components/bar/BarComponent"
import Placeholder from "../components/basic/Placeholder"
import Loading from '../components/basic/Loading';


export default function Home() {

  const recipeApiURL = "/api/recipes";
  const filterApiURL = "/api/filter";

  const SKIP = 0;
  const TAKE = 20;

  const [dietFilter, setDietFilter] = useState("All");
  const [activeTags, setActiveTags] = useState([]);

  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(false);

  function toggleFilter(f) {
    setLoading(true);
    axios.post(filterApiURL, { filter: f, skip: SKIP, take: TAKE }).then((r) => {
      if (r.data.recipes){
        setActiveTags(r.data.filters);
        setRecipes(r.data.recipes);
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
    console.log("get results")
    setLoading(true);
    axios.get(recipeApiURL + "?skip=" + recipes.length + "&take=" + "20").then((res) => {

      if (!res.data.recipes) {
        console.error("error " + res.data);
      } else {
        console.log(res.data.recipes);
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
  }, [])

  return (
    <main className="h-screen bg-white n w-screen ">
      <div className='flex items-center ml-3  mt-2'>
        <Image src="/HF.png" width={100} height={100}/>
      </div>
      <div className='w-full p-2 overflow-y-scroll'>

        { loading &&
          <Loading loading={loading}/>
        }

        { recipes.map((recipe, index) => (
          <RecipeDisplay key={index} recipe={recipe.recipe}/>
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
