import { Button, Dialog, DialogContent, TextField } from "@material-ui/core";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { AuthContext } from "../contexts/AuthContext";

interface LoginProps {
  isOpen: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ isOpen, handleClose }: LoginProps) => {
  // context
  const { toggleAuth } = useContext(AuthContext);

  // state
  const [username, setUsername] = useState("");

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  const onLoginSubmit = () => {
    toggleAuth(username);
    setUsername("");
    handleClose(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose.bind(this, false)}>
      <DialogContent>
        <TextField
          label="Username"
          onChange={onUsernameChange}
          value={username}
          required
        />
      </DialogContent>
      <Button
        color="primary"
        variant="contained"
        onClick={onLoginSubmit}
        disabled={username === ""}
      >
        Login
      </Button>
    </Dialog>
  );
};

export default Login;
