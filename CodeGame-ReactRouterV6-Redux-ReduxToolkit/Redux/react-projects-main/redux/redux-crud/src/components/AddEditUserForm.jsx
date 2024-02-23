import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddEditUserForm = ({ initialUser, onSubmit, pathname = "" }) => {
  const [name, setName] = useState(initialUser.name);
  const [email, setEmail] = useState(initialUser.email);
  const [contact, setContact] = useState(initialUser.contact);
  const [address, setAddress] = useState(initialUser.address);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, contact, address };
    if (pathname.includes("edit")) {
      user.id = initialUser.id;
    }
    dispatch(onSubmit(user, initialUser.id));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "16px", width: "300px" }}>
      <Stack gap={2}>
        <TextField
          id="standard-basic"
          label="name"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="contact"
          variant="standard"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="address"
          variant="standard"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button
          variant="contained"
          size="small"
          sx={{ alignSelf: "center", marginTop: "20px" }}
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default AddEditUserForm;
