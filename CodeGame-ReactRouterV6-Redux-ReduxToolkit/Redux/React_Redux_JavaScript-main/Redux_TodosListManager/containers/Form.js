import {  connect } from "react-redux"
import { addTodo } from "../redux/actions"
import Form from "../components/Form"
import {combineReducers} from "../redux/reducer";

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todoName) => dispatch(addTodo(todoName))
});

export default connect(null, mapDispatchToProps)(Form);