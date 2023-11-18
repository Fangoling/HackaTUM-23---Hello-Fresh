import TagSelectorButton from "./TagSelectorButton"
import TomatoIcon from "../icons/TomatoIcon"
import OmnivoreIcon from "../icons/OmnivoreIcon"
import FishIcon from "../icons/FishIcon"
import CarrotIcon from "../icons/CarrotIcon"


const TagSelector = ({ dietFilter, setDietFilter }) => {

  return (
    <div className="w-full h-full grid grid-cols-4 gap-2 ">
      <TagSelectorButton icon={<OmnivoreIcon/>} name="All" active={dietFilter === "All"} setDietFilter={setDietFilter}/>
      <TagSelectorButton icon={<CarrotIcon/>} name="Veggie" active={dietFilter === "Veggie"} setDietFilter={setDietFilter}/>
      <TagSelectorButton icon={<TomatoIcon/>} name="Vegan" active={dietFilter === "Vegan"} setDietFilter={setDietFilter}/>
      <TagSelectorButton icon={<FishIcon/>} name="Fish" active={dietFilter === "Fish"} setDietFilter={setDietFilter}/>
    </div>
  )
}

export default TagSelector;
