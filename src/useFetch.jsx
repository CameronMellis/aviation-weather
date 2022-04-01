import { useEffect, useState } from "react";

const getURLs = (location) => {
  switch (location) {
    case "YYT":
      return [
        "https://avwx.rest/api/metar/CYYT",
        "https://avwx.rest/api/taf/CYYT",
        "https://avwx.rest/api/metar/CYQX",
        "https://avwx.rest/api/taf/CYQX",
        "https://avwx.rest/api/metar/CYDF",
        "https://avwx.rest/api/taf/CYDF",
        "https://avwx.rest/api/metar/CYJT",
        "https://avwx.rest/api/taf/CYJT",
        "https://avwx.rest/api/metar/CYYR",
        "https://avwx.rest/api/taf/CYYR",
        "https://avwx.rest/api/metar/CZUM",
        "https://avwx.rest/api/taf/CZUM",
        "https://avwx.rest/api/metar/CYWK",
        "https://avwx.rest/api/taf/CYWK",
      ];

    case "YUL":
      return [
        "https://avwx.rest/api/metar/CYUL",
        "https://avwx.rest/api/taf/CYUL",
        "https://avwx.rest/api/metar/CYQB",
        "https://avwx.rest/api/taf/CYQB",
        "https://avwx.rest/api/metar/CYHU",
        "https://avwx.rest/api/taf/CYHU",
        "https://avwx.rest/api/metar/CYOW",
        "https://avwx.rest/api/taf/CYOW",
        "https://avwx.rest/api/metar/CYND",
        "https://avwx.rest/api/taf/CYND",
        "https://avwx.rest/api/metar/CYZV",
        "https://avwx.rest/api/taf/CYZV",
        "https://avwx.rest/api/metar/CYBG",
        "https://avwx.rest/api/taf/CYBG",
      ];
    default:
      throw new Error("Invalid Location");
  }
};

const useFetch = (location) => {
  const [avwx, setAvwx] = useState([]);
  useEffect(() => {
    const headers = {
      headers: {
        Authorization: "UoCyZ0DYZP9cMI2IxUJNoLWTrsxvorXAuAwrvGjjZYg",
      },
    };
    const urls = getURLs(location);
    console.log(urls);
    const wxdata = Promise.all(
      urls.map((url) => fetch(url, headers).then((res) => res.json()))
    );
    console.log(wxdata);
    setAvwx(wxdata);
    return { avwx };
  }, [location]);
};

export default useFetch;
