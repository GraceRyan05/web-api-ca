import React, { useState, useContext } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { AuthContext } from "../contexts/authContext"; // make sure path is correct

const SignUpPage = () => {
  const { register } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const result = await register(username, password);
      if (result) {
        setSuccess("Registration successful! You can now log in.");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
  };

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

        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="primary">{success}</Typography>}

        <Button variant="contained" fullWidth onClick={handleRegister}>
          Register
        </Button>
      </Paper>
    </Box>
  );
};

export default SignUpPage;
