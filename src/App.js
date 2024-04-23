import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [pets, setPets] = useState([]);
  const [state, setState] = useState([])
  const [index, setIndex] = useState();

  const fetchPets = async () => {
    const apiUrl =
      "https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_0eg9nShpvS1uuFP6tPLKGqrs9ct5Lg05ZjXNqz7YJF8pMjeiGjxJChElRDgNVl7t";
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      setPets(response.data);
      setState(pets[0]);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log("Status code:", error.response.status);
        console.log("Response data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("Request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.log("Error:", error.message);
      }
    }
  };

  if(index==null){
    setIndex(0);
  }

  useEffect(() => {
    fetchPets();
  }, []);

  useEffect(() => {
    console.log('pets', pets);
  }, [pets]);

  if(state==null){
    setState(pets[0]);
  }

  console.log(state);

  const handleClick = () => {
    if(index<pets.length){
    setIndex(index+1);
    console.log(index);
    setState(pets[index]);
    }
  }

  return (
    <div className="App">
      <Header title="Nuuhkukuonot" />
          <Content title={state && state.title} pic={state && state.url} />
      <Footer>
        <Button onClick={handleClick} icon="heart-broken" />
        <Button onClick={handleClick} icon="heart" />
      </Footer>
    </div>
  );
};

export default App;
