const Login = ({setUserObj, characterData, register, setRegister}) => {

    let login = (event) => {
        if (event.key === 'Enter') {
            let userObj = {};
            userObj.user = document.querySelector('#userName').value
            userObj.pass = document.querySelector('#password').value
            setUserObj(userObj);
        }
    }

    let registryButton = () => {
        setRegister(true);
        console.log('Registering now')
    }

    let renderLogin = () => {
        if (characterData.hp === undefined) {
            return (
                <div id="login">
                <div id="loginInputs">
                    <input 
                    id="userName"
                    className="textInput"
                    type="text"
                    placeholder="username"
                    onKeyDown={login}
                    />
                    <input 
                    id="password"
                    className="textInput"
                    type="text"
                    placeholder="password"
                    onKeyDown={login}
                    />
                </div>
                <button 
                onClick={registryButton}
                id="registerButton">Register Now</button>
            </div>
            )
        } else {
            return null;
        }
    }

    return (
        <>
        {renderLogin()}
        </>
    )
}

export default Login;