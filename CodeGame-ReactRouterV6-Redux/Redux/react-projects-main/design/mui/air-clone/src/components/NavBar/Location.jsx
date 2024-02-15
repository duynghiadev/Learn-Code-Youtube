import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

const LocButton = styled(Button)({
  padding: "15px 24px",
});

const Location = () => {
  return (
    <Paper elevation={3} sx={{ borderRadius: "20px" }}>
      <Stack
        spacing={0}
        sx={{ padding: 0, borderRadius: "20px" }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <LocButton>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.primary,
              fontWeight: "bold",
            }}
          >
            Anywhere
          </Typography>
        </LocButton>
        <LocButton>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.primary,
              fontWeight: "bold",
            }}
          >
            Any Week
          </Typography>
        </LocButton>
        <LocButton
          endIcon={<IoSearchCircleSharp color={pink[500]} size="25px" />}
        >
          <Typography
            sx={{
              color: (theme) => theme.palette.text.primary,
              fontWeight: "bold",
            }}
          >
            Add Guest
          </Typography>
        </LocButton>
      </Stack>
    </Paper>
  );
};

export default Location;
