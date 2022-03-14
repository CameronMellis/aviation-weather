import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FlightIcon from '@mui/icons-material/Flight';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={5}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label='Refresh' icon={<AutorenewIcon />} />
        <BottomNavigationAction label='YYT' icon={<FlightIcon />} />
        <BottomNavigationAction label='YUL' icon={<FlightIcon />} />
        <BottomNavigationAction label='YHZ' icon={<FlightIcon />} />
      </BottomNavigation>
    </Box>
  );
}
