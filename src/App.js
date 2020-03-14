import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const names = ['Arman', 'Saddam', 'saddam','trump', 'Bush', 'Alomgir', 'Badsha' ]
  const products=[
    {name:'Photosoft', price:'$90.90'},
    {name:'Ilistater', price:'$60.44'},
    {name:'Adove', price:'$45.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>React practice</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
         
          
          {
            products.map(product => <li>{product.name}</li>)
          }
           </ul>
          <ul>
          {
            products.map(product => <Product product={product}></Product>)
          }
        </ul>
        <Person name="Cricete Mahm" job="Best Criceter"> </Person>
        <Person name="Musficur Rahim" job="Beter Criceter"></Person>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h2>Dinamic users:{users.length}</h2>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
        
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'2px solid yellow',
    borderRadius:'3px',
    backgroundColor:'green',
    height:'240px',
    width:'300px',
    float:'left',
    margin:'10px',
    
  }
  

 return(
    <div style={productStyle}>
      <h1>{props.name}</h1>
      <h3>{props.price}</h3>
      <button>Bye now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () =>  setCount(count +1);
  
  return(
    <div>
      <h1>Count : {count} </h1>
      <button onClick ={() =>  setCount(count +1)}>Increase</button>
      <button onClick ={() => setCount(count -1)}>Decrease</button>
      <button onMouseMove ={() => setCount(count +1)}>MouceMoveincrease</button>
    </div>
  )
}
function Person(props){
  const personStyle={
    border:'3px solid yellow',
    margin:'12px',
    padding:'15px'
    
  }
  return  (
    <div style={personStyle}>
    <h3> Name : {props.name}</h3>
  <p>He is a most wonderfull criceter {props.job}</p>

 </div>
  );
 
    
}
export default App;
