import React, { useContext, useState } from "react";
import { Navigate, useLocation, Link } from "react-router";
import { Box, Typography, Paper, TextField, Button, Stack } from "@mui/material";
import { AuthContext } from "../contexts/authContext";


const LoginPage = () => {
  const context = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
    };

    let location = useLocation();

     // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

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
          <TextField
            label="Username"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 1 }}
          onClick={login}
        >
          Log In
        </Button>

        <Typography variant="body2">
          Not registered?{" "}
          <Link to="/signup">Sign up!</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginPage;
