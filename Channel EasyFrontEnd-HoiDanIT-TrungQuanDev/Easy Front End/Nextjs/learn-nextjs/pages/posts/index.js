export default function PostListPage({ posts }) {
  console.log('posts: ', posts)

  return (
    <div>
      <h1>Post List Page</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async (context) => {
  // server-side
  // build-time
  console.log('static props')
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await response.json()
  console.log(data)

  return {
    props: {
      post: data.data.map((x) => ({ id: x.id, title: x.title }))
    }
  }
}
