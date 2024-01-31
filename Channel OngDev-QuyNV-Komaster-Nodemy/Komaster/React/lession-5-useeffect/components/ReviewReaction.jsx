import likeUrl from '../assets/like.png'
import unlikeUrl from '../assets/unlike.png'

function ReviewReaction() {
  const onLikeHandler = () => {
    // code here
  }

  const onUnLikeHandler = () => {
    // code here
  }

  return (
    <div className='review-reaction'>
      <img onClick={onLikeHandler} src={likeUrl} alt='' />
      <span>11</span>
      <img onClick={onUnLikeHandler} src={unlikeUrl} alt='' />
      <span>0</span>
    </div>
  )
}
export default ReviewReaction
