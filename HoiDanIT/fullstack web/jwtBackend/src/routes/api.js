import express from 'express'
import apiController from '../controller/apiController'
import userController from '../controller/userController'
import groupController from '../controller/groupController'
import { checkUserJWT, checkUserPermission } from '../middleware/JWTAction'

const router = express.Router()

/**
 * @param {*} app :  express app
 */

const initApiRoutes = (app) => {
  // path, handler
  // rest api
  // GET - R, POST - C, PUT - U, DELETE - D
  router.all('*', checkUserJWT, checkUserPermission)

  router.post('/register', apiController.handleRegister)
  router.post('/login', apiController.handleLogin)
  router.post('/logout', apiController.handleLogout)

  router.get('/account', userController.getUserAccount)

  router.get('/user/read', userController.readFunc)
  router.post('/user/create', userController.createFunc)
  router.put('/user/update', userController.updateFunc)
  router.delete('/user/delete', userController.deleteFunc)

  router.get('/group/read', groupController.readFunc)

  return app.use('/api/v1/', router)
}

export default initApiRoutes
