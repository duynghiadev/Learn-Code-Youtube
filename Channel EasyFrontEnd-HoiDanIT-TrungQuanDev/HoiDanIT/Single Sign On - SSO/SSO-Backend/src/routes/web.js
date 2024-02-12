import express from 'express'
import homeController from '../controller/homeController'
import apiController from '../controller/apiController'
import loginController from '../controller/loginController'

const router = express.Router()

/**
 *
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
  //path, handler
  router.get('/', homeController.handleHelloWord)
  router.get('/user', homeController.handleUserPage)
  router.post('/users/create-user', homeController.handleCreateNewUser)
  router.post('/delete-user/:id', homeController.handleDelteUser)
  router.get('/update-user/:id', homeController.getUpdateUserPage)
  router.post('/user/update-user', homeController.handleUpdateUser)

  //rest api
  //GET - R, POST- C, PUT - U, DELETE - D
  router.get('/api/test-api', apiController.testApi)

  router.get('/login', loginController.getLoginPage)

  return app.use('/', router)
}

export default initWebRoutes
