import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

const getLocation = (location) => {
  switch (location) {
    case "YYT":
    case "YHZ":
      return "gfacn34";
    case "YUL":
      return "gfacn33";
    default:
      throw new Error("Invalid airport code");
  }
};

const getMap = (location, type, time) =>
  `https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/${location}/Latest-${location}_${type}_${time}.png`;

export default function Graphic({ location }) {
  const [time, setTime] = useState("006");

  return (
    <>
      <div className="GFAcontainer">
        <img
          className="GFA"
          id="GfaClouds"
          src={getMap(getLocation(location), "cldwx", time)}
          alt="GFA"
        />
      </div>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
        }}
      >
        <Button
          sx={{ m: 1, ml: 15, mr: 3, width: 160 }}
          className="Buttons"
          variant="contained"
          size="small"
          onClick={() => {
            setTime("000");
          }}
        >
          Previous 6HR
        </Button>
        <Button
          sx={{ m: 1, mr: 3, width: 160 }}
          className="Buttons"
          variant="contained"
          size="small"
          onClick={() => {
            setTime("006");
          }}
        >
          CURRENT
        </Button>
        <Button
          sx={{ m: 1, width: 160 }}
          className="Buttons"
          variant="contained"
          size="small"
          onClick={() => {
            setTime("012");
          }}
        >
          Next 6HR
        </Button>
      </Box>
      <div className="GFAcontainer">
        <img
          className="GFA"
          id="GfaIcing"
          src={getMap(getLocation(location), "turbc", time)}
          alt="GFA Icing and Turbulence"
        />
      </div>
    </>
  );
}
Graphic.propTypes = {
  location: PropTypes.string.isRequired,
};
