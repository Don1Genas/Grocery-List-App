
const GroceryItem = (props) => {
    const {item, brand, units, quantity} = props.grocery 

    return (
        <div>
            <h3>{item}</h3>
            <h3>{brand}</h3>
            <h3>{quantity} {units}</h3>
           
            <button onClick={() => props.handleRemove(props.grocery, props.idx)}>Remove</button>
        </div>
    )
}

export default GroceryItem;