import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import AdminLayout from '../layout/AdminLayout'

function CreateUser()
{
	
	const navigate = useNavigate()
	const [stateInput, setStateInput] = useState({
		username: '',
		email: '',
		password: '',
		role: ''
	})
	
	const handleChange = (event) =>
		{
			const newState = {
				...stateInput,
				[event.target.name]: event.target.value
			}
			setStateInput(newState)
		}
	
	const handleSubmitAddUser = async (event) =>
		{
			try {
				event.preventDefault()
				const response = await axios.post('auth/admin/user/create', stateInput)
				if (response.status === 200) {
					navigate('/admin')
				}
			} catch (error) {
			
			}
		}
	
	return (
		<AdminLayout>
			<div className="content-wrapper">
				<div className="content-header">
					<div className="container-fluid">
						<div className="row mb-2"></div>
					</div>
				</div>
				
				<section className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-8">
								<div className="card card-primary">
									<div className="card-header">
										<h3 className="card-title">
											Create User
										</h3>
									</div>
									
									<form onSubmit={handleSubmitAddUser}>
										<div className="card-body">
											<div className="form-group">
												<label className="float-left">Username</label>
												<input
													type="text"
													className="form-control"
													placeholder="Enter Username"
													value={stateInput.username}
													onChange={handleChange}
													name="username"
												/>
											</div>
											<div className="form-group">
												<label className="float-left">Email</label>
												<input
													type="email"
													className="form-control"
													placeholder="Enter Email"
													value={stateInput.email}
													onChange={handleChange}
													name="email"
												/>
											</div>
											<div className="form-group">
												<label className="float-left">Password</label>
												<input
													type="password"
													className="form-control"
													placeholder="Password"
													value={stateInput.password}
													onChange={handleChange}
													name="password"
												/>
											</div>
											<div className="form-group">
												<label className="float-left">Role</label>
												<select
													onChange={handleChange}
													name="role"
													value={stateInput.role}
													className="custom-select rounded-0"
												>
													<option value="">Choose Role</option>
													<option value="editor">Editor</option>
													<option value="author">Author</option>
													<option value="contributor">Contributor</option>
												</select>
											</div>
										</div>
										<div className="card-footer">
											<button
												type="submit"
												className="btn btn-primary"
											>
												Submit
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</AdminLayout>
	)
}

export default CreateUser
