import { useState } from "react";
import AddCustomer from "./addCustomer";
import CustomerDetails from "./CustomerDetails";
import CustomerList from "./customerListTable";

function App() {
  const [contactArray , setContactArray ] = useState([])
  const [ContactList , SetContactList ] = useState({
    id:'',
    fname: '',
    lname: '',
    email: '',
  })   
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    SetContactList({
      ...ContactList,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setContactArray((prev)=>[...prev,ContactList])
    e.target.reset()
    
  };
  const [data, setData] = useState(null);

  // This function is passed to the child component
  // const handleData = (value) => {
  //   // setData(value);
    // console.log(data);
  // };
  return (
    <div className="App">
      <CustomerList setData={setData} contactArray={contactArray}/>
      <hr></hr>
      <div className="container-fluid d-flex" style={{justifyContent:"space-between"}}>
      <AddCustomer CustomerList={CustomerList} 
       handleSubmit={handleSubmit} handleInputChange={handleInputChange}  />
      
      {data && <CustomerDetails contactArray={contactArray} data={data}/>}
      </div>
    </div>
  );
}

export default App;
