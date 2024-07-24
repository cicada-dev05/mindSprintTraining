import { useState } from "react";

function FormInput() {
  const [text, setText] = useState("");
  const [Age, setAge] = useState(18);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Welcome ${text}`);
  }
  return (
    <>
      <center>
        <div>
          <form onSubmit={handleSubmit}>
            {/* <label>Enter Your name</label> */}
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              placeholder="Entery Your name Here"
            ></input>
 <input
              className="form-control"
              type="number"
              onChange={(e)=>{setAge(e.target.value)}}
              placeholder="Entery Your Age"
              value={Age}
            ></input>

            <div className="form-check-label">
              <h3>Welcome</h3>
              <h1>{text}</h1>
            </div>
            <div className="form-check-label">
            <h3>You are {Age} year old</h3>
            </div>
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </form>
        </div>
      </center>
    </>
  );
}

export default FormInput;
