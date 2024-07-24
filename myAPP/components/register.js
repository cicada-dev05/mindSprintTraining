import { useState } from "react";

function Register() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    // username:'',
    password: "",
  });
  const [array, setArray] = useState([]);
  function handleChange(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setArray([...array, user]);
    console.log(array);
    console.log(user);
    // console.log(user);
    e.target.reset();
  }
  function deleteData(id) {
    setArray(array.filter((item) => item.id != id));
  }
  return (
    <>
      <div className="container mt-5 w-50">
        <center>
          <h1>REGISTER COMPONENT</h1>
        </center>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label>ID: </label>
            <input
              type="text"
              placeholder="Enter ID"
              name="id"
              className="form-control"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-group mt-3">
            <label>NAME: </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              className="form-control"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-group mt-3">
            <label>Email: </label>
            <input
              type="email"
              placeholder="Enter Mail"
              name="email"
              className="form-control"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-group mt-3">
            <label>Password: </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              className="form-control"
              onChange={handleChange}
              required
            ></input>
          </div>
          <button
            type="submit"
            className="btn btn-danger mt-2"
            onSubmit={handleSubmit}
          >
            submit
          </button>
        </form>

        <h2>Details:</h2>
        <table className="table table-light">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>User Name</th>
              {/* <th>Email</th> */}
              <th colspan="2">Email</th>
            </tr>
          </thead>
          <tbody>
            {array.map((user) => (
              <tr className="table-active" key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => deleteData(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Register;
