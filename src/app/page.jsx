"use client";

import axios from 'axios'
import { useState } from "react";

import Image from 'next/image';

import RecipeDisplay from "../components/recipe/RecipeDisplay"
import RecipeList from "../components/recipe/RecipeList"
import TagSelector from "../components/tagselector/TagSelector"
import BarComponent from "../components/bar/BarComponent"
import TagRecipeList from "../components/recipe/TagRecipeList"
import Placeholder from "../components/basic/Placeholder"


export default function Home() {

  const apiURL = "/api/recipes";

  const [dietFilter, setDietFilter] = useState("All");
  const [activeTags, setActiveTags] = useState(["Popular"]);

  function toggleTag(tag) {
    setActiveTags(prev => {
        if (prev.includes(tag)) {
            return prev.filter(t => t !== tag);
        } else {
            return [tag, ...prev];
        }
    });
  }
  // const [d, setD] = useState([]);

  // function getResults() {
  //   axios.get(apiURL + "?tags=test,fang,a,2,df,,").then((res) => {
  //     console.log(res.data.tags);
  //     setD(res.data.tags);
  //   }).catch((error) => {
  //     console.log("error");
  //   });
  // }


  return (
    <main className="h-screen bg-white n w-screen md:bg-red-500">
      <div className='flex items-center ml-3  mt-2'>
        <Image src="/HF.png" width={100} height={100}/>
      </div>
      <div className='w-full p-2 overflow-y-scroll'>
        { activeTags.map( at => (
          <TagRecipeList toggleTag={toggleTag} tag={at}/>
        ))}
        { activeTags.length < 3 &&
          <Placeholder/>
        }
          <div className='mt-[30vh]'>
            Ende
          </div>
      </div>
      <div className='fixed bottom-0 w-full z-50 backdrop-blur'>
        <BarComponent activeTags={activeTags} toggleTag={toggleTag} dietFilter={dietFilter} setDietFilter={setDietFilter}/>
      </div>
    </main>
  )
}
