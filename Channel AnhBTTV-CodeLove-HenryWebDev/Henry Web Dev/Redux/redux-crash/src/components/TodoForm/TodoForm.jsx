import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (title !== "") {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      addTodo(newTodo);
      setTitle("");
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          name="title"
          onChange={onTitleChange}
          value={title}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addTodo })(TodoForm);
