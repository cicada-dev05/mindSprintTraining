import { useState } from "react";

const TODO = () => {
  const [input, setInput] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [Count, setCount] = useState(1);
  function addTask(e) {
    e.preventDefault();
    setTaskArray([...taskArray, { id: Count, task: input, completed: false }]);
    setCount(Count+1)
    // console.log(taskArray);
    e.target.reset()
  }
  function deleteData(id) {
    setTaskArray(taskArray.filter((item) => item.id != id));
    if(taskArray.length == 1) setCount(1)
    // console.log(taskArray.length);
  }
  return (
    <>
      <div>
        <center>
          {" "}
          <h1 className="mt-3">TODO APP</h1>{" "}
        </center>
      </div>
      <form onSubmit={addTask}>
        <div className="container mt-4">
          <div className="d-flex">
            <input
              type="text"
              className="form-control "
              placeholder="ENTER YOUR TASK"
              name="task"
              required
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button className="btn btn-primary  col-2 m-2">ADD TASK</button>
          </div>
        </div>
      </form>
      <hr></hr>
      <div className="container mt-3">
        <center>
          <h3>TASKS</h3>
        </center>
        <table className="table table-light">
          <thead>
            <tr>
              <th>Sr.No</th>
              <center><th colSpan={2}>Task</th></center>
            </tr>
          </thead>
          <tbody>
            {taskArray.map((user) => (
              <tr className="table-active" key={user.id}>
                <td>{user.id}</td>
                <td>{user.task}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => deleteData(user.id)}
                  >
                    Remove Task
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TODO;
