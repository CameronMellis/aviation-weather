import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FlightIcon from "@mui/icons-material/Flight";
import HelpIcon from "@mui/icons-material/Help";

// eslint-disable-next-line react/prop-types
export default function NavBar({ onSelect }) {
  const [value, setValue] = useState(0);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Box elevation={2}>
      <BottomNavigation
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        showLabels
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="YYT"
          onClick={() => {
            onSelect("/YYT");
          }}
          icon={<FlightIcon />}
        />
        <BottomNavigationAction
          label="YUL"
          onClick={() => {
            onSelect("/YUL");
          }}
          icon={<FlightIcon />}
        />
        <BottomNavigationAction
          label="YHZ"
          onClick={() => {
            onSelect("/YHZ");
          }}
          icon={<FlightIcon />}
        />
        <BottomNavigationAction
          label="Read Me"
          onClick={() =>
            openInNewTab(
              "https://github.com/CameronMellis/aviation-weather#readme"
            )
          }
          icon={<HelpIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
