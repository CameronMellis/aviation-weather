import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const host = "https://intense-forest-71090.herokuapp.com"

const getURLs = (location) => {
  switch (location) {
    case "YYT":
      return [
        `${host}/weather?type=metar&ident=CYYT&location=YYT`,
        `${host}/weather?type=taf&ident=CYYT&location=YYT`,
        `${host}/weather?type=metar&ident=CYQX&location=YYT`,
        `${host}/weather?type=taf&ident=CYQX&location=YYT`,
        `${host}/weather?type=metar&ident=CYDF&location=YYT`,
        `${host}/weather?type=taf&ident=CYDF&location=YYT`,
        `${host}/weather?type=metar&ident=CYJT&location=YYT`,
        `${host}/weather?type=taf&ident=CYJT&location=YYT`,
        `${host}/weather?type=metar&ident=CYAY&location=YYT`,
        `${host}/weather?type=taf&ident=CYAY&location=YYT`,
        `${host}/weather?type=metar&ident=CYBX&location=YYT`,
        `${host}/weather?type=taf&ident=CYBX&location=YYT`,
        `${host}/weather?type=metar&ident=CYYR&location=YYT`,
        `${host}/weather?type=taf&ident=CYYR&location=YYT`,
        `${host}/weather?type=metar&ident=CZUM&location=YYT`,
        `${host}/weather?type=taf&ident=CZUM&location=YYT`,
        `${host}/weather?type=metar&ident=CYWK&location=YYT`,
        `${host}/weather?type=taf&ident=CYWK&location=YYT`,
        `${host}/weather?type=metar&ident=CYZV&location=YYT`,
        `${host}/weather?type=taf&ident=CYZV&location=YYT`,
        `${host}/weather?type=metar&ident=CYDP&location=YYT`,
        `${host}/weather?type=taf&ident=CYDP&location=YYT`,
        `${host}/weather?type=metar&ident=CYNA&location=YYT`,
        `${host}/weather?type=taf&ident=CYNA&location=YYT`,
        `${host}/weather?type=metar&ident=CYKL&location=YYT`,
        `${host}/weather?type=taf&ident=CYKL&location=YYT`,
      ];

    case "YUL":
      return [
        `${host}/weather?type=metar&ident=CYUL&location=YUL`,
        `${host}/weather?type=taf&ident=CYUL&location=YUL`,
        `${host}/weather?type=metar&ident=CYQB&location=YUL`,
        `${host}/weather?type=taf&ident=CYQB&location=YUL`,
        `${host}/weather?type=metar&ident=CYHU&location=YUL`,
        `${host}/weather?type=taf&ident=CYHU&location=YUL`,
        `${host}/weather?type=metar&ident=CYMX&location=YUL`,
        `${host}/weather?type=taf&ident=CYMX&location=YUL`,
        `${host}/weather?type=metar&ident=CYRQ&location=YUL`,
        `${host}/weather?type=taf&ident=CYRQ&location=YUL`,
        `${host}/weather?type=metar&ident=CYOW&location=YUL`,
        `${host}/weather?type=taf&ident=CYOW&location=YUL`,
        `${host}/weather?type=metar&ident=CYND&location=YUL`,
        `${host}/weather?type=taf&ident=CYND&location=YUL`,
        `${host}/weather?type=metar&ident=CYYZ&location=YUL`,
        `${host}/weather?type=taf&ident=CYYZ&location=YUL`,
        `${host}/weather?type=metar&ident=CYVO&location=YUL`,
        `${host}/weather?type=taf&ident=CYVO&location=YUL`,
        `${host}/weather?type=metar&ident=CYUY&location=YUL`,
        `${host}/weather?type=taf&ident=CYUY&location=YUL`,
        `${host}/weather?type=metar&ident=CYBG&location=YUL`,
        `${host}/weather?type=taf&ident=CYBG&location=YUL`,
        `${host}/weather?type=metar&ident=CYYY&location=YUL`,
        `${host}/weather?type=taf&ident=CYYY&location=YUL`,
        `${host}/weather?type=metar&ident=CYGR&location=YUL`,
        `${host}/weather?type=taf&ident=CYGR&location=YUL`,
        `${host}/weather?type=metar&ident=CYGP&location=YUL`,
        `${host}/weather?type=taf&ident=CYGP&location=YUL`,
        `${host}/weather?type=metar&ident=CYGV&location=YUL`,
        `${host}/weather?type=taf&ident=CYGV&location=YUL`,
        `${host}/weather?type=metar&ident=CYWK&location=YUL`,
        `${host}/weather?type=taf&ident=CYWK&location=YUL`,
        `${host}/weather?type=metar&ident=CZUM&location=YUL`,
        `${host}/weather?type=taf&ident=CZUM&location=YUL`,
        `${host}/weather?type=metar&ident=CYZV&location=YUL`,
        `${host}/weather?type=taf&ident=CZVL&location=YUL`,
        `${host}/weather?type=metar&ident=CYKL&location=YUL`,
        `${host}/weather?type=taf&ident=CYKL&location=YUL`,
      ];

    case "YHZ":
      return [
        `${host}/weather?type=metar&ident=CYHZ&location=YHZ`,
        `${host}/weather?type=taf&ident=CYHZ&location=YHZ`,
        `${host}/weather?type=metar&ident=CYQM&location=YHZ`,
        `${host}/weather?type=taf&ident=CYQM&location=YHZ`,
        `${host}/weather?type=metar&ident=CYYG&location=YHZ`,
        `${host}/weather?type=taf&ident=CYYG&location=YHZ`,
        `${host}/weather?type=metar&ident=CYFC&location=YHZ`,
        `${host}/weather?type=taf&ident=CYFC&location=YHZ`,
        `${host}/weather?type=metar&ident=CZBF&location=YHZ`,
        `${host}/weather?type=taf&ident=CZBF&location=YHZ`,
        `${host}/weather?type=metar&ident=CYQY&location=YHZ`,
        `${host}/weather?type=taf&ident=CYQY&location=YHZ`,
        `${host}/weather?type=metar&ident=CYSJ&location=YHZ`,
        `${host}/weather?type=taf&ident=CYSJ&location=YHZ`,
        `${host}/weather?type=metar&ident=CYQI&location=YHZ`,
        `${host}/weather?type=taf&ident=CYQI&location=YHZ`,
      ];

    default:
      throw new Error("Invalid Location");
  }
};

const useFetch = (location) => {
  const navigate = useNavigate(Navigate);
  const [avwx, setAvwx] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const headers = {
        authorization: localStorage.getItem("token"),
      };
      const urls = getURLs(location);
      try {
        const wxdata = await Promise.all(
          urls.map((url) => {
            return fetch(url, { headers }).then((res) => res.json());
          })
        );
        setIsLoading(false);
        setAvwx(wxdata);
      } catch (err) {
        navigate(process.env.REACT_APP_SIGNIN_URL);
      }
    };
    getData();
  }, [location]);
  return { avwx, isLoading };
};

export default useFetch;
