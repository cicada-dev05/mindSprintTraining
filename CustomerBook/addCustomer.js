function AddCustomer(props) {
    const {handleSubmit,handleInputChange} = props
  return (
    <>
      <div className="container col-6">
        <h4>Add Customer</h4>
        <form onSubmit={handleSubmit}>
          <div className="d-flex m-2">
            <label className="col-3">Id</label>
            <input
              type="number"
              className="form-control w-60"
              name="id"
              placeholder="Enter your ID"
              required
            //   value={ContactList.id}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="d-flex m-2">
            <label className="col-3">First Name</label>
            <input
              type="text"
              className="form-control w-60"
              name="fname"
              placeholder="Enter your First Name"
              required
            //   value={ContactList.fname}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="d-flex m-2">
            <label className="col-3">Last Name</label>
            <input
              type="text"
              name="lname"
              className="form-control w-60"
              required
              placeholder="Enter your First Name"
            //   value={ContactList.lname}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="d-flex m-2">
            <label className="col-3">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control w-60"
              required
              placeholder="Enter your email "
            //   value={ContactList.email}
              onChange={handleInputChange}
            ></input>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddCustomer;
