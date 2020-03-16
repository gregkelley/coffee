// display order items

import React, { Component, Fragment } from 'react';
import ItemHeader from './itemheader';
import Item from './item';
import {bulkCoffee} from '../mockData';

class Order extends Component {
//   const bulkCoffeeList = [
//     {
//         id: 1,
//         name: "Yirgacheffe",
//         quantity: 0,
//         grind: null,
//         category: "bulk",
//     },
//     {
//         id: 2,
//         name: "Columbian",
//         quantity: 0,
//         grind: null,
//         category: "bulk",
//     },
//     {
//         id: 3,
//         name: "Organic French",
//         quantity: 0,
//         grind: null,
//         category: "bulk",
//     },
// ];
  constructor() {
    super();
    this.state = {
      bc: bulkCoffee
    }
  }
  //const [bulkCoffeeList, setBulkCoffeeList] = useState([{bulkCoffee}]);
  //const bulkCoffeeList = useState([{bulkCoffee}]);
  
  render() {
  //const coffeeArray = bulkCoffeeList.map((fm, i) => {
    const coffeeArray = this.state.bc.map((fm, i) => {
    return (<Item 
          key={bulkCoffee[i].id}
         name={bulkCoffee[i].name}
     quantity={bulkCoffee[i].quantity}
        grind={bulkCoffee[i].grind}
     category={bulkCoffee[i].category} /> );
    })
    //debugger;

    return (
        <Fragment>
            <ItemHeader />
            {coffeeArray}
        </Fragment>
    );
  }
}

export default Order;