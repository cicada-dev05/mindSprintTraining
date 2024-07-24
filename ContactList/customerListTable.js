

function CustomerList(props) {
    
    const {contactArray,setData} = props
  return (
    <>
      <div>
        <center className="mt-3">
          <h2>Customer List</h2>
          <div className="container">
          <table className="table table-striped">
            <thead className="table-dark">
            <tr className="table-active">
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th colSpan={2}>Email</th>
            </tr>
            </thead>
            <tbody className="table-group-divider">
                {
                    contactArray.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.email}</td>
                            <td><button onClick={()=>{setData(item)
                            }}  className="btn btn-secondary">Show</button></td>
                            {}
                        </tr>
                    ))
                }
            </tbody>
          </table>
          </div>
        </center>

      </div>
    </>
  );
}

export default CustomerList;
