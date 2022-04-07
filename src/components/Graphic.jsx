import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

export default function GraphicalForecast({ onSelect }) {
  const midnight =
    "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_cldwx_000.png";
  const six =
    "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_cldwx_006.png";
  const twelve =
    "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_cldwx_012.png";
  const midnightIce =
    "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_turbc_000.png";
  const sixIce =
    "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_turbc_006.png";
  const twelveIce =
    "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_turbc_012.png";
  const forecast = { midnight, six, twelve, midnightIce, sixIce, twelveIce };

  const [selected, setSelected] = useState(forecast.six);
  const [selectedIce, setSelectedIce] = useState(forecast.sixIce);

  return (
    <Box>
      <img className="GFA" id="GfaClouds" src={selected} alt="GFA 34" />
      <Button
        sx={{ m: 1, ml: 5, width: 227 }}
        className="Buttons"
        variant="contained"
        size="small"
        onClick={() => {
          setSelected(forecast.midnight);
          setSelectedIce(forecast.midnightIce);
        }}
      >
        Issued 0000Z
      </Button>
      <Button
        sx={{ m: 1, width: 227 }}
        className="Buttons"
        variant="contained"
        size="small"
        onClick={() => {
          setSelected(forecast.six);
          setSelectedIce(forecast.sixIce);
        }}
      >
        Issued 0600Z
      </Button>
      <Button
        sx={{ m: 1, width: 227 }}
        className="Buttons"
        variant="contained"
        size="small"
        onClick={() => {
          setSelected(forecast.twelve);
          setSelectedIce(forecast.twelveIce);
        }}
      >
        Issued 1200Z
      </Button>
      <img
        className="GFA"
        id="GfaIcing"
        src={selectedIce}
        alt="GFA 34 Icing and Turbulence"
      />
    </Box>
  );
}
