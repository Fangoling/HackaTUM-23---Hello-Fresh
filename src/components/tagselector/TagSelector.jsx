import TagSelectorButton from "./TagSelectorButton"
import TomatoIcon from "../icons/TomatoIcon"
import OmnivoreIcon from "../icons/OmnivoreIcon"
import FishIcon from "../icons/FishIcon"
import CarrotIcon from "../icons/CarrotIcon"
import axios from "axios"


const TagSelector = ({ dietFilter, setDietFilter, setActiveTags, setRecipes, activeTags }) => {

  const apiURL = "/api/filter";

  const DEFAULT_SKIP = 0;
  const DEFAULT_TAKE = 20;


  function toggleTags (filter) {
    console.log("toggle Tags ClientSide");
    axios.post(apiURL, {
      filter ,
      skip: DEFAULT_SKIP,
      take: DEFAULT_TAKE
    }).then((response) => {
      if (response.data.recipes) {
        setRecipes(response.data.recipes);
        setActiveTags(response.data.filters);
      } else {
        throw new Error("Lennart");
      }
    }).catch((err) => {
        console.error("Fang " + err);
    });
  }

  return (
    <div className="w-full h-full grid grid-cols-4 gap-2 ">
      <TagSelectorButton onClick={() => toggleTags("All")}    icon={<OmnivoreIcon/>} name="All"    active={activeTags.includes("All")}    setDietFilter={setDietFilter}/>
      <TagSelectorButton onClick={() => toggleTags("Veggie")} icon={<CarrotIcon/>  } name="Veggie" active={activeTags.includes("Veggie")} setDietFilter={setDietFilter}/>
      <TagSelectorButton onClick={() => toggleTags("Vegan")}  icon={<TomatoIcon/>  } name="Vegan"  active={activeTags.includes("Vegan")}  setDietFilter={setDietFilter}/>
      <TagSelectorButton onClick={() => toggleTags("Fish")}   icon={<FishIcon/>    } name="Fish"   active={activeTags.includes("Fish")}   setDietFilter={setDietFilter}/>
    </div>
  )
}

export default TagSelector;
