import React, { useEffect, useState } from "react";

import Header from './Header.jsx';
import Main from './Main.jsx';
import Left from './Left.jsx';
import Right from './Right.jsx';

const App = () => {
  const [playerPosition, setPlayerPosition] = useState('')

  const [rpgText, setText] = useState('')
  const [userResponse, setUserResponse] = useState('');
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   fetch("/api/user")
  //     .then((res) => res.json())
  //     .then((tasks) => {
  //       setTasks(tasks);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <Main
        playerPosition = {playerPosition}
        setPlayerPosition = {setPlayerPosition}
        userResponse = {userResponse}
        setUserResponse = {setUserResponse}
      />
      <Left />
      <Right />
    </>
  );
};

export default App;
