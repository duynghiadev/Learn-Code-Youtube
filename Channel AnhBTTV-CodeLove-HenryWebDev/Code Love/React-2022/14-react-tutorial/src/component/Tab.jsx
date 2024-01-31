import { useState } from 'react'

function Tab() {
  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])

  const renderTags = function () {
    const listTags = tags.map(function (tag) {
      return <li>{tag}</li>
    })
    console.log(listTags)
    return listTags
  }

  return (
    <>
      <ul>{renderTags()}</ul>

      <b>----- Có 2 cách render ra màn hình. Cách dưới đây là cách thứ 2 -----</b>

      <ul>
        {tags.map(function (tag) {
          return <li>{tag}</li>
        })}
      </ul>
    </>
  )
}

export default Tab
