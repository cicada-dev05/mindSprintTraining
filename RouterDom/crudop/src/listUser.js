import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpdateUser from "./updateUser";

function ListUsers() {
  const [data, setdata] = useState(null);
  // const [DelId , setDelId ] = useState(null)
  const fetchData = async () => {
    try {
      const fdata = await axios.get("http://localhost:3000/users/");
      const parseData = fdata.data;
      setdata(parseData);
    } catch (error) {
      console.log(error);
    }
  };

  const userDelete = async(id)=>{
    try {
      // console.log(typeof(id));
      // id = parseInt(id)
      const resp = await axios.delete(`http://localhost:3000/users/${id}`)
      if(resp == 200) alert('Deleted Successfully')
        fetchData()
    } catch (error) {
      console.log(console.error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   userDelete(DelId)
  // }, [DelId])
  
  //   console.log(data);
  return (
    <>
     <center> <h2>List User</h2></center>
      {data && (
        <div className="container">
          <center>
            {data.map((item) => {
              return (
                <div key={item.id} className="container" >
                  <h6>User ID: {item.id}</h6>
                  <h4>User Name: {item.name}</h4>
                  <h4>Email Id: {item.mail}</h4>
                  <button className="btn btn-warning" onClick={()=>{
                    userDelete(item.id)
                  }}>Delete</button>
                  <Link to={`/update/${item.id}`} element={<UpdateUser/>}><button className="btn btn-warning" >Update</button></Link>
                  <hr></hr>
                </div>
              );
            })}
          </center>
        </div>
      )}
    </>
  );
}

export default ListUsers;
