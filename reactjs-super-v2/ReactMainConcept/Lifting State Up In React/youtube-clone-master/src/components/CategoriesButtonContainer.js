import React, { useEffect, useState } from 'react'
import { GET_VIDEO_CATEGORIES_LIST } from '../utils/config'
import CategoryButton from './CategoryButton'

const CategoriesButtonContainer = () => {
  const [categoryList, setCategoryList] = useState([])

  const getCategories = async () => {
    const data = await fetch(GET_VIDEO_CATEGORIES_LIST)
    const data_json = await data.json()

    console.log(data_json.items)

    setCategoryList(data_json.items)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className='flex'>
      {categoryList.map((item) => {
        return <CategoryButton name={item.snippet.title} key={item.id} />
      })}
    </div>
  )
}

export default CategoriesButtonContainer
