import React, { useEffect, useState } from "react";

// will eventually clean up this massive parameter list once im sure what wont need to go elsewhere
const Main = ({playerPosition, setPlayerPosition, mapStatus, setMapStatus, currentRPGText, setText, mapData}) => {
    // Functionality ///////////////////////////////////////////////////////////////
    // this is just so it doesnt log every time i re-render =.=
    useEffect(() => {
        console.log(mapData)
    }, [])
    
    let rpgText = () => {
        return mapData[playerPosition].detail;
    }

    let submitCommand = (event) => {
        let userResponse = event.target.value
        
        if (event.key !== 'Enter') {
            return;
        }
        // splitting input into command/detail pairs
        let commandWord = userResponse.split(' ')[0];
        let detailWord = userResponse.split(' ')[1];
        
        // handles commands
        if (commandWord.toLowerCase() === 'return') {
            Anemone.goBack();
        } else if (commandWord.toLowerCase() === 'move') {
            Anemone.move(detailWord);
        }
        
    }

    // Classes ////////////////////////////////////////////////////////////////////
    const Player = class {
        constructor(hp, position, items) {
            this.hp = hp;
            this.position = position;
            this.items = items;
        }

        move(direction) {
            console.log(playerPosition)
            setPlayerPosition(mapData[playerPosition].rooms[direction])
        }
        goBack() {
            setPlayerPosition(mapData[playerPosition].previous)
        }
        inspect() {
            // for examining entities/objects/points of interest
        }
        
    }

    const Enemy = class {
        constructor(hp) {
            this.hp = hp;
        }
    }
    // Initial Game Set-up ///////////////////////////////////////////////////////
    let Anemone = new Player(20, 'startingRoom', []);

    
    // DOM Components ///////////////////////////////////////////////////////////
    return (
        <div id="main">
            <div id='viewport'>
                <div id='imgTemp'></div>
                {/* <p id="environmentResponse" className='text'>{rpgText()}</p> */}
                <p id="locDetail" className="text">{rpgText()}</p> 
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