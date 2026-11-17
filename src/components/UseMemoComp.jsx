import { useMemo, useState } from "react"


const Products = [

    {id:1,name : "Laptop",price : 23000},
    
    {id:2,name : "Mobile",price : 33000},
    
    {id:3,name : "Pendrive",price : 340},
    
    {id:4,name : "Keyboard",price : 1000},
    
    {id:5,name : "Mouse",price : 790}
]


const UseMemoComp = () => {

    const [search,setSearch] = useState("");

    const filterProducts = useMemo(() => {

      console.log("Filtering......");

      return Products.filter((product) => (
        product.name.toLowerCase().includes(search.toLowerCase())
      ))
      

    },[search])


  return (

    <>
         <h3>Products List</h3>

         <input
              type="search"
              placeholder="Search Here....."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
         />
         
         <ul>
             {filterProducts.map((product) => (
                    <li key={product.id}>
                      {product.name} - {product.price}

                    </li>
             ))}

         </ul>
    </>
    
  )
}

export default UseMemoComp