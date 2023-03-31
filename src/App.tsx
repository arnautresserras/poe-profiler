import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Routing from './pages/Routing';
import { API_URL } from './utils/url.constants';

function App() {
  const getProfile = async (accountName: string) => {

    await fetch(API_URL + "profile", {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getProfile("arnautresserras");
  },[]); 


  return (
      <div className='App'>
        <Routing />
      </div>
  );
}

export default App;
