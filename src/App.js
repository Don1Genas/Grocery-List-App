import './App.css';
import groceryData from './data/groceryData';

import { Component } from 'react'

import Navbar from './components/Navbar';
import GroceryList from './components/GroceryList';

class App extends Component {
  state = {
    groceryData : groceryData,
    item: '',
    brand: '',
    units: '',
    quantity: 0,
    isPurchased: false
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newGrocery = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased
    }

    this.setState({
      groceryData: [newGrocery, ...this.state.groceryData],
      item: "",
      brand: "",
      units: "",
      quantity: 0,
      isPurchased: false,  
    });
  }

  handleRemove = (item, idx) => {
    console.log(item, idx);

    // this.state.groceryData[idx].isPurchased = true
    const newArray = this.state.groceryData.filter((i, index)=> index===idx)
    
    const filterArray = this.state.groceryData.filter((i, index)=> index!==idx)
    // console.log(newArray);
    newArray[0].isPurchased = true
    console.log(this.state.groceryData);
    this.setState({
      groceryData:[...newArray, ...filterArray]
    })
    
  }

  render() {
  return (
    <div className="App">
      <Navbar text = 'Grocery List' />
      
      <form onSubmit={this.handleSubmit}> 
        <label htmlFor='item'>Item Name</label>
        <input 
          type='text'
          value={this.state.item}
          onChange={this.handleChange}
          id='item'
        />
        
        <label htmlFor='brand'>Brand Name</label>
        <input 
          type='text'
          value={this.state.brand}
          onChange={this.handleChange}
          id='brand'
        />
        
        <label htmlFor='units'>Unit</label>
        <input 
          type='text'
          value={this.state.units}
          onChange={this.handleChange}
          id='units'
        />

        <label htmlFor='quantity'>Quantity</label>
        <input 
          type='number'
          value={this.state.quantity}
          onChange={this.handleChange}
          id='quantity'
        />


        <input type="submit" />
      </form>

      <GroceryList  groceries={this.state.groceryData} handleRemove={this.handleRemove}/>
    </div>
  );
};
}

export default App;
