import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FlightIcon from '@mui/icons-material/Flight';
import AnnouncementIcon from '@mui/icons-material/Announcement';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const handleClick = () =>{
    window.location.reload();
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
       }}
      elevation={2}
    >
      <BottomNavigation sx={{ height: 50 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label='Refresh' onClick={handleClick} icon={<AutorenewIcon  />}  />
        <BottomNavigationAction label='YYT' icon={<FlightIcon />} />
        <BottomNavigationAction label='YUL' icon={<FlightIcon />} />
        <BottomNavigationAction label='YHZ' icon={<FlightIcon />} />
        <BottomNavigationAction label='NOTAMS' icon={<AnnouncementIcon />} />
      </BottomNavigation>
    </Box>
  );
}
