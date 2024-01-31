import React, { useEffect, useState } from "react";
import mapData from './../mapData.js'

import Header from './Header.jsx';
import Main from './Main.jsx';
import Left from './Left.jsx';
import Right from './Right.jsx';
import Footer from './footer.jsx';
import Login from './Login.jsx';

const App = () => {
  const [userObj, setUserObj] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const [characterData, setCharacterData] = useState({});
  const [playerPosition, setPlayerPosition] = useState('pod');
  const [itemView, setItemView] = useState('');
  const [register, setRegister] = useState(false)
  

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
      if (itemView) {
        setItemView('');
        return;
      }
      if (mapData[playerPosition].rooms.exit === undefined) {
        alert('bad command');
      } else {
        setPlayerPosition(mapData[playerPosition].rooms.exit)
      }
    }
    move(direction) {
      // advances player to specified "child" location
      const nextRoom = mapData[playerPosition].rooms[direction]

      if (mapData[playerPosition].rooms[direction] === undefined) {
        alert('bad command');
      } else if (mapData[nextRoom].unlock && !Anemone.items.includes(mapData[nextRoom].unlock)) {
        alert('locked');
        return;
      } else {
        this.updateHistory();
        setPlayerPosition(mapData[playerPosition].rooms[direction])
      }
    }
    goBack() {
      // Returns player to "parent" location
      if (mapData[playerPosition].previous === undefined) {
        alert('Are you crazy..?')
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
      if (!this.items.includes(item)) {
        alert('you don\'t have that item!')
      }
      if (item === 'medicine') {
        this.heal(50);
      } else {
        alert('can\'t use like that!');
      }
    }
    heal(value) {
      // Increase health from item
      console.log('healing...')
      this.hp += value;
      console.log(this.hp)
      // setHealth(this.hp);
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
  let Anemone = new Player(characterData.hp, characterData.userposition, characterData.hasbeen, characterData.items);
  
  useEffect(() => {
    if (register === true) {
      fetch(`/api/user`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: userObj.user,
          password: userObj.pass,
        })
      })
      .then(res => res.json())
      .catch(err => console.error(err))
    }
    fetch(`/api/user/${userObj.user}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.password === userObj.pass) {
          setPlayerData(data[0]);
        } else {
          console.log('failed authentication');
        }
      })
      .catch((error) => console.error('Error fetching player data:', error));
  }, [userObj]);

  useEffect(() => {
    if (playerData && register === false) {
      fetch(`/api/char/${playerData.id}`)
        .then((res) => res.json())
        .then((data) => setCharacterData(data[0]))
        .catch((error) => console.error('Error fetching character data:', error));
    } else if (playerData) {
      setCharacterData({hp: 50, items: ['pet'], userposition: 'pod', user_id: playerData.id})
    }
  }, [playerData]);
  
  return (
    <>
      <img id="backG" src="./../resources/background.png"></img>
      <Login 
        setUserObj = {setUserObj}
        characterData={characterData}
        register={register}
        setRegister={setRegister}
      />
      <Header />
      <Main
        playerPosition = {playerPosition}
        mapData = {mapData}
        Anemone = {Anemone}
        itemView = {itemView}
        setItemView = {setItemView}
      />
      <Left 
        Anemone = {Anemone}
      />
      <Right 
        Anemone = {Anemone}
      />
      <Footer />
    </>
  );
};

export default App;
