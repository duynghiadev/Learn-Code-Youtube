import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddGoal,
  handleDeleteGoal
} from '../actions/goals'

class Goals extends React.Component {
  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddGoal(
      this.input.value,
      () => this.input.value = ''
    ))
  }
  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal))
  }
  render() {
    return (
			<div className="container">
				<h2>Goals</h2>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Add Goal"
						ref={(input) => this.input = input}
					/>
					<div className="input-group-append">
						<button
							onClick={this.addItem}
							className="btn btn-outline-secondary" type="button">
							Add Goal
						</button>
					</div>
				</div>
				<List
					items={this.props.goals}
					remove={this.removeItem}
				/>
			</div>
    )
  }
}

export default connect((state) => ({
  goals: state.goals
}))(Goals)