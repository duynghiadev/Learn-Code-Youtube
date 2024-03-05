import { ChangeEvent, useState } from "react";
import { Input } from "@material-ui/core";
import { TaskPropsType } from "types";
import { StatusEnum } from "common/constants";

interface TaskInputProps {
  onAdd: (task: TaskPropsType) => void;
  isLoading?: boolean;
}

function TaskInput({ onAdd, isLoading = false }: TaskInputProps) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    return setTaskTitle(e.currentTarget.value);
  };

  const addTask = () => {
    if (onAdd && taskTitle) {
      onAdd({
        id: Date.now(),
        title: taskTitle,
        status: StatusEnum.TODO,
      });
    }
    // reset title
    setTaskTitle("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTask();
      }}
    >
      <Input
        fullWidth
        type="text"
        placeholder={isLoading ? "Adding todo..." : "Add new todo"}
        disabled={isLoading}
        required
        value={taskTitle}
        onChange={handleChangeTitle}
        role="add"
        tabIndex={-1}
        style={{
          padding: "1rem",
        }}
      />
    </form>
  );
}

export default TaskInput;
