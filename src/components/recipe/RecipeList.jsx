import RecipeDisplay from "./RecipeDisplay.jsx"

const RecipeList = ({ tag, className }) => {

  const imageUrl = "https://img.hellofresh.com/q_auto/recipes/image/HF_Y23_R37_W44_DE_R4819-1_Main_low-661e95c9.jpg";
  const name = "Karotteneintopf";
  const description = "Ich habe Klimawandel geloest";

  const recipelist = [{imageUrl, name, description, id:"a"}, {imageUrl, name, description, id:"b"}, {imageUrl, name, description, id:"c"},  {imageUrl, name, description, id:"d"}];

  return (
    <div className={"w-full flex gap-2 overflow-scroll " + className}>
      {recipelist.map( (ele, index) => (
        <div key={index} className="w-[200px]">
          <RecipeDisplay key={ele.id} recipe={ele}/>
        </div>
      ))}
    </div>
  )
}

export default RecipeList;
