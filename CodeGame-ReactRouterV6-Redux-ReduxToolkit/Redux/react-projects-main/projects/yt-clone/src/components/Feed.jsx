import { Box, Stack, styled, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { SideBar, Videos } from "./";
import * as rapidApiService from "../utils/rapid-api-service";

const RedText = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
}));

const Feed = () => {
  const [category, setCategory] = useState("New");

  const [categoryVideos, setcategoryVideos] = useState([]);

  useEffect(() => {
    const categoryUrl = `search?part=snippet&q=${category}`;
    rapidApiService.fetchFromApi(categoryUrl).then((data) => {
      setcategoryVideos(data.items);
      console.log(data.items);
    });
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <Stack
      sx={{
        flexDirection: { sm: "column", md: "row" },
        columnGap: { xs: 0, md: 1 },
        rowGap: { xs: 2, md: 0 },
      }}
    >
      {/* Left sidebar */}
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <SideBar
          currentCategory={category}
          onChangeCategory={handleCategoryChange}
        />
      </Box>

      {/* Category title and Category related videos */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          height: "90vh",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 2,
            color: "white",
            fontWeight: "bold",
          }}
        >
          {category} <RedText>videos</RedText>
        </Typography>

        {/* Videos */}
        <Videos videos={categoryVideos} />
      </Box>
    </Stack>
  );
};

export default Feed;
