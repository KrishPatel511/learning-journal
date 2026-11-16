import { useMemo, useState } from "react"

const Products = [

    {id : 1, name : "Laptop" , price : 23000},
    {id : 2, name : "Keyboard" , price : 2000},
    {id : 3, name : "Mouse" , price : 500},
    {id : 4, name : "Pendrive" , price : 800},
    {id : 5, name : "Desktop" , price : 45000}
    
]

const UseMemoExamples = () => {

    const [search,setSearch] = useState("");


     const filterProducts = useMemo(() => {
             console.log("Filtering.....");

             return Products.filter((product) => 
                  product.name.toLowerCase().includes(search.toLowerCase())            
             );
             
     },[search])



  return (
    <>
          <h2>Products Search......</h2>

        Searchhh Karoooo ::  <input
          
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

export default UseMemoExamples