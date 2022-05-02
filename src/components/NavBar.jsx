import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FlightIcon from "@mui/icons-material/Flight";
import { useParams, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function NavBar({ OnSelect }) {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const handleClick = () => {
    window.location.reload();
  };

  /* {<Link to="/" />} */

  return (
    <Box sx={{}} elevation={3}>
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
          onClick={handleClick}
          icon={<AutorenewIcon />}
        />
        <BottomNavigationAction
          label="YYT"
          onClick={() => {
            navigate("/YYT");
          }}
          icon={<FlightIcon />}
        />
        <BottomNavigationAction
          label="YUL"
          onClick={() => {
            navigate("/YUL");
          }}
          icon={<FlightIcon />}
        />
        <BottomNavigationAction
          label="YHZ"
          onClick={() => {
            navigate("/YHZ");
          }}
          icon={<FlightIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
