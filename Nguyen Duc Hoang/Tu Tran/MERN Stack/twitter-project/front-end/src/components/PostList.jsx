import { useCallback, useEffect } from 'react'
import '../css/Post.css'
import PostItem from './PostItem'
import axios from 'axios'

const PostList = () => {
  const getAllPosts = useCallback(async () => {
    try {
      const option = {
        method: 'get',
        url: '/api/v1/posts'
      }
      const response = await axios(option)
      console.log('response:', response)

      const posts = response.data.data.posts
      console.log('posts:', posts)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])

  return (
    // Post List
    <section className='post-section'>
      <div className='post-list'>
        <PostItem />
      </div>
    </section>
  )
}

export default PostList
