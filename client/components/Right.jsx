const Right = ({Anemone}) => {
    return (
        <div id="rightPanel">
            <div id="imgBounds">
                <img id="characterImg" src="./../resources/character.png"></img>
            </div>
            <p className="text">Anemone</p>
            <p className="text">hp {Anemone.hp}/100</p>
        </div>
    )
}

export default Right;