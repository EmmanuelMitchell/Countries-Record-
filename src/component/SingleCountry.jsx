import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleCountry = () => {
  const [country, setCountry] = useState([])
  const {  name } = useParams();


  useEffect(()=>{
    singleData()

  }, [name])


  const singleData = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data = await res.json()
    console.log(data)
    setCountry(data)
  }



  return (
   <>
   <section className='p-8 md:py-0 container mx-auto'>
   {country.map((item)=>(
     <div key={item.population} className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen">
        <article>
            <img src={item.flags.svg} alt="" />
        </article>

        <article>
            <h2 className='text-bold text-gray-700 text-4xl lg:text-6xl'>{item.name.official}</h2>
            <ul className='flex my-4 flex-col items-start justify-start gap-2 text-slate-700'>
             <li>Capital: {item.capital[0]}</li>
            <li>Population: {item.population.toLocaleString()} </li>
            <li>Region: {item.region} </li>
            <li>Subregion: {item.subregion} </li>
            </ul>



           {item.borders && (<>
           
             <h3 className='text-gray-800 font-bold text-5xl py-3'>Borders</h3>
             <ul className='flex flex-wrap items-start justify-start gap-3'>
                {item.borders.map((border, index) =>(
                    <li key={index} className="bg-white rounded shadow text-sm">{border}</li>
                ))}
             </ul>
           </>)}
           <Link to={"/"} className=" inline-block mt-8 bg-white hover:bg-gray-800 hover:text-white p-4">&larr;Back</Link>
        </article>
     </div>
   ))}
   </section>
   
   </>
  )
}

export default SingleCountry