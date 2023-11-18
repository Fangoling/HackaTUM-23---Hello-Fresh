"use client";

import axios from 'axios'
import { useState } from "react";

import RecipeDisplay from "../components/recipe/RecipeDisplay"


export default function Home() {

  const apiURL = "/api/recipes";

  const [d, setD] = useState([]);

  function getResults() {
    axios.get(apiURL + "?tags=test,fang,a,2,df,,").then((res) => {
      console.log(res.data.tags);
      setD(res.data.tags);
    }).catch((error) => {
      console.log("error");
    });
  }



  return (
    <main className=" h-screen">
      <h1>hallo</h1>
      { d.map(e => (
        <RecipeDisplay name={e} />
      ))}
      <button className='px-2 py-2 bg-red-500 text-white hover:bg-green-500 transition-all' onClick={getResults}>test</button>
    </main>
  )
}
