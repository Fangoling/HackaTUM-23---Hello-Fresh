import RecipeList from "./RecipeList";
import Tag from "../basic/Tag"

const TagRecipeList = ({ toggleTag, pre, tag }) => {


  const fetchTagList = () => {
    axios.get("/").then((r) => {
      console.log(r);
    }).catch((e) => {})
  }


  return (
    <div>
      <div className="flex justify-between">
        <h2 className='p-2 text-xl flex items-center whitespace-nowrap truncate'>
          { pre }
          <span className="mr-2 underline underline-offset-2 decoration-darkgreen decoration-2 ">{ tag }</span>
          Recipes
        </h2>
        <div className="flex">
          <button className="mt-1 rounded-full p-2" onClick={() => toggleTag(tag)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <RecipeList tag={tag} />
    </div>
  )
}

export default TagRecipeList;
