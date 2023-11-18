
const Tag = ({ tag, toggleTag, active }) => {
  return (
    <button onClick={() => toggleTag(tag)} 
      className={"px-2 py-1 rounded-full text-darkgreen whitespace-nowrap " + ( active ? "bg-darkgreen text-white" : "bg-lightgreen ")}
    >
      { tag }
    </button>
  )
}

export default Tag;
