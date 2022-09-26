import React, { useRef, useEffect } from "react";

function Ref() {
  const nameRef = useRef("");
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    ageRef.current.focus();
  }, []);


  function keyUpHandler(e) {
    if(e.keyCode === 13){
        if(e.target.id ==="ageInput"){
            nameRef.current.focus();
        }
    }
  }

   function keyPressHandler(e) {
    if (e.keyCode === 13) {
      if (e.target.id === "nameInput") {
        ageRef.current.focus(); 
      } 
    }
}

    
  
  return (
    <div>
      <h3>Ref </h3>
      <span> Name :</span>
      <input
        type="text"
        ref={nameRef}
        onKeyDown={keyPressHandler}
        id="nameInput"
      ></input>
      <br></br>
      <span>Age:</span>
      <input
        type="text"
        ref={ageRef}
        id="ageInput"
        onKeyUp={keyUpHandler}
      ></input>
      <br></br>
      <span>Married</span>
      <input type="checkbox" ref={marriedRef}></input>
      <br></br>
      <button ref={submitRef}>Submit </button>
    </div>
  );
}

export default Ref;
