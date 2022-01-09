import { useEffect, useState } from "react";
// const axios = require("axios");
import axios from "axios";

function App() {
  const API =
    "http://api.openweathermap.org/data/2.5/weather?q=yerevan&appid={API}";
  const KEY = "236596d24da2013b1b40708c58db6484";
  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=yerevan&appid=${KEY}`,
      )
      .then((res) => console.log(res.data.name));
  }, []);
  return <div className="App">Hello</div>;
}

export default App;
