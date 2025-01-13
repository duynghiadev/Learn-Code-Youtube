import { AUTHENTICATION_ROUTERS, ROUTERS, UN_AUTHENTICATION_ROUTERS } from 'defines'
import { FC, ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const checkStringInObject = (obj: Record<string, string>, str: string): boolean => {
  return Object.values(obj).some((i) => i === str)
}

type Options = {
  noAuthen?: boolean
}

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const listSearch = searchParams?.toString()
  const accessToken = useSelector((state: RootState) => state.user.accessToken)
  const search = new URLSearchParams(location.search)
  const redirect = search.get('redirect')

  useEffect(() => {
    const stayInAuth = checkStringInObject(AUTHENTICATION_ROUTERS, location.pathname)
    const stayUnAuth = checkStringInObject(UN_AUTHENTICATION_ROUTERS, location.pathname)

    if (accessToken && stayUnAuth) {
      if (redirect) {
        const redirectParse = String(redirect)?.replaceAll(';', '&')?.replaceAll('/', '')
        navigate(`${ROUTERS.HOME}${redirectParse}`)
      } else {
        navigate(ROUTERS.HOME)
      }

      return
    }
    if (!accessToken && stayInAuth) {
      const defaultRedirect = listSearch
        ? `${location.pathname}?${listSearch?.replaceAll('&', ';')}`
        : location.pathname
      navigate(`${ROUTERS.LOGIN}?redirect=${redirect ? redirect : defaultRedirect}`)
    }
  }, [accessToken])

  return <>{children}</>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useRouteRender = (node: ReactNode, options?: Options) => {
  return <Container>{node}</Container>
}
