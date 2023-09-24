import express from 'express'
import homeController from '../controller/homeController'

const router = express.Router()

/**
 * @param {*} app :  express app
 */
const initWebRoutes = (app) => {
  router.get('/', homeController.handleHelloWord)
  router.get('/user', homeController.handleUserPage)
  router.post('/users/create-user', homeController.handleCreateNewUser)

  return app.use('/', router)
}

export default initWebRoutes
