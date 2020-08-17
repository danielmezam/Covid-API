import React, { useState, useEffect } from "react";

import "./assets/styles/index.css";

import Header from "./components/Header";
import Form from "./components/Form";
import Cards from "./components/Cards";

function App() {
  const [Query, setQuery] = useState(false);
  const [WorldQuery, setWorldQuery] = useState(false);
  const [Country, setCountry] = useState("");
  const [Data, setData] = useState([
    {
      country: "",
      confirmed: "",
      recovered: "",
      deaths: "",
      lastUpdate: ""
    }
  ]);

  const [WorldData, setWorldData] = useState([
    {
      confirmed: "",
      recovered: "",
      deaths: "",
      lastUpdate: ""
    }
  ]);

  useEffect(() => {
    const API =
      "https://covid-19-data.p.rapidapi.com/totals?format=json&rapidapi-key=a303f80babmshe53bf4724660bb7p17adbejsn904d0da43bec";

    fetch(API)
      .then(response => response.json())
      .then(data => setWorldData(data));

    setWorldQuery(true);
  }, []);

  const handleChange = ev => {
    setCountry(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    console.log(Country);
    const API = `https://covid-19-data.p.rapidapi.com/country?format=json&name=${Country}&rapidapi-key=a303f80babmshe53bf4724660bb7p17adbejsn904d0da43bec`;
    try {
      fetch(API)
        .then(response => response.json())
        .then(data => setData(data));
      setQuery(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="cards">
        <Cards isVisible={Query} data={Data[0]} />
      </div>
      <div className="world-info">
        <h2>Covid in the Wolrd</h2>
        <div className=" cards-container word-cards">
          <Cards data={WorldData[0]} isVisible={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
