import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
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
      <div className="App">
        <Header />
        <Table className="Table" data={avwx} />
      </div>

      <div>
        <Graphic location={location} />
      </div>
      <NavBar onSelect={setLocation} />
    </ThemeProvider>
  );
}

export default App;

/* const response = fetch(   * FOR NOTAMS, NOT USED YET 
        'http://localhost:3000/weather/api/alpha/?point=CYDF%7Csite%7C-52.752,47.619&alpha=notam&notam_choice=default&_=1647198259823'
      );
      console.log(await (await response).json()); */
