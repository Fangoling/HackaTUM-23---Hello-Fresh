import Tag from "../basic/Tag"

const TagScroller = ({ activeTags, toggleTag, range, className }) => {

  return (
    <div className={"w-full flex gap-2 " + className}>
      { range.filter( ele => !activeTags.includes(ele)).map((t) => (
        <Tag tag={t} toggleTag={toggleTag}/>
      ))}
    </div>
  )
}

export default TagScroller;
