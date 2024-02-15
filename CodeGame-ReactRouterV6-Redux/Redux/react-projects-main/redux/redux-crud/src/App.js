import { Box, CssBaseline, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./views/AddUser";
import EditUser from "./views/EditUser";
import UsersList from "./views/UsersList";

function App() {
  return (
    <>
      <CssBaseline />
      <Box>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginTop: "1rem", fontWeight: "bold" }}
        >
          CRUD Application using Redux-Thunk
        </Typography>
        <Box mt={3}>
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/add" element={<AddUser />} />
            <Route path="/edit/:id" element={<EditUser />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
