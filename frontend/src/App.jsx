import { useState } from 'react'
import './App.css'
import AddProduct from './AddProduct'
import Navbar from './Navbar'
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
   

   </>
  )
}

export default App
