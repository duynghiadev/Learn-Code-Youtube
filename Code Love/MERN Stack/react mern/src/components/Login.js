import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {useDispatch} from 'react-redux'

function Login()
{
	
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	
	const handleChangeEmail = (event) =>
		{
			const email = event.target.value
			setEmail(email)
		}
	
	const handleChangePassword = (event) =>
		{
			const password = event.target.value
			setPassword(password)
		}
	
	const handleLogin = async (event) =>
		{
			event.preventDefault()
			const response = await axios.post('api/auth/login', {
				email, password
			})
			const accessToken = response.data.accessToken
			const user = jwt_decode(accessToken)
			
			// 1. save infomation to store
			dispatch({
				type: 'LOGIN_SUCCESS', payload: user
			})
			
			// 2. redirect to admin page
			if (user.role != 'regular') {
				navigate('/admin')
			} else {
				// redirect to home page
				navigate('/home')
			}
			
			// 3. save to localstorage
			localStorage.setItem('accessToken', accessToken)
			
		}
	
	return (<div className="login-page">
		<div className="login-box">
			<div className="login-logo">
				<a href="../../index2.html">
					<b>Admin</b>
					LTE
				</a>
			</div>
			<div className="card">
				<div className="card-body login-card-body">
					<p className="login-box-msg">
						Sign in to start your session
					</p>
					
					<form onSubmit={handleLogin}>
						<div className="input-group mb-3">
							<input
								id="email"
								type="email"
								className="form-control"
								placeholder="Email"
								onChange={handleChangeEmail}
								value={email}
							/>
							<div className="input-group-append">
								<div className="input-group-text">
									<span className="fas fa-envelope"></span>
								</div>
							</div>
						</div>
						<div className="input-group mb-3">
							<input
								id="password"
								type="password"
								className="form-control"
								placeholder="Password"
								onChange={handleChangePassword}
								value={password}
							/>
							<div className="input-group-append">
								<div className="input-group-text">
									<span className="fas fa-lock"></span>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-4">
								<button
									type="submit"
									className="btn btn-primary btn-block"
								>
									Sign In
								</button>
							</div>
						</div>
					</form>
					
					<div className="social-auth-links text-center mb-3">
						<p>- OR -</p>
						<a href="#" className="btn btn-block btn-primary">
							<i className="fab fa-facebook mr-2"></i>
							Sign in using Facebook
						</a>
						<a href="#" className="btn btn-block btn-danger">
							<i className="fab fa-google-plus mr-2"></i>
							Sign in using Google+
						</a>
					</div>
					
					<p className="mb-1">
						<a href="forgot-password.html">
							I forgot my password
						</a>
					</p>
					<p className="mb-0">
						<Link to="/register" className="text-center"> Register a new membership </Link>
					</p>
				</div>
			</div>
		</div>
	</div>)
}

export default Login
