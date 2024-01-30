import React, { useEffect, useState } from "react";
import mapData from './../mapData.js'

import Header from './Header.jsx';
import Main from './Main.jsx';
import Left from './Left.jsx';
import Right from './Right.jsx';
import Footer from './footer.jsx';

const App = () => {
  const [playerData, setPlayerData] = useState({})
  const [characterData, setCharacterData] = useState({})

  const [playerPosition, setPlayerPosition] = useState('pod')
  const [mapStatus, setMapStatus] = useState([])

  const [currentRPGText, setText] = useState('')

  const [itemView, setItemView] = useState('');

  // Classes ////////////////////////////////////////////////////////////////////
  const Player = class {
    constructor(hp, position, history, items) {
        this.hp = hp;
        this.position = position;
        this.history = history;
        this.items = items;
    }
    
    updateHistory() {
      if (Anemone.history.includes(playerPosition) === false) {
        Anemone.history.push(playerPosition);
      }
    }
    exit() {
      if (mapData[playerPosition].rooms.exit === undefined) {
        alert('bad command');
      } else {
        setPlayerPosition(mapData[playerPosition].rooms.exit)
      }
    }
    move(direction) {
      // advances player to specified "child" location
      if (mapData[playerPosition].rooms[direction] === undefined) {
        alert('bad command');
      } else {
        this.updateHistory();
        setPlayerPosition(mapData[playerPosition].rooms[direction])
      }
    }
    goBack() {
      // Returns player to "parent" location
      if (mapData[playerPosition].previous === undefined) {
        alert('Return where..?')
      } else {
        this.updateHistory();
        setPlayerPosition(mapData[playerPosition].previous)
      }
    }
    inspect(item) {
      setPlayerPosition(item);
    }
    addToInventory() {

    }
    use(item) {
      // uses item in inventory
      console.log('using ', item)
      console.log(this.items)
    }
    heal(value) {
      // Increase health from item
      this.hp += value;
    }
    takeDamage(value) {
      // Reduce health from entity attack/environment hazard
      this.hp -=  value;
    }
  }

  const Enemy = class {
      constructor(hp) {
          this.hp = hp;
      }
  }
  // Initial Game Set-up ///////////////////////////////////////////////////////
  let Anemone = new Player(characterData.hp, 'pod', characterData.hasbeen, characterData.items);
  
  // Currently sets userData on initioal load (just sets mine for now)
  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setPlayerData(data[0]))
      .catch((error) => console.error('Error fetching player data:', error));
    }, []);
  useEffect(() => {
    fetch("/api/char/1")
      .then((res) => res.json())
      .then((data) => setCharacterData(data[0]))
  }, [])
    // console.log(playerData)
    // console.log(characterData)
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

        mapData = {mapData}
        Anemone = {Anemone}
        playerData = {playerData}
        characterData = {characterData}
        itemView = {itemView}
        setItemView = {setItemView}
      />
      <Left 
        characterData = {characterData}
      />
      <Right 
        Anemone = {Anemone}
      />
      <Footer />
    </>
  );
};

export default App;
