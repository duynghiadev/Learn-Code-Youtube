import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Register()
{
	
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	
	const handleChangeUsername = (event) =>
		{
			const username = event.target.value
			setUsername(username)
		}
	
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
	
	const handleRegister = async (event) =>
		{
			event.preventDefault()
			const response = await axios.post('api/auth/register', {
				username, email, password
			})
			if (response.status === 200) {
				return navigate('/login')
			}
		}
	
	return (
		<div className="register-page">
			<div className="register-box">
				<div className="register-logo">
					<a href="../../index2.html">
						<b>Code</b>
						Love
					</a>
				</div>
				
				<div className="card">
					<div className="card-body register-card-body">
						<p className="login-box-msg">Register a new membership</p>
						
						<form onSubmit={handleRegister}>
							<div className="input-group mb-3">
								<input
									id="username"
									type="text"
									className="form-control"
									placeholder="User name"
									onChange={handleChangeUsername}
									value={username}
								/>
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-user"></span>
									</div>
								</div>
							</div>
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
										Register
									</button>
								</div>
							</div>
						</form>
						
						<div className="social-auth-links text-center">
							<p>- OR -</p>
							<a href="#" className="btn btn-block btn-primary">
								<i className="fab fa-facebook mr-2"></i>
								Sign up using Facebook
							</a>
							<a href="#" className="btn btn-block btn-danger">
								<i className="fab fa-google-plus mr-2"></i>
								Sign up using Google+
							</a>
						</div>
						
						<Link to="/login" className="text-center"> I already have a membership </Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register
