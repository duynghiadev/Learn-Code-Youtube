import { Search } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "white",
        px: "12px",
        py: "8px",
        width: "40%",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mr: { sm: 5 },
      }}
    >
      <InputBase
        placeholder="Search"
        sx={{
          flex: 1,
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <IconButton sx={{ p: 0 }} type="submit">
        <Search color="error" />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
