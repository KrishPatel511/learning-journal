import axios from "axios";
import { useEffect, useState } from "react"

const CallAPI = () => {
    

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");


    useEffect(() => {
         const fetchUsers = async() => {
               
              try {
                   setLoading(true);
                   setError("");

                   const res = await axios.get("https://dummyjson.com/users")

                   setUsers(res.data.users);

              } catch (error) {
                  setError(error.message)

                  console.log("Something Went Wrong" ,error);
                  
              }

              finally{
                setLoading(false);
              }
         }  
         
         
         fetchUsers()
    },[])


    if(error) return <p>Error....</p>
    if(loading) return <p>Loading......</p>
  return (


    <>

      <h2>Get API Users Data</h2>

         <table>
             <thead>
                <tr>

             
                <th>Firstname</th>
                 <th>Lastname</th>
                  <th>Middlename</th>
                   <th>Age</th>
                   <th>Gender</th>

                      </tr>
             </thead>


             <tbody>
                    {users.map((user) => (
                          <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.maidenName}</td>
                            <td>{user.age}</td>  
                            <td>{user.gender}</td>
                          </tr>
                    ))}
             </tbody>
         </table>
    
    
    </>
  )
}

export default CallAPI