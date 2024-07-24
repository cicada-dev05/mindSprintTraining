import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UsersList(props) {
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    const fData = await fetch("https://jsonplaceholder.typicode.com/users");
    const parseData = await fData.json();
    setUserData(parseData);
  }
//   console.log(userData);
  useEffect(() => {
    fetchData();
  }, []);

  return (<>
  <div>
    <table>
        <thead>
            <tr>
                <td>sr.No</td>
                <td>User Name</td>
                <td>Email</td>
                <td>Phone</td>
            </tr>
        </thead>
        <tbody>
           { userData.map((item,indx)=>{return(
                <tr key={indx}>
                    <td>{indx}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td><Link to={`/details/${item.id}`}><button className="btn btn-warning">View</button></Link></td>
                </tr>
            )})}
        </tbody>
    </table>
  </div>
  </>);
}

export default UsersList;
