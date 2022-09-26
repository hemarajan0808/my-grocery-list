import React, { useState } from "react";
import "./App.css";
import Item from "./Components/Item.js";
import Ref from "./Components/Ref.js";

/* let intialList = [
  { name: "tomato", calorie: 20 },
  /* { name: "rice", calorie: 30 },
  { name: "candy", calorie: 100 },
];
 */
function App() { return (
  
       <div> <Ref />
    </div>
  );

}

export default App;


/* const [list, setList] = useState(intialList);

  const removeItemHandler = () => {
    const filteredList = list.filter((v) => v.calorie <= 50);
    setList(filteredList);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> Grocery List </h1>
        {list.map((v, k) => {
          return <Item key={`${k}${v.name}${v.calorie}`} item={v}></Item>;
        })}
        <button onClick={removeItemHandler}> Remove </button>
      </header> */