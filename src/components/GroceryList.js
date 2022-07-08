import GroceryItem from "./GroceryItem";

const GroceryList = (props) => {
    console.log('Checking GroceryList Component', props.groceries);
    return (
        <div>
            <h2>Groceries</h2>
            
        {
            props.groceries.map(
                (i, idx) => !i.isPurchased ? (<GroceryItem grocery={i} 
                key={idx} idx={idx} handleRemove = {props.handleRemove}/>) : ( <h3 key={idx}>{i.item } PURCHASED!</h3>)
            )
        }


        </div>
    )
}

export default GroceryList;