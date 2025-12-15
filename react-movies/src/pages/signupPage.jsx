import React, { useState, useContext } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { Navigate } from "react-router";
import { AuthContext } from "../contexts/authContext";

const SignUpPage = () => {
  const context = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [error, setError] = useState(""); // <-- error state
  const [registered, setRegistered] = useState(false);

  const handleRegister = async () => {
    setError(""); // reset error

    // Password validation regex: at least 8 chars, one letter, one digit, one symbol
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!passwordRegEx.test(password)) {
      setError(
        "Password must be at least 8 characters, include a letter, a number, and a special character."
      );
      return;
    }

    if (password !== passwordAgain) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const success = await context.register(userName, password);
      if (success) {
        setRegistered(true); // redirect to login
      } else {
        setError("Registration failed. Username may already exist.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  if (registered) {
    return <Navigate to="/login" />;
  }

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
          Register a username and password to log in. Password must be at least 8 characters with a letter, a number, and a symbol.
        </Typography>

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

        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          value={passwordAgain}
          onChange={(e) => setPasswordAgain(e.target.value)}
        />

        {error && <Typography color="error">{error}</Typography>} {/* <-- display errors */}

        <Button variant="contained" fullWidth onClick={handleRegister}>
          Register
        </Button>
      </Paper>
    </Box>
  );
};

export default SignUpPage;
