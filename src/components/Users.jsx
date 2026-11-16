import axios from 'axios';
import  { useEffect, useState } from 'react'

const Users = () => {

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");


    useEffect(() => {
         const fetchUsers = async() => {
                try {
                    setLoading(true);
                    setError("");

                    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
                    setUsers(res.data);

                     
                } catch (error) {
                    setError(error.message);

                    console.log("Something Went Wrong...",error);
                    
                }

                finally{
                  setLoading(false);
                }
         }
         fetchUsers();
    },[])

    if(loading) return <p>Loading.....</p>
    if(error) return <p>Error......</p>


  return (
    <>
      <p>User List.....</p>
<table>
  <thead>
      <tr>
          <th>name</th>
          <th>username</th>
          <th>email</th>
       </tr>
  </thead>
    
    <tbody>
          {users.map((user) => (

            <tr key={user.id}>
               <td>{user.name}</td>
               <td>{user.username}</td>
               <td>{user.email}</td>
            </tr>
          ))
          }
    </tbody>
</table>
    
    </>
  )
}

export default Users