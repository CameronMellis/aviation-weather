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
  const [selected, setSelected] = useState(
    getMap(getLocation(location), "cldwx", "006")
  );
  const [selectedIce, setSelectedIce] = useState(
    getMap(getLocation(location), "turbc", "006")
  );

  return (
    <>
      <img className="GFA" id="GfaClouds" src={selected} alt="GFA" />
      <Box>
        <Button
          sx={{ m: 1, width: 245 }}
          className="Buttons"
          variant="contained"
          size="small"
          onClick={() => {
            setSelected(getMap(getLocation(location), "cldwx", "000"));
            setSelectedIce(getMap(getLocation(location), "turbc", "000"));
          }}
        >
          Previous 6HR Forecast
        </Button>
        <Button
          sx={{ m: 1, width: 245 }}
          className="Buttons"
          variant="contained"
          size="small"
          onClick={() => {
            setSelected(getMap(getLocation(location), "cldwx", "006"));
            setSelectedIce(getMap(getLocation(location), "turbc", "006"));
          }}
        >
          6HR Forecast
        </Button>
        <Button
          sx={{ m: 1, width: 245 }}
          className="Buttons"
          variant="contained"
          size="small"
          onClick={() => {
            setSelected(getMap(getLocation(location), "cldwx", "012"));
            setSelectedIce(getMap(getLocation(location), "turbc", "012"));
          }}
        >
          Next 6HR Forecast
        </Button>
      </Box>
      <img
        className="GFA"
        id="GfaIcing"
        src={selectedIce}
        alt="GFA Icing and Turbulence"
      />
    </>
  );
}
Graphic.propTypes = {
  location: PropTypes.string.isRequired,
};
