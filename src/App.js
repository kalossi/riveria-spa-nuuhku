import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const App = () => {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    const apiUrl = 'https://koira-api.herokuapp.com/api/v1/dogs';
    const response = await fetch(apiUrl);
    const data = await response.json();
    pets = setPets(data);
  }

  useEffect(() => {
    fetchPets();
  }, []);

  useEffect(() => {
    console.log(`pets: ${pets}`);
  },[pets]);

  return (
    <div className="App">
      <Header title="Nuuhkukuonot propseina" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
