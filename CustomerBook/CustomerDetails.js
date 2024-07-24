function CustomerDetails(props) {
    const {data} = props
    // console.log(data);
  return (
    <>
      <div className="col-5">
        <h4>Customer Details</h4>
        <hr></hr>
        <div className="container">
          <table>
            <tbody >
              <tr>
                <td>ID: </td>
                <td style={{textAlign:'center'}}>{data.id}</td>
              </tr>
              <tr>
                <td>First Name: </td>
                <td style={{textAlign:'center'}}>{data.fname}</td>
              </tr>
              <tr>
                <td>Last Name: </td>
                <td style={{textAlign:'center'}}>{ data.lname}</td>
              </tr>
              <tr>
                <td>Email: </td>
                <td style={{textAlign:'center'}}>{data.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CustomerDetails;
