import { ButtonGroup, Button } from "@material-ui/core";
import { StatusEnum } from "common/constants";

const { TODO, IN_PROGRESS, DONE, CANCELED, DELETE } = StatusEnum;

export const ActionGroup = ({
  statusState,
  onUpdateTask,
}: {
  statusState: StatusEnum;
  onUpdateTask: (state: StatusEnum) => void;
}) => {
  const Buttons = () => {
    switch (statusState) {
      case TODO:
        return (
          <>
            <Button color="primary" onClick={() => onUpdateTask(IN_PROGRESS)}>
              Start
            </Button>
            <Button onClick={() => onUpdateTask(DELETE)}>Delete</Button>
          </>
        );
      case IN_PROGRESS:
        return (
          <>
            <Button color="secondary" onClick={() => onUpdateTask(DONE)}>
              Done
            </Button>
            <Button onClick={() => onUpdateTask(CANCELED)}>Cancel</Button>
          </>
        );
      // Canceled and done has same case
      case CANCELED:
      case DONE:
        return <Button onClick={() => onUpdateTask(DELETE)}>Delete</Button>;
      // Delete case is same as default
      default:
        return <></>;
    }
  };

  return (
    <ButtonGroup>
      <Buttons />
    </ButtonGroup>
  );
};
