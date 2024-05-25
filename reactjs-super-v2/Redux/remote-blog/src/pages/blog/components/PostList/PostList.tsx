import { useDispatch, useSelector } from 'react-redux'
import PostItem from '../PostItem/PostItem'
import { RootState } from '../../../../store'
import { deletePost, startEditingPost } from '../../reducers/blog.slice'
import { useEffect } from 'react'
import http from '../../../../utils/http'

// Gọi API trong useEffect()
// Nếu gọi thành công thì dispatch action type: 'blog/getPostListSuccess'
// Nếu gọi thất bại thì dispatch action type: 'blog/getPostListFailed'

// cách này không được dùng -> vì trong reducer chỉ được dùng code đồng bộ -> còn code bất đồng bộ không sử dụng được 👇
// ❌ Dispatch action type: 'blog/getPostList'

export default function PostList() {
  const postList = useSelector((state: RootState) => state.blog.postList)
  const dispatch = useDispatch()

  useEffect(() => {
    const controller = new AbortController()
    http
      .get('posts', {
        signal: controller.signal
      })
      .then((res) => {
        console.log('res:', res)
        const postListResult = res.data
        dispatch({
          type: 'blog/getPostListSuccess',
          payload: postListResult
        })
      })
      .catch((error) => {
        if (!(error.code === 'ERR_CANCELED')) {
          dispatch({
            type: 'blog/getPostListFailed',
            payload: error
          })
        }
      })

    return () => {
      controller.abort()
    }
  }, [dispatch])

  const handleDelete = (postId: string) => {
    dispatch(deletePost(postId))
  }

  const handleStartEditing = (postId: string) => {
    dispatch(startEditingPost(postId))
  }

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
            Được Dev Blog
          </h2>
          <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
            Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ. Nhưng ngày mốt sẽ có
            nắng
          </p>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
          {postList.map((post) => (
            <PostItem
              post={post}
              key={post.id}
              handleDelete={handleDelete}
              handleStartEditing={handleStartEditing}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
