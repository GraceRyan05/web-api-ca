import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        You must log in to see your profile
      </Typography>

      <Button variant="contained" onClick={() => navigate("/login")}>
        Go to Login
      </Button>
    </Box>
  );
};

export default ProfilePage;
