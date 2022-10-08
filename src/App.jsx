import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Table from "./components/Table";
import NavBar from "./components/NavBar";
import Graphic from "./components/Graphic";
import "./App.css";
import useFetch from "./useFetch";
import LoadingSpinner from "./components/LoadingSpinner";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const params = useParams();
  const currentLocation = params.location ?? "YYT";
  const { avwx, isLoading } = useFetch(currentLocation);
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div className="App">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Table className="Table" data={avwx} />
          )}
          <Graphic location={currentLocation} />
        </div>
        <NavBar onSelect={(newLocation) => navigate(newLocation)} />
        <Outlet />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
