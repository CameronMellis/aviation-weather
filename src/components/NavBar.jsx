import React, { useState, useParams } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FlightIcon from "@mui/icons-material/Flight";
import useFetch from "../useFetch";

// eslint-disable-next-line react/prop-types
export default function NavBar({ onSelect }) {
  const [value, setValue] = useState(0);

  return (
    <Box elevation={3}>
      <BottomNavigation
        sx={{ height: 45 }}
        showLabels
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Refresh"
          onClick={useFetch()}
          icon={<AutorenewIcon />}
        />
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
      </BottomNavigation>
    </Box>
  );
}
