import express from 'express'
import homeController from '../controller/homeController'
import apiController from '../controller/apiController'
import loginController from '../controller/loginController'
import passport from 'passport'
import checkUser from '../middleware/checkUser'

const router = express.Router()

/**
 *
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
  //path, handler
  router.get('/', checkUser.isLogin, homeController.handleHelloWord)
  router.get('/user', homeController.handleUserPage)
  router.post('/users/create-user', homeController.handleCreateNewUser)
  router.post('/delete-user/:id', homeController.handleDelteUser)
  router.get('/update-user/:id', homeController.getUpdateUserPage)
  router.post('/user/update-user', homeController.handleUpdateUser)

  //rest api
  //GET - R, POST- C, PUT - U, DELETE - D
  router.get('/api/test-api', apiController.testApi)

  router.get('/login', checkUser.isLogin, loginController.getLoginPage)

  router.post(
    '/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login'
    })
  )

  return app.use('/', router)
}

export default initWebRoutes
