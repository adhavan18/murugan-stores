import { useState } from 'react'
import './App.css'
import AddProduct from './AddProduct'
import Navbar from './Navbar'
import Product from './Product'
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
   <AddProduct/>
   <Product ></Product>

   </>
  )
}

export default App
