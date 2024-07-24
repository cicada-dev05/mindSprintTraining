import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FetchWithAxios() {
  // const param = useParams();

  // const id = param.id
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    const userData = await axios.get(
      "https://jsonplaceholder.typicode.com/users/2"
    );
    setUserData(userData.data);
    // console.log(userData.data);
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
        {userData && (
          <div>
            <h5>{userData.name}</h5>
            <h5>{userData.username}</h5>
            <h5>{userData.email}</h5>
            <h5>{userData.website}</h5>
            <h5>{userData.phone}</h5>
          </div>
        )}
      </div>
    </>
  );
}

export default FetchWithAxios;
