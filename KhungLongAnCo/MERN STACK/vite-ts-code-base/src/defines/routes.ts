export const AUTHENTICATION_ROUTERS = {
  HOME: '/',
  ABOUT: '/about',
  THEME: '/themes'
}

export const UN_AUTHENTICATION_ROUTERS = {
  LOGIN: '/login'
}

export const ROUTERS = {
  ...AUTHENTICATION_ROUTERS,
  ...UN_AUTHENTICATION_ROUTERS
}
