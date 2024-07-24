import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

function Details() {
  const param = useParams();
  
  const id = param.id
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    const fData = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const parseData = await fData.json();
    setUserData(parseData);
  };
  //   console.log(userData);
  useEffect(() => {
    fetchData();
  }, []);
// console.log(userData);
  return (
    <>
    <h1>User Data</h1>
      <div>
      {userData && <div>
        <h5>{userData.name}</h5>
        <h5>{userData.username}</h5>
                    <h5>{userData.email}</h5>
                    <h5>{userData.website}</h5>
                    <h5>{userData.phone}</h5>
        </div>}
      </div>
    </>
  );
}

export default Details;
