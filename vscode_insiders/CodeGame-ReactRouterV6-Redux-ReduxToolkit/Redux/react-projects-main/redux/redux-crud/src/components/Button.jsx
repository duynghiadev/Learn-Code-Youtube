import { Button, styled } from "@mui/material";
import React from "react";

const CustomButton = ({ bgColor = "darkblue", onClick = () => {}, text }) => {
  const StyledButton = styled(Button)({
    backgroundColor: bgColor,
    color: "white",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: bgColor,
      fontWeight: "bold",
    },
  });

  return (
    <StyledButton size="small" onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default CustomButton;
