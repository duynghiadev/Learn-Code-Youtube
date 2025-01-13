import { ROUTERS } from 'defines'
import { useRouteRender } from 'hooks'
import { AboutPage, HomePage, LoginPage, ThemePage } from 'page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: ROUTERS.HOME,
      element: useRouteRender(<HomePage />)
    },
    {
      path: ROUTERS.ABOUT,
      element: useRouteRender(<AboutPage />)
    },
    {
      path: ROUTERS.THEME,
      element: useRouteRender(<ThemePage />)
    },
    {
      path: ROUTERS.LOGIN,
      element: useRouteRender(<LoginPage />)
    }
  ])
  return <RouterProvider router={router} />
}
