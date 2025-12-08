import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/authContext";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ onToggleTheme, isDarkMode }) => {
  const { isAuthenticated, userName, signout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const menuOptions = [
    { label: "Home", path: "/movies" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Popular", path: "/movies/popularMovies" },
    { label: "Top Rated", path: "/movies/topRatedMovies" },
    { label: "Trending", path: "/movies/trendingMovies" },
    { label: "Now Playing", path: "/movies/nowPlaying" },
    isAuthenticated && { label: "Favorites", path: "/movies/favorites" },
    isAuthenticated && { label: "Must Watch", path: "/movies/mustWatch" },
  ].filter(Boolean);

  const handleMenuSelect = (path) => {
    setAnchorEl(null);
    navigate(path);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Sign out and redirect to /startPage
  const handleSignout = () => {
    signout();
    navigate("/startPage");
  };

  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography
            variant="h4"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            TMDB
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleMenu}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
                {!isAuthenticated && (
                  <>
                    <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
                    <MenuItem onClick={() => navigate("/signup")}>Signup</MenuItem>
                  </>
                )}
                {isAuthenticated && (
                  <MenuItem onClick={handleSignout}>Sign Out</MenuItem>
                )}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}

              {!isAuthenticated ? (
                <>
                  <Button color="inherit" onClick={() => navigate("/login")}>
                    Login
                  </Button>
                  <Button color="inherit" onClick={() => navigate("/signup")}>
                    Signup
                  </Button>
                </>
              ) : (
                <>
                  <Typography sx={{ mx: 2 }}>Welcome {userName}!</Typography>
                  <Button color="inherit" onClick={handleSignout}>
                    Sign Out
                  </Button>
                </>
              )}
            </>
          )}

          <IconButton color="inherit" onClick={onToggleTheme}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
