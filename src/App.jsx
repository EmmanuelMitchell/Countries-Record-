import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Countries from "./component/Countries"
import SingleCountry from "./component/SingleCountry"
import  Error  from "./component/Error"





function App() { 
 

  return (
   <BrowserRouter>
     <Routes>
      <Route  path="/"  element={<Countries />} />
      <Route path="/:name" element={<SingleCountry />} />
      <Route path="*"  element={<Error/>} />
     </Routes>
   </BrowserRouter>
  )
}

export default App
