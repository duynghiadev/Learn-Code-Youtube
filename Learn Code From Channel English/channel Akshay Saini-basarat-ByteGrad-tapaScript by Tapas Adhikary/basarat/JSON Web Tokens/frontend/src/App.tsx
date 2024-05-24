import * as jwt from 'jsonwebtoken'
import * as React from 'react'
import { base, Horizontal, Vertical, Content } from 'gls'
import { cssRaw, style } from 'typestyle'
base('#root')
cssRaw('body {font-family: Arial}')

const loginEndpoint = 'http://localhost:3000/api/login'
const actionsEndpoint = 'http://localhost:3000/api/actions'

export const App: React.FC = () => {
  const [token, setToken] = React.useState<any>(null)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [actions, setActions] = React.useState<{ name: string; image: string }[]>([])

  const [success, setSuccess] = React.useState<string>('')
  const [error, setError] = React.useState<string>('')

  const clearMessages = () => {
    setSuccess('')
    setError('')
  }

  const onLogin = async () => {
    clearMessages()
    setActions([])
    const res = await fetch(loginEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })

    const body = await res.json()
    if (body.error) {
      return setError(body.error)
    }

    let token: any
    try {
      token = jwt.decode(body.token)
    } catch (e) {
      return setError('Failed to decode')
    }

    const user = token.username

    setSuccess(`Logged in ${user}`)
    setToken(body.token)
  }

  const onLoadActions = async () => {
    clearMessages()
    const res = await fetch(actionsEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    })

    const body = await res.json()
    if (body.error) {
      return setError(body.error)
    }

    setSuccess('Actions loaded')
    setActions(body.actions)
  }

  return (
    <Vertical padding={20} spacing={12} maxWidth={400}>
      {/* Login form */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onLogin()
        }}
      >
        <Vertical>
          <Vertical spacing={5}>
            <label htmlFor='username'>Username</label>
            <input
              id='username'
              value={username}
              onChange={(e) => {
                clearMessages()
                setUsername(e.target.value)
              }}
            />
          </Vertical>
          <Vertical spacing={5}>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => {
                clearMessages()
                setPassword(e.target.value)
              }}
            />
          </Vertical>
          <button id='login'>Login</button>
        </Vertical>
      </form>

      {/* Load actions */}
      <button onClick={onLoadActions}>Load Actions</button>

      {/* Display success */}
      {success != '' && <div style={{ color: '#23b100', fontSize: '30px', fontWeight: 'bold' }}>{success}</div>}

      {/* Display error */}
      {error != '' && <div style={{ color: '#ff006a', fontSize: '30px', fontWeight: 'bold' }}>{error}</div>}

      {/* Display actions */}
      {actions.length != 0 && (
        <Vertical spacing={10}>
          {actions.map((action) => {
            return (
              <Horizontal key={action.name} id={action.name} verticalAlign='center'>
                <Content width={50} horizontalAlign='right'>
                  <img src={action.image} className={style({ height: '40px' })} />
                </Content>
                <Content>
                  <div className='action-name'>{action.name}</div>
                </Content>
              </Horizontal>
            )
          })}
        </Vertical>
      )}
    </Vertical>
  )
}
