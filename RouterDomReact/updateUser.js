import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 
 
function UpdateUser() {
const [user,setUser] = useState(null)
    const { id } = useParams();
    const fetchData = async () => {
        const resp = await axios.get(`http://localhost:3000/users/${id}`)
        setUser(resp.data);
    }
 
    useEffect(()=>{
        fetchData()
    },[])
 
    const handleSubmit=async (e)=>{
        // http://localhost:3000/users/389/


        e.preventDefault();
        try {
            setUser({...user,id:id})
            console.log(`http://localhost:3000/users/${user.id}/${user}`);
            const resp=await axios.put(`http://localhost:3000/users/${user.id}/${user}`)
        if(resp.status==201){
            alert('created')
        }
        } catch (error) {
            console.log(error);
        }
    }

//  console.log(user)
// console.log('aj');
 
    return (
        <div>
            <h3>update profile</h3>
            {user &&<form onSubmit={handleSubmit}>
                 <input type="text" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} />
                <input type="email" value={user.mail} onChange={(e)=>setUser({...user,mail:e.target.value})} />
 
                <button type="submit">update data</button>
 
            </form>}
        </div>
    );
}
 
export default UpdateUser;