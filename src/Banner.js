import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      //
    }
    fetchData();
  }, []);

  return (
    <header className="banner">
      {/** Background image */}
      {/** title */}
      {/** div > 2 buttons */}
      {/** description */}
    </header>
  );
}

export default Banner;
