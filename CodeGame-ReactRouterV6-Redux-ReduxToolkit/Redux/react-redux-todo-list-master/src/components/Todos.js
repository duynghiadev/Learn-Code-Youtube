import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from '../actions/todos'

class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault()

    this.props.dispatch(handleAddTodo(
      this.input.value,
      () => this.input.value = ''
    ))
  }
  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))
  }
  toggleItem = (id) => {
    this.props.dispatch(handleToggle(id))
  }
  render() {
    return (
			<div className="container">
				<h2>Todo List</h2>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Add Todo"
						ref={(input) => this.input = input}
					/>
					<div className="input-group-append">
						<button
							onClick={this.addItem}
							className="btn btn-outline-secondary" type="button">
							Add Todo
						</button>
					</div>
				</div>
				<List
					items={this.props.todos}
					remove={this.removeItem}
					toggle={this.toggleItem}
				/>
			</div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos)