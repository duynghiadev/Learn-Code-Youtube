import { Stack, styled, Typography } from "@mui/material";
import React from "react";
import { FaAirbnb } from "react-icons/fa";

const AirLogo = styled(FaAirbnb)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "40px",
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "20px",
  padding: "0px 0px",
  fontWeight: "bold",
}));

const Logo = () => {
  return (
    <Stack alignItems={"center"}>
      <AirLogo />
      <Title>Airbnb</Title>
    </Stack>
  );
};

export default Logo;
