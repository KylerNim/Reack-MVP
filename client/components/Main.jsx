import React, { useEffect, useState } from "react";
import { render } from "react-dom";

// will eventually clean up this massive parameter list once im sure what wont need to go elsewhere
const Main = ({playerPosition, setPlayerPosition, mapStatus, setMapStatus, currentRPGText, setText, mapData, Anemone, playerData, characterData, itemView, setItemView}) => {
    // Functionality ///////////////////////////////////////////////////////////////
    // this is just so it doesnt log every time i re-render =.=
    useEffect(() => {
        console.log(mapData)
    }, [])

    // if an item is to be got at a location, it will give it
    useEffect(() => {
        if (mapData[playerPosition].item && Anemone.items.includes(mapData[playerPosition].itemKey) && !Anemone.items.includes(mapData[playerPosition].item)) {
            Anemone.items.push(mapData[playerPosition].item);
            console.log('got ',mapData[playerPosition].item)
            console.log(Anemone.items)
        }
    },[playerPosition])

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
    let consistentText = () => {
        if (!mapData[playerPosition].detail2) {
            return null;
        }
        if (itemView) {
            return mapData[itemView].detail2.map((detail, index) => (
                <p key={index} className="terminalText">{detail}</p>
            ));
        }
        return mapData[playerPosition].detail2.map((detail, index) => (
            <p key={index} className="terminalText">{detail}</p>
        ));
    }

    let conditionalText = () => {
        if (mapData[playerPosition].detail3 && Anemone.items.includes(mapData[playerPosition].itemKey)) {
            return mapData[playerPosition].detail3.map((detail, index) => (
                <p key={index} className="terminalText">{detail}</p>
            ));
        } else {
            return null;
        }
    }

    let decideText = () => {

    }

    let submitCommand = (event) => {
        let userResponse = event.target.value.toLowerCase();
        let currentRoom = mapData[playerPosition];
        
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
        } else if (['move', 'go'].includes(verb)) {
            Anemone.move(context);
        } else if (verb === 'exit') {
            console.log('exiting')
            Anemone.exit();
        } else if (['inspect', 'examine', 'look', 'observe'].includes(verb)) {
            const inspectAction = currentRoom.inspect;
            if (inspectAction && inspectAction.hasOwnProperty(context)) {
                const inspectedItem = inspectAction[context];
                if (inspectedItem !== undefined) {
                    Anemone.inspect(inspectedItem);
                } else if (Anemone.items.includes(context)) {
                    console.log(context);
                    // setItemView(context);
                } else {
                    alert('inspect what...?');
                }
            } else if (Anemone.items.includes(context)) {
                setItemView(context);
            } else {
                alert('inspect what...?');
            }
        } else if (['use'].includes(verb)) {
            Anemone.use(context);
        }
    }
    
    // DOM Components ///////////////////////////////////////////////////////////
    return (
        <div id="main">
            <div id='viewport'>
                <img src="./../resources/startingRoom.png" id='imgTemp'></img>
                {initialText()}
                {consistentText()}
                {conditionalText()}
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