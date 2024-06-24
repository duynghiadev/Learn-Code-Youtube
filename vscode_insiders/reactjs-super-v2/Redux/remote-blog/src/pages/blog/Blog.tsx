import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

const Blog = () => {
  return (
    <div className='p-5'>
      <CreatePost /> <PostList />
    </div>
  )
}

export default Blog
