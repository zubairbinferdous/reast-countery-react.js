import React, { useEffect, useState } from "react";
import Sdata from "../Sdata/Sdata";
import "./Person.css";

const Person = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, []);

  return (
    <div className="country-container">
        <h1>
          total country in this world{" "}
          <span
            style={{
              color: "green",
              backgroundColor: "pink",
              fontSize: "40px",
              padding: "25px",
            }}
          >
            {countryData.length}
          </span>
        </h1>

      <div className="main">
        {countryData.map((country) => (
          <Sdata country={country} key = {country.cca3}></Sdata>

        ))}
      </div>
      
    </div>
  );
};

export default Person;
