import axios from 'axios';
import { useEffect, useState } from 'react'

const User02 = () => {

    const [users,setUsers] = useState([]);
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(true);

    useEffect(() => {
               const fetchUsers = async() => {
 
                try{
                     setLoading(true);
                     setError("");

                     const res = await axios.get("https://dummyjson.com/products")
                    setUsers(res.data.products);
                }
                catch(error) {
                      setError(error.message);
                       console.log("Something Went Wrong...!",error);
                       
                }
                finally{
                    setLoading(false);
                }       
               }

               fetchUsers();
    },[])

    if(loading) return <p>Loading.....</p>
    if(error) return <p>Error.....</p>
  return (
    <>
        <h3>Hello Patel</h3>
        {users.map((user) => {
             return <p key={user.index}>{user.title} === {user.description}</p>
        })}
    </>
  )
}

export default User02