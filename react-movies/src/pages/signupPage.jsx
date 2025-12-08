import React from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

const SignUpPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Create Account
        </Typography>

        <Typography variant="body2">
          Register a username and password to log in.
        </Typography>

        <TextField label="Username" fullWidth />

        <TextField label="Password" type="password" fullWidth />

        <TextField label="Confirm Password" type="password" fullWidth />

        <Button variant="contained" fullWidth>
          Register
        </Button>
      </Paper>
    </Box>
  );
};

export default SignUpPage;
