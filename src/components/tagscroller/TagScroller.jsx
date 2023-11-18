import Tag from "../basic/Tag"

const TagScroller = ({ activeTags, toggleTag, range, className }) => {

  return (
    <div className={"w-full flex gap-2 " + className}>
      <div className="w-4"/>
      { range.filter( ele => !activeTags.includes(ele)).map((t) => (
        <Tag tag={t} toggleTag={toggleTag}/>
      ))}
      <div className="w-4"></div>
    </div>
  )
}

export default TagScroller;
