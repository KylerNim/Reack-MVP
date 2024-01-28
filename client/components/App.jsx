import React, { useEffect, useState } from "react";
import mapData from './../mapData.js'

import Header from './Header.jsx';
import Main from './Main.jsx';
import Left from './Left.jsx';
import Right from './Right.jsx';
import Footer from './footer.jsx';

const App = () => {
  const [playerPosition, setPlayerPosition] = useState('startingRoom')
  const [mapStatus, setMapStatus] = useState([])

  const [currentRPGText, setText] = useState('')
  const [userResponse, setUserResponse] = useState('');

  
  
  // useEffect(() => {
  //   fetch("/api/user")
  //     .then((res) => res.json())
  //     .then((tasks) => {
  //       setTasks(tasks);
  //     });
  // }, []);

  return (
    <>
      <img id="backG" src="./../resources/background.png"></img>

      <Header />
      <Main
        playerPosition = {playerPosition}
        setPlayerPosition = {setPlayerPosition}
        mapStatus = {mapStatus}
        setMapStatus = {setMapStatus}
        currentRPGText = {currentRPGText}
        setText = {setText}
        userResponse = {userResponse}
        setUserResponse = {setUserResponse}

        mapData = {mapData}
      />
      <Left />
      <Right />
      <Footer />
    </>
  );
};

export default App;
