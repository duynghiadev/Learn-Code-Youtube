import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import AddEditUserForm from "../components/AddEditUserForm";
import CustomButton from "../components/Button";
import { editUser } from "../redux/actions/userActions";
import { selectUserById } from "../redux/reducers/userReducer";

const EditUser = () => {
  const { id } = useParams();

  const user = useSelector((state) => selectUserById(state, Number(id)));

  const { pathname } = useLocation();

  return (
    <Box sx={{ width: "100vw", height: "90vh" }}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        {/* Button */}
        <Link to="/">
          <CustomButton text="go back" />
        </Link>
        {/* Heading */}
        <Typography variant="h4" mt={5}>
          Esit User
        </Typography>

        {/* Add User Form */}
        {user && (
          <AddEditUserForm
            onSubmit={editUser}
            initialUser={user}
            pathname={pathname}
          />
        )}
      </Stack>
    </Box>
  );
};

export default EditUser;
