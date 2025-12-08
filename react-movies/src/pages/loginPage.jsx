import React from "react";
import { Link } from "react-router";
import {Box, Typography, Paper, TextField, Button, Stack, } from "@mui/material";

const LoginPage = () => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          Login
        </Typography>

        <Typography variant="body2">
          You must log in to view protected pages.
        </Typography>

        <Stack spacing={2}>
          <TextField label="Username" fullWidth />
          <TextField label="Password" type="password" fullWidth />
        </Stack>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 1 }}
        >
          Log In
        </Button>

        <Typography variant="body2">
          Not registered?{" "}
          <Link to="/signup">
            Sign up!
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginPage;
