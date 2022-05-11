import React, { useState, useEffect } from "react";
import axios from "./axios";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        // if [], run once when the row loads and dont run it again
        // if variable, run once when the row loads and everytime the variable changes
        async function fetchData() {
            const request = await axios.get(fetchUrl)
        }

    }, []);


  return (
    <div className="row">
      <h2>{title}</h2>

      {/** container -> posters */}
    </div>
  );
}

export default Row;
