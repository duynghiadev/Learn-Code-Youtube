import Post from '../models/Post.js'

// Get all posts
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({}).populate('author')
    res.status(200).json({
      status: 'success',
      result: posts.length,
      data: { posts }
    })
  } catch (error) {
    res.json(error)
  }
}

// Create one post
export const createOnePost = async (req, res, next) => {
  try {
    const { userId } = req.user

    const post = await Post.create({ ...req.body, author: userId })
    res.status(200).json({
      status: 'success',
      data: { post }
    })
  } catch (error) {
    next(error)
  }
}

// Update one post
export const updateOnePost = async (req, res, next) => {
  try {
    const { postId } = req.params

    const post = await Post.findByIdAndUpdate(
      postId,
      { ...req.body },
      { new: true, runValidator: true }
    )
    res.status(200).json({
      status: 'success',
      data: { post }
    })
  } catch (error) {
    res.json(error)
  }
}

// Delete one post
export const deleteOnePost = async (req, res, next) => {
  try {
    const { postId } = req.params

    await Post.findByIdAndDelete(postId)
    res.status(200).json({
      status: 'success',
      message: 'Post has been deleted'
    })
  } catch (error) {
    res.json(error)
  }
}
