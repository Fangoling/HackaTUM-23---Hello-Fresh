import Tag from "../basic/Tag"

const TagScroller = ({ activeTags, toggleTag, range, className }) => {

  return (
    <div className={"w-full flex gap-2 " + className}>
      { range.map((t, i) => (
        <Tag key={i} tag={t} toggleTag={toggleTag} active={activeTags.includes(t)}/>
      ))}
    </div>
  )
}

export default TagScroller;
