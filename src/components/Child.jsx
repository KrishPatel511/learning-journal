import { useState } from "react"

const Child = ({name,salary,desig}) => {


    const [childName,setChildName] = useState(name);
    const [childSalary,setChildSalary] = useState(salary);
    const [childDesig,setChildDesig] = useState(desig);
 
   const changeChildName = () => {

    setChildName("Bhavya")
   }

   const changeChildSalary = () => {
    setChildSalary("45000")
   }

   const changeChildDesig = () => {
    setChildDesig("IT Industry")
   }

  return (
   <>
        <p>{childName}</p>  
        <button onClick={changeChildName}>Update Name</button>
        
        <p>{childSalary}</p>  
        <button onClick={changeChildSalary}>Update Salary</button>
        <p>{childDesig}</p>    
        <button onClick={changeChildDesig}>Update Designation</button>
   </>
  )
}

export default Child