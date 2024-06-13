import express from 'express'
import {
  getAllPosts,
  createOnePost,
  updateOnePost,
  deleteOnePost
} from '../controllers/postController.js'
import { verifyToken } from '../middlewares/verifyToken.js'

const Router = express.Router()

Router.route('/').get(getAllPosts).post(verifyToken, createOnePost)
Router.route('/:postId').put(verifyToken, updateOnePost).delete(verifyToken, deleteOnePost)

export default Router
