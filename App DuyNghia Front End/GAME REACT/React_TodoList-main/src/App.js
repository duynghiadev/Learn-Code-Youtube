import { useState, useCallback, useEffect } from "react";
import TodoList from "./component/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { v4 } from "uuid";

function App() {
  const TODO_STORAGE = "TODO_APP";
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback(
    (e) => {
      setTodoList([
        { id: v4(), name: textInput, isCompleted: false },
        ...todoList,
      ]);
      setTextInput("");
    },
    [textInput, todoList]
  );

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);

  useEffect(() => {
    const storageTodo = localStorage.getItem(TODO_STORAGE);
    if (storageTodo) {
      setTodoList(JSON.parse(storageTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_STORAGE, JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <h2>Danh Sách Cần Làm</h2>
      <Textfield
        name="add-todo"
        placeholder="Thêm việc cần làm..."
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={onAddBtnClick}
          >
            Thêm
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} />
    </>
  );
}

export default App;
