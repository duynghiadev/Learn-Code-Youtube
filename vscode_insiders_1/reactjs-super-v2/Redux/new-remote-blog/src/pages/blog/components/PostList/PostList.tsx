import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PostItem from '../PostItem/PostItem'
import SkeletonPost from '../SkeletonPost'
import { deletePost, getPostList } from '../action/blog.action'
import { startEditingPost } from '../reducers/blog.slice'
import { RootState, useAppDispatch } from '../store/store'

export default function PostList() {
  const postList = useSelector((state: RootState) => state.blog.postList)
  const loading = useSelector((state: RootState) => state.blog.loading)
  const dispatch = useAppDispatch()
  const [showSkeleton, setShowSkeleton] = useState(true)

  useEffect(() => {
    const promise = dispatch(getPostList())

    const timer = setTimeout(() => {
      setShowSkeleton(false)
    }, 3000)

    return () => {
      promise.abort()
      clearTimeout(timer)
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
          {showSkeleton ? (
            <Fragment>
              <SkeletonPost />
              <SkeletonPost />
            </Fragment>
          ) : (
            !loading &&
            postList.map((post) => (
              <PostItem
                post={post}
                key={post.id}
                handleDelete={handleDelete}
                handleStartEditing={handleStartEditing}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
