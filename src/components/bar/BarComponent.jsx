import TagScroller from "../tagscroller/TagScroller";
import TagSelector from "../tagselector/TagSelector"

const BarComponent = ({ activeTags, toggleTag, dietFilter, setDietFilter, setActiveTags, setRecipes }) => {


  let all = ["Low Carb", "High Protein", "Under 650 calories", "Family friendly", "Kids fave"];
  let nationalities = ["Popular", "Italian", "Chinese", "American", "English", "Indian"];

  return (
    <div className="w-full z-20 relative">
      <div className="py-2">
        <div className="mb-1 overflow-x-auto">
          <TagScroller activeTags={activeTags} toggleTag={toggleTag} range={all} className="mb-2 ml-4"/>
          <TagScroller activeTags={activeTags} toggleTag={toggleTag} range={nationalities} className="ml-4"/>
        </div>
      </div>

      <div className="p-2">
        <TagSelector dietFilter={dietFilter} setDietFilter={setDietFilter} setActiveTags={setActiveTags} setRecipes={setRecipes} activeTags={activeTags}/>
      </div>
      <div className="bg-white opacity-80 absolute inset-0 -z-10">
      </div>
    </div>
  )
}

export default BarComponent;
