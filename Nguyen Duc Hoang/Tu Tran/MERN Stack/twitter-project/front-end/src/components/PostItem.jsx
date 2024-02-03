const PostItem = () => {
  return (
    // Post Item
    <div className='post-item'>
      <p className='post-content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tenetur qui alias
        excepturi impedit in eius, hic sed dolorem ipsum, quisquam illum quas quaerat, fugit laborum
        officia cumque quae sit?
      </p>
      <div className='post-footer'>
        <div className='post-infors'>
          <span>by Duy Nghia Dev</span>
          <span>Date: 3/2/2024</span>
        </div>
        <div className='post-edit-delete'>
          <span>Edit</span>
          <span>Delete</span>
          <span className='delete-question'>Are you sure?</span>
          <span>Yes</span>
          <span>No</span>
        </div>
      </div>

      <div className='post-edit-form'>
        <form className='edit-form'>
          <textarea
            type='text'
            name='content'
            id='content'
            className='content'
            placeholder="What's happening?"
            defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestias, repudiandae id
            rem libero molestiae dolore velit temporibus animi officiis aliquid nemo! In ex fuga
            quos quasi vitae ullam tempore.'
          />

          <div className='btn-container'>
            <button className='btn' type='button'>
              Update
            </button>
            <button className='btn' type='button'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostItem
