import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const App = () => {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    const apiUrl = "https://api.thecatapi.com/api/v1/images/search?limit=10&api_key=live_0eg9nShpvS1uuFP6tPLKGqrs9ct5Lg05ZjXNqz7YJF8pMjeiGjxJChElRDgNVl7t";
    try {
      const response = await fetch(apiUrl, {mode: 'no-cors'});
      const data = await response.json();
      pets = setPets(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  useEffect(() => {
    console.log(`pets: ${pets}`);
  }, [pets]);

  return (
    <div className="App">
      <Header title="Nuuhkukuonot propseina" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
