import { ThemeProvider } from "@emotion/react";
import {
  Add,
  CalendarMonth,
  Image,
  InsertEmoticon,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { AppContext } from "./app-context";
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const { theme } = useContext(AppContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <NavBar />
          <Stack direction={"row"} spacing={2} justifyContent="space-between">
            <SideBar />
            <Feed />
            <RightBar />
          </Stack>
          <Tooltip
            title="Add Post"
            sx={{ position: "fixed", bottom: 30, left: 10 }}
          >
            <Fab color="primary" aria-label="add" onClick={() => setOpen(true)}>
              <Add />
            </Fab>
          </Tooltip>
        </Box>

        {/* Dialog */}
        <Dialog open={open} onClose={handleClose} maxWidth="md">
          <Box sx={{ width: "60vw" }}>
            <DialogTitle sx={{ textAlign: "center", mt: 1 }}>
              Create Post
            </DialogTitle>
            <DialogContent>
              <Stack direction={"row"} alignItems="center" gap={"10px"}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                  sx={{ width: "30px", height: "30px" }}
                />
                <Typography variant="span" fontWeight={500}>
                  John Doe
                </Typography>
              </Stack>
              <TextField
                multiline
                rows={3}
                label="Whats on your mind"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <Box sx={{ padding: "0 20px" }}>
              <IconButton aria-label="delete">
                <InsertEmoticon color="primary" />
              </IconButton>
              <IconButton aria-label="delete">
                <Image color="secondary" />
              </IconButton>
              <IconButton aria-label="delete">
                <VideoCameraBack color="success" />
              </IconButton>
              <IconButton aria-label="delete">
                <PersonAdd color="error" />
              </IconButton>
            </Box>
            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "stretch",
              }}
            >
              <Button
                onClick={handleClose}
                sx={{
                  flex: 1,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                variant="contained"
              >
                Post
              </Button>
              <Box sx={{ backgroundColor: "#1976d2", px: 2 }}>
                <IconButton onClick={handleClose}>
                  <CalendarMonth sx={{ color: "white" }} />
                </IconButton>
              </Box>
            </DialogActions>
          </Box>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default App;
