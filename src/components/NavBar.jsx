import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FlightIcon from "@mui/icons-material/Flight";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function NavBar({ onSelect }) {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <Box sx={{}} elevation={2}>
      <BottomNavigation
        sx={{ height: 50 }}
        showLabels
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Refresh"
          onClick={handleClick}
          icon={<AutorenewIcon />}
        />
        <BottomNavigationAction
          label="YYT"
          onClick={<Link to="/" />}
          icon={<FlightIcon />}
        />
        <BottomNavigationAction
          label="YUL"
          onClick={<Link to="/" />}
          icon={<FlightIcon />}
        />
        <BottomNavigationAction
          label="YHZ"
          onClick={() => onSelect("YHZ")}
          icon={<FlightIcon />}
        />
        <BottomNavigationAction label="NOTAMS" icon={<AnnouncementIcon />} />
      </BottomNavigation>
    </Box>
  );
}
