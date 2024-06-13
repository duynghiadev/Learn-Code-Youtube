import { useContext } from 'react'
import { LoadingContext } from '../contexts/LoadingContext'

const Login = () => {
  const { setLoading } = useContext(LoadingContext)

  const onSubmit = () => {
    setLoading(true)
    // before starting to request api
    setTimeout(() => {
      // after receiving response from api
      setLoading(false)
    }, 3000)
  }

  return (
    <div id='layoutAuthentication' className='bg-primary'>
      <div id='layoutAuthentication_content'>
        <main>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-5'>
                <div className='card shadow-lg border-0 rounded-lg mt-5'>
                  <div className='card-header'>
                    <h3 className='text-center font-weight-light my-4'>Login</h3>
                  </div>
                  <div className='card-body'>
                    <form>
                      <div className='form-floating mb-3'>
                        <input
                          className='form-control'
                          type='email'
                          name='email'
                          placeholder='name@example.com'
                        />
                        <label>Email address</label>
                      </div>
                      <div className='form-floating mb-3'>
                        <input
                          className='form-control'
                          name='password'
                          type='password'
                          placeholder='Password'
                        />
                        <label>Password</label>
                      </div>
                      <div className='d-flex align-items-center justify-content-between mt-4 mb-0'>
                        <a className='small' href='password.html'>
                          Forgot Password?
                        </a>
                        <button className='btn btn-primary' type='button' onClick={onSubmit}>
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className='card-footer text-center py-3'>
                    <div className='small'>Need an account? Sign up!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id='layoutAuthentication_footer'>
        <footer className='py-4 bg-light mt-auto'>
          <div className='container-fluid px-4'>
            <div className='d-flex align-items-center justify-content-between small'>
              <div className='text-muted'>Copyright &copy; Your Website 2023</div>
              <div>
                <a href='#'>Privacy Policy</a>
                &middot;
                <a href='#'>Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Login
