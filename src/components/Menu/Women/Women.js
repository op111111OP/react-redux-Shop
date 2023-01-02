import React from "react";
import axios from "axios";
import { useEffect } from "react";

function Women() {
  useEffect(() => {
    async function getPosts() {
      const response = await axios.get(
        "https://covid-193.p.rapidapi.com/countries"
      );
      console.log(response.data);
    }
  }, []);
  return;
  <div></div>;
}

export default Women;
