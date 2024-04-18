import React from 'react';
import Content from './Content';
import Header from './Header';
import Footer from './Footer'
import { useState, useEffect } from 'react';

const App = () => {
  const[pets, setPets] = useState([]);

  useEffect(() => {
    console.log('Komponentti rendattu yhden kerran!')
  },[])

  return (
    <div className="App">
      <Header title="Nuuhkukuonot propseina"/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;