import { Container, List, ListItem } from "@material-ui/core";
import { ADD_TODO, TODOS } from "queries/endpoints";
import TaskInput from "components/TaskInput";
import TaskListItem from "components/TaskListItem";
import { useEffect, useState } from "react";
import { TaskPropsType } from "types";
import { useFetch } from "queries/hooks/useFetch";
import { usePost } from "queries/hooks/usePost";

function Home() {
  const [tasks, setTasks] = useState<TaskPropsType[]>([]);
  const [fetchData, { loading, error }] = useFetch(TODOS);

  useEffect(() => {
    fetchData().then((data) => {
      setTasks(data);
    });
  }, []);

  const [postData, { loading: createLoading, error: createError }] = usePost(ADD_TODO);

  const handleAddTask = async (task: TaskPropsType) => {
    // update local
    const updateTasks: TaskPropsType[] = [task, ...tasks];
    setTasks(updateTasks);

    return postData(task);
  };

  if (createError) {
    alert(`Create unsuccessful: ${createError}`);
  }

  return (
    <Container maxWidth="md">
      <TaskInput isLoading={createLoading} onAdd={handleAddTask} />

      {loading && "Loading data..."}
      {error && error.message}
      <List>
        {tasks.length <= 0 ? (
          <ListItem>Empty!!!</ListItem>
        ) : (
          tasks.map((task: TaskPropsType) => {
            return (
              <TaskListItem key={task.id} status={task.status} taskId={task.id}>
                {task.title}
              </TaskListItem>
            );
          })
        )}
      </List>
    </Container>
  );
}

export default Home;
