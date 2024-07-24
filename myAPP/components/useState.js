import { useState } from "react";
function UseStateFunction() {
  const [name, setName] = useState("Vivek Tripathi");

  function changeName() {
    setName("HAHAHAHAHAHHA U GOT TRICKED");
  }
  return (
    <>
      <div className="container">
        <center>
          <h1>
            Welcome <p> {name} </p>
          </h1>
          <button onClick={changeName} className="btn btn-danger">
            Click Me
          </button>
        </center>
      </div>
    </>
  );
}

export default UseStateFunction;
