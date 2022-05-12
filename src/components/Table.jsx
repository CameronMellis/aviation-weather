/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function SubHeader({ flightRules }) {
  let color = "#616161";
  if (flightRules === "VFR") {
    color = "green";
  } else if (flightRules === "MVFR") {
    color = "#039be5";
  } else if (flightRules === "IFR") {
    color = "red";
  } else if (flightRules === "LIFR") {
    color = "magenta";
  }
  return (
    <TableCell
      sx={{ fontSize: 18, fontWeight: "bold", backgroundColor: color }}
      align="center"
    >
      {" "}
      {flightRules}
    </TableCell>
  );
}

export default function DenseTable(props) {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer
        sx={{
          fontSize: "20px",
          backgroundColor: "#616161",
        }}
        component={Paper}
        className="Table"
      >
        <Typography variant="body1" component="div" gutterBottom>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#616161" }}>
                <TableCell
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                    backgroundColor: "#616161",
                  }}
                  align="left"
                >
                  Flight Rules
                </TableCell>
                <TableCell
                  sx={{ fontSize: 18, fontWeight: "bold" }}
                  align="left"
                >
                  METAR/TAF
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((row) => (
                <TableRow
                  key={row.raw}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <SubHeader flightRules={row.flight_rules} />
                  <TableCell
                    sx={{
                      fontSize: 18,
                      fontWeight: "medium",
                      backgroundColor: "#8e8e8e",
                    }}
                    align="left"
                  >
                    {/* This REGEX formats the raw Terminal Area Forecast into readable paragraphs that line breaks by time period BECMG or FM */}
                    {row.raw.replace(/BECMG|FM[0-9]*/g, (oldValue) => {
                      return `\n${oldValue}`;
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Typography>
      </TableContainer>
    </ThemeProvider>
  );
}
