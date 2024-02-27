import { useRoutes } from 'react-router-dom'
import * as content from '../../content'
import { Home } from '../../pages'

export function Route() {
  const {
    Overview,
    NestjsStarterRepo,
    ReactjsStarterRepo,
    CodieLandingPage,
    CssBattle,
    MovieLandingPage,
    SolanaTodoApp,
    ChineseChessGame
  } = content

  const routes = useRoutes([
    {
      path: '/',
      element: (
        <Home>
          <Overview />
        </Home>
      )
    },
    {
      path: 'starter-repos/nestjs-starter-repo',
      element: (
        <Home>
          <NestjsStarterRepo />
        </Home>
      )
    },
    {
      path: 'starter-repos/reactjs-starter-repo',
      element: (
        <Home>
          <ReactjsStarterRepo />
        </Home>
      )
    },
    {
      path: 'projects/codie-landing-page',
      element: (
        <Home>
          <CodieLandingPage />
        </Home>
      )
    },
    {
      path: 'projects/css-battle',
      element: (
        <Home>
          <CssBattle />
        </Home>
      )
    },
    {
      path: 'projects/movie-landing-page',
      element: (
        <Home>
          <MovieLandingPage />
        </Home>
      )
    },
    {
      path: 'projects/solana-todo-app',
      element: (
        <Home>
          <SolanaTodoApp />
        </Home>
      )
    },
    {
      path: 'projects/chinese-chess-game',
      element: (
        <Home>
          <ChineseChessGame />
        </Home>
      )
    },
    {
      path: '*',
      element: (
        <Home>
          <Overview />
        </Home>
      )
    }
  ])

  return routes
}
