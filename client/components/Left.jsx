import Item from './Item.jsx';

const Left = ({ Anemone }) => {
    const renderInventory = () => {
        if (Anemone.items) {
            return Anemone.items.map((item, index) => (
                <Item key={index} id={item} item={item} />
            ));
        } else {
            return null;
        }
    };

    return (
        <div id="leftPanel">
            <p className="text">Inventory</p>
            <div id="inventory">
                {renderInventory()}
            </div>
            <div id="commandList">
                <p className='text'>exit</p>
                <p className='text'>move</p>
                <p className='text'>return</p>
                <p className='text'>inspect</p>
            </div>
        </div>
    );
};

export default Left;