import { Box, Button, Container, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { locationsTab } from "../mocks/tabs";
import { AiFillFilter } from "react-icons/ai";

const FilterBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth={"lg"}
      sx={{ mt: 2, display: "flex", justifyContent: "space-between", mb: 2 }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{ flex: 1 }}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {locationsTab.map((tab) => (
          <Tab icon={tab.icon} label={tab.label} key={tab.id} />
        ))}
      </Tabs>
      <Button
        startIcon={<AiFillFilter />}
        sx={{
          alignSelf: "center",
          px: 1,
          border: "1px solid #ddd",
          display: { xs: "none", md: "flex" },
        }}
      >
        Filters
      </Button>
    </Container>
  );
};

export default FilterBar;
