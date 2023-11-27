import jwtDecode, { JwtPayload } from 'jwt-decode'

interface DecodedToken extends JwtPayload {}

export const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false
  }

  const decoded: DecodedToken = jwtDecode(accessToken)
  const currentTime = Date.now() / 1000

  return typeof decoded.exp === 'number' && decoded.exp > currentTime
}
