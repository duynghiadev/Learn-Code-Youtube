import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import AddEditUserForm from "../components/AddEditUserForm";
import CustomButton from "../components/Button";
import { addUser } from "../redux/actions/userActions";

const AddUser = () => {
  return (
    <Box sx={{ width: "100vw", height: "90vh" }}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        {/* Button */}
        <Link to="/">
          <CustomButton text="go back" />
        </Link>
        {/* Heading */}
        <Typography variant="h4" mt={5}>
          Add User
        </Typography>

        {/* Add User Form */}
        <AddEditUserForm
          onSubmit={addUser}
          initialUser={{ name: "", email: "", contact: "", address: "" }}
        />
      </Stack>
    </Box>
  );
};

export default AddUser;
