const Item = ({ item }) => {
    console.log(item)
    return (
        <img src={`./../resources/${item}.png`} className="item" alt={item}></img>
    );
};

export default Item;