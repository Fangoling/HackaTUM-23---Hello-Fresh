import Image from "next/image";
import { useState } from "react";

const RecipeDisplay = ({ recipe }) => {

  const [hover, setHover] = useState(false);

  return (
    <button className={"flex-nowrap rounded-2xl overflow-hidden bg-gray-100 transition-all " + (hover ? " scale-95" : " ")} onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}}>
      <div className="w-[200px] h-[135px] relative">
        <div className="absolute bottom-0 text-white text-xl z-20 p-2 left-auto right-auto w-full">
          { recipe.name }
        </div>
        <div className="opacity-90">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent" />
        </div>
        <Image src={ recipe.imageUrl } width={300} height={300}/>
      </div>
    </button>

  )
}

export default RecipeDisplay;
