import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const RecipeDisplay = ({ recipe }) => {

  const [hover, setHover] = useState(false);

  return (
    <button onClick={() => {window.location = "/" + recipe.id}} className={"flex-nowrap rounded-2xl overflow-hidden bg-gray-100 transition-all w-full "} onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}}>
      <div className="w-[380px] h-[235px] relative">
        <div className="absolute bottom-0 text-white text-xl z-20 p-2 left-auto right-auto w-full">
          <h1 className=" max-w-[80%] ml-auto mr-auto">{ recipe.name }</h1>
        </div>

        <div className="opacity-90">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent" />
        </div>
        <Image src={ recipe.image } width={500} height={500}/>
      </div>
    </button>

  )
}

export default RecipeDisplay;
