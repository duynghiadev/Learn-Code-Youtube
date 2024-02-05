import { useState } from 'react'

const PostItem = ({ post }) => {
  const [openEditForm, setOpenEditForm] = useState(false)
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false)

  let date = new Date(post.createdAt)

  return (
    // Post Item
    <div className='post-item'>
      <p className='post-content'>{post.content}</p>
      <div className='post-footer'>
        <div className='post-infors'>
          <span>{post.author.name}</span>
          <span>
            Date:
            {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
          </span>
        </div>

        {post.isEditable && (
          <div className='post-edit-delete'>
            {openDeleteConfirm ? (
              <>
                <span className='delete-question'>Are you sure?</span>
                <span>Yes</span>
                <span onClick={() => setOpenDeleteConfirm(false)}>No</span>
              </>
            ) : (
              <>
                <span onClick={() => setOpenEditForm(true)}>Edit</span>
                <span onClick={() => setOpenDeleteConfirm(true)}>Delete</span>
              </>
            )}
          </div>
        )}
      </div>

      {openEditForm && (
        <div className='post-edit-form'>
          <form className='edit-form'>
            <textarea
              type='text'
              name='content'
              id='content'
              className='content'
              placeholder="What's happening?"
              defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestias, repudiandae id rem libero molestiae dolore velit temporibus animi officiis aliquid nemo! In ex fuga quos quasi vitae ullam tempore.'
            />

            <div className='btn-container'>
              <button
                className='btn'
                type='button'
              >
                Update
              </button>
              <button
                className='btn'
                type='button'
                onClick={() => setOpenEditForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default PostItem
