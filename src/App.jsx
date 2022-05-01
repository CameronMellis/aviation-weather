import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link, Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Table from "./components/Table";
import NavBar from "./components/NavBar";
import Graphic from "./components/Graphic";
import "./App.css";
import useFetch from "./useFetch";

const Theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [location, setLocation] = useState("YYT");
  const { avwx } = useFetch(location);

  return (
    <ThemeProvider theme={Theme}>
      <Grid sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Outlet />
        <div className="App">
          <Table className="Table" data={avwx} />
          <Graphic location={location} />
        </div>
        <Link to="/YYT" state={useState("YYT")}>
          YYT
        </Link>
        <Link to="/YHZ" state={useState("YHZ")}>
          YHZ
        </Link>
        <Link to="/YUL" state={useState("YUL")}>
          YHZ
        </Link>
        <NavBar onSelect={setLocation} />
        <Outlet />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
