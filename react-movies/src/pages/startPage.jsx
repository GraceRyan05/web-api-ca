import React from "react";
import { Link } from "react-router";
import { Box, Typography, Button, Stack, useTheme } from "@mui/material";

const StartPage = () => {
  const theme = useTheme(); // Access current theme (light or dark)

  return (
    <Box
      sx={{
        position: "fixed",
        top: 64,
        left: 0,
        width: "100%",
        height: "calc(100vh - 64px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: theme.palette.mode === "dark" ? "#fff" : "#212121",
        padding: 2,
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.default
            : "#f5f5f5",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <Box sx={{ maxWidth: "700px" }}>
        <Typography
          variant="h2"
          fontWeight="800"
          sx={{ mb: 3 }}
        >
          Welcome to TMDB+
        </Typography>

        <Typography
          variant="h6"
          sx={{ mb: 5 }}
        >
          Discover trending movies, save your favourites, and explore what’s new.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          <Button
            variant="contained"
            component={Link}
            to="/login"
            sx={{
              px: 4,
              py: 1.2,
              fontSize: "1rem",
              backgroundColor: "#005c2e",
              "&:hover": { backgroundColor: "#007b3a" },
              color: "white",
            }}
          >
            LOGIN
          </Button>

          <Button
            variant="outlined"
            component={Link}
            to="/signup"
            sx={{
              px: 4,
              py: 1.2,
              fontSize: "1rem",
              color: theme.palette.mode === "dark" ? "#fff" : "#212121",
              borderColor: theme.palette.mode === "dark" ? "#fff" : "#212121",
              "&:hover": {
                borderColor: theme.palette.mode === "dark" ? "#ddd" : "#555",
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.05)",
              },
            }}
          >
            SIGN UP
          </Button>

          <Button
            variant="text"
            component={Link}
            to="/movies"
            sx={{
              px: 4,
              py: 1.2,
              fontSize: "1rem",
              color: theme.palette.mode === "dark" ? "#fff" : "#212121",
              textDecoration: "underline",
              "&:hover": { opacity: 0.8 },
            }}
          >
            BROWSE MOVIES
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default StartPage;
