import { useMemo, useState } from 'react'



     const Products = [
        {id : 1 , name : "Laptop", price : 30000},
        {id : 2 , name : "Desktop", price : 34000},
        {id : 3 , name : "Mobile", price : 15000},
        {id : 4 , name : "Touchpad", price : 3000},
        {id : 5 , name : "Keyboard", price : 2000}
     ]

const UseMemoDemo = () => {

const [search,setSearch] = useState("");

// Filter and cache the products
const filterProducts =  useMemo(() => {
     console.log("Filtering.......");

     return Products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
     );
     
},[search])
     


  return (
    <>


        <h4>Search Products.......</h4>
           
           
            search:   <input
            
             type='search'
             placeholder='Search Here....'
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

export default UseMemoDemo