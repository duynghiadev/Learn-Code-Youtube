import { useState } from 'react'

function Tag() {
  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])

  return (
    <div>
      <ul>
        {tags.map((tag) => {
          return <li>{tag}</li>
        })}
      </ul>
    </div>
  )
}

export default Tag
