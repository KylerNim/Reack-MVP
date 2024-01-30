import React, { useEffect, useState } from "react";

// will eventually clean up this massive parameter list once im sure what wont need to go elsewhere
const Main = ({playerPosition, setPlayerPosition, mapStatus, setMapStatus, currentRPGText, setText, mapData, Anemone, playerData, characterData}) => {
    // Functionality ///////////////////////////////////////////////////////////////
    // this is just so it doesnt log every time i re-render =.=
    useEffect(() => {
        console.log(mapData)
    }, [])
    
    // This is the text that only appears the first time you go there
    let initialText = () => {
        if (!mapData[playerPosition].detail1) {
            return null;
        }
        if (Anemone.history && Anemone.history.includes(playerPosition)) {
            return null;
        }
        return mapData[playerPosition].detail1.map((detail, index) => (
            <p key={index} className="terminalText">{detail}</p>
        ));
    }
    // this text appears every time you return there as well
    let repeatText = () => {
        if (!mapData[playerPosition].detail2) {
            return null;
        }
        return mapData[playerPosition].detail2.map((detail, index) => (
            <p key={index} className="terminalText">{detail}</p>
        ));
    }

    let decideText = () => {

    }

    let submitCommand = (event) => {
        let userResponse = event.target.value.toLowerCase();
        
        if (event.key !== 'Enter') {
            return;
        }
        event.target.value = '';
        // splitting input into command/detail pairs
        let verb = userResponse.split(' ')[0];
        let context = userResponse.split(' ')[1];

        if (userResponse.split(' ').length < 2 && ['return', 'exit'].includes(verb) === false) {
            alert('bad command')
            return;
        }
        // handles commands
        if (verb === 'return') {
            Anemone.goBack();
        } else if (verb === 'move') {
            Anemone.move(context);
        } else if (verb === 'exit') {
            console.log('exiting')
            Anemone.exit();
        }
        
    }
    
    // DOM Components ///////////////////////////////////////////////////////////
    return (
        <div id="main">
            <div id='viewport'>
                <img src="./../resources/startingRoom.png" id='imgTemp'></img>
                {initialText()}
                {repeatText()}
            </div>
            <input 
            id ='commandBox'
            type="text"
            placeholder="Type Command Here"
            onKeyDown={submitCommand}
            />
        </div>
    )
}

export default Main;