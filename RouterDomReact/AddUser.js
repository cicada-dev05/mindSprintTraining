import { useState } from "react";
import axios from "axios";
function AddUser() {
  const [User, setUser] = useState({
    id: "",
    name: "",
    mail: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fData = await axios.post("http://localhost:3000/users/",User);
      if (fData.status === 201) alert("User Added");

    } catch (error) {
      console.log(error);
    }
    e.target.reset()
  };

  return (
    <>
      <div className="container">
        <center>
          <h2> User Registration</h2>
          <hr />
        </center>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Id"
            onChange={(event) => setUser({ ...User, id: event.target.value })}
            name="id"
          />
          <br/>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(event) => setUser({ ...User, name: event.target.value })}
            name="name"
          /><br/>
          <input
            type="email"
            placeholder="Enter Mail"
            onChange={(event) => setUser({ ...User, mail: event.target.value })}
            name="mail"
          /><br/>
          <button className="btn btn-success">Add user</button>
        </form>
      </div>
    </>
  );
}

export default AddUser;
