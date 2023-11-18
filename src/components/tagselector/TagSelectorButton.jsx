
const TagSelectorButton = ({ name, icon, active, setDietFilter  }) => {
  return (
    <button className={"hover:border hover:border-2 border-darkgreen shadow-centric text-black text-xl rounded-3xl aspect-square flex flex-col items-center justify-center " + ( active ? " text-white bg-darkgreen" : "bg-white" ) } 
      onClick={() => {setDietFilter(name)}}>
      { icon }
      { name }
    </button>
  )
}

export default TagSelectorButton;
