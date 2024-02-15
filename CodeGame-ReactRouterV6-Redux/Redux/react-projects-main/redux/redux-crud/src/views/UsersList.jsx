import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";
import { deleteUser } from "../redux/actions/userActions";
import { selectAllUsers } from "../redux/reducers/userReducer";

const UsersList = () => {
  const allUsers = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  let headings = [];

  if (allUsers.length > 0) {
    for (let user of allUsers) {
      Object.keys(user).forEach((key) => {
        if (!headings.find((h) => h === key)) {
          headings.push(key);
        }
      });
    }
  }

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <>
      <Stack direction="row" justifyContent="center">
        <Link to="/add">
          <CustomButton text={"add user"} />
        </Link>
      </Stack>
      {allUsers?.length !== 0 && (
        <Box mt={10} width="100vw">
          <TableContainer>
            <Table sx={{ width: "100%" }}>
              {/* table heading */}
              <TableHead>
                <TableRow
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    textTransform: "capitalize",
                    py: "10px",
                  }}
                >
                  {headings.map((heading) => (
                    <TableCell
                      sx={{ color: "white", border: "0" }}
                      key={heading}
                    >
                      {heading}
                    </TableCell>
                  ))}
                  <TableCell sx={{ color: "white", border: "0" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>

              {/* table body */}
              <TableBody>
                {allUsers.map((user) => (
                  <TableRow key={user.name}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.contact}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>
                      <Stack direction="row" gap={1}>
                        <CustomButton
                          text="delete"
                          bgColor="red"
                          onClick={() => handleDelete(Number(user.id))}
                        />
                        <CustomButton
                          text="edit"
                          onClick={() => navigate(`/edit/${user.id}`)}
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </>
  );
};

export default UsersList;
