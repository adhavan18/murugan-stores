import { useState } from 'react'
import './App.css'
import AddProduct from './AddProduct'
import Navbar from './Navbar'
import Product from './Product'
import Searchbar from './Searchbar'
function App() {
  const[isloggedin,setlogin]=useState(true)
  

  return (
   <>
   
   {/* {
    isloggedin?(
      <>
            <AddProduct/>
      </>
    ):(
      <> 
      
      </>
    )
   } */}
   <Navbar/>
   <Searchbar/>
   <AddProduct/>
   <Product ></Product>

   </>
  )
}

export default App
