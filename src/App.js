import React, { useState } from 'react';
import './index.css';
import Todolist from './Todolist';


const App = () => {

  const [inputlist, setinputlist] = useState("");
  const [items, setitems] = useState([]);


  const itemEvent = (event) => {
    setinputlist(event.target.value);
  };

  const listOfItem = () => {
    setitems((olditems)=>{
      return [...olditems, inputlist]
    });
    setinputlist('')
  };

  const deleteitems = (id) => {
    console.log("Deleted"); 
    console.log(id)
    setitems((olditems) => {
      return olditems.filter((arrElement, index) =>{
        return index !==id;
      });
    });
  };

  return(
   <>
    <div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1> TO-DO LIST </h1>
        <br/>
        <input type="text" placeholder="Add a Item" value={ inputlist } onChange={ itemEvent } />
        <button onClick={ listOfItem } > + </button>

        <ol>
          {/* <li> { inputlist } </li> */}
         { items.map((itemval, index) => {
           return <Todolist 
           key={ index } 
           id={index} 
           text = { itemval } 
           onSelect = { deleteitems }
           />
          })}
        </ol>
      </div>
    </div>
  </>
  );
}

export default App;
