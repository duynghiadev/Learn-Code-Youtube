const formatDate = (date) => {
  return new Date(date).toTimeString()
}

const Avatar = (props) => {
  return <img src={props.user.avatarUrl} alt={props.user.name} />
}

const UserInfor = (props) => {
  return (
    <div className='UserInfor'>
      <Avatar user={props.user} />
      <div className='UserInfor-name'>{props.user.name}</div>
    </div>
  )
}

const Comment = (props) => {
  return (
    <div className='Comment'>
      <UserInfor user={props.author} />
      <div className='Comment-text'>{props.text}</div>
      <div className='Comment-date'>{formatDate(props.date)}</div>
    </div>
  )
}

export default Comment
