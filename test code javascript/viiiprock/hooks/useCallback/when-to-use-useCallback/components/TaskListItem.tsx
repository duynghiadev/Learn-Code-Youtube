import { useState } from "react";
import { ListItem, ListItemText, ListItemIcon, Icon } from "@material-ui/core";
import { StatusEnum, STATUS_COLORS, STATUS_ICONS } from "common/constants";
import { TaskListItemProps } from "types";
import { usePost } from "queries/hooks/usePost";
import { UPDATE_TODO } from "queries/endpoints";
import { ActionGroup } from "./ActionGroup";

function TaskListItem({ children, status, taskId }: TaskListItemProps) {
  const [statusState, setStatusState] = useState<StatusEnum>(status);
  const [postData, { loading, error }] = usePost(UPDATE_TODO);

  const handleUpdateTask = async (updateStatus: StatusEnum) => {
    setStatusState(updateStatus);
    // update to server
    return postData({
      id: taskId,
      status: updateStatus,
    });
  };

  return (
    <ListItem>
      <ListItemIcon>
        <Icon style={{ color: STATUS_COLORS[statusState] }}>{STATUS_ICONS[statusState]}</Icon>
      </ListItemIcon>
      <ListItemText style={{ color: STATUS_COLORS[statusState] }}>
        {children}
        {error && error.message}
        {loading && "Updating..."}
      </ListItemText>
      <ActionGroup statusState={statusState} onUpdateTask={handleUpdateTask} />
    </ListItem>
  );
}

export default TaskListItem;
