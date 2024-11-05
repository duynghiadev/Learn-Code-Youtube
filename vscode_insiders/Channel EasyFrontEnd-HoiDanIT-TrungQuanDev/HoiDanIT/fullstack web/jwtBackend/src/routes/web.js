import express from 'express'
import homeController from '../controller/homeController'
import apiController from '../controller/apiController'

const router = express.Router()

/**
 * @param {*} app :  express app
 */
const initWebRoutes = (app) => {
  router.get('/', homeController.handleHelloWord)
  router.get('/user', homeController.handleUserPage)
  router.post('/users/create-user', homeController.handleCreateNewUser)
  router.post('/delete-user/:id', homeController.handleDeleteUser)
  router.get('/update-user/:id', homeController.getUpdateUserPage)
  router.post('/user/upadate-user', homeController.handleUpdateUser)

  // rest api
  // GET - R, POST - C, PUT - U, DELETE - D
  router.get('/api/test-api', apiController.testAPI)

  return app.use('/', router)
}

export default initWebRoutes
