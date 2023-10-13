import {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import AdminLayout from '../layout/AdminLayout'

function Admin()
{
	const dispatch = useDispatch()
	const users = useSelector((state) => state.user)
	
	useEffect(() =>
	{
		async function getUser()
		{
			try {
				const response = await axios.get('auth/admin/user')
				
				// save to store
				dispatch({
					type: 'GET_USER_LIST',
					payload: response.data
				})
			} catch (error) {
				// log error
			}
		}
		
		getUser()
	}, [])
	
	const handleDeleteUser = async (userId) =>
		{
			try {
				const response = await axios.delete(`auth/admin/user/delete/${userId}`)
				if (response.status === 200) {
					// dispatch remove user delete
					dispatch({
						type: 'DELETE_USER',
						payload: userId
					})
				}
			} catch (error) {
			}
		}
	
	return (
		<AdminLayout id="User">
			<div className="content-wrapper">
				<div className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1 className="m-0">List User</h1>
							</div>
							<div className="col-sm-6">
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item">
										<Link
											to="/admin/user/create"
											className="btn btn-primary"
										> Create </Link>
									</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				
				<div className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-body table-responsive p-0">
										<table className="table table-hover text-nowrap">
											<thead>
												<tr>
													<th>ID</th>
													<th>UserName</th>
													<th>Role</th>
													<th>Email</th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												{users.map(function (user)
												{
													return (
														<tr key={user._id}>
															<td>183</td>
															<td>
																{user.username}
															</td>
															<td>{user.role}</td>
															<td>
																{user.email}
															</td>
															<td>
																<button
																	onClick={() => handleDeleteUser(user._id)}
																	class="btn btn-danger">Delete
																</button>
															</td>
														</tr>
													)
												})}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AdminLayout>
	)
}

export default Admin
