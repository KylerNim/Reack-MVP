import map from './../mapData.js'

const Main = ({playerPosition, setPlayerPosition, userResponse, setUserResponse}) => {
    let rpgText = () => {
        return 'sam';
    }

    let recordCommand = (event) => {
        let currentCommand = event.target.value;
        setUserResponse(currentCommand);
    }
    let submitCommand = (event) => {
        // would possibly have to chack for command on submit, or error
    }


    return (
        <div id="main">
            <div id='viewport'>
                {/* image will go here */}
                <p id="environmentResponse" class='text'>{rpgText()}</p>
                <p id="locDetail" class="text">{rpgText()}</p> 
            </div>
            <input 
            id ='commandBox'
            type="text"
            placeholder="Type Command Here"
            onChange={recordCommand}
            onKeyDown={submitCommand}
            />
        </div>
    )
}

export default Main;