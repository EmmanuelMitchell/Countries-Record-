import React from 'react'
import { useState, useEffect } from 'react'
import Articles from './Articles'

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [serchText, setSearchText] = useState("")
   const regions = [
    {  
      name: "Eroupe"
  },

  {  
    name: "Africa"
},

{  
  name: "Asia"
},

{  
  name: "American"
},

{  
  name: "Oceania"
},

{  
  name: "Antarctic"
},
   ]
  useEffect(()=>{
    getData()

  }, [])

  const getData = async ()=>{
    const res = await fetch("https://restcountries.com/v3.1/all")
    const  data = await res.json()
    console.log(data)
    setCountries(data.slice(0,10))
  }



   // search function code 

   async function SearchCountry (){
    const res = await fetch(`https://restcountries.com/v3.1/name/${serchText}`)
    const data = await res.json()
    console.log(data)
    setCountries(data)
   }



   function handleClick(e){
      e.preventDefault()
      SearchCountry()
      
   }
  return (
    <div>
      {!countries ? (<h1>Loading..</h1>):(
        <section className='container mx-auto p-4'>
          {/* Form */}
          <div className='flex flex-col md:flex-row md: items-center md:justify-between mb-8'>
          <form autoComplete='off' className='max-w-3xl' onSubmit={handleClick}>
            <input type="text" name="form" placeholder='serch for country by it name here' className='py-3 px-4
            w-full rounded shadow outline-none text-gray-600 placeholder-gray-500' 
            value={serchText}
            onChange={(e)=> setSearchText(e.target.value)}
            required/>
          </form>

          <form >
            <select name="fiter-by-region" id="" className='w-52 rounded shadow outline-none'>
              {regions.map((region,index) =>(
                <option key={index} value={region.name}>{region.name}</option>
              ))}
            </select>
          </form>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {countries.map((country)=>(
            <Articles  key={country.name.common} {...country} />
          ))}
          </div>
        </section>
      )}

    </div>
  )
}

export default Countries