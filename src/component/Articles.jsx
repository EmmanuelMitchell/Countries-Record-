import React from 'react'
import { Link } from 'react-router-dom'

const Articles = ({flags, name, population, region, subregion}) => {
  return (
   <>
    <Link to={`/${name.common}`}>
    <article className='bg-white rounded-lg shadow'>
    <img src={flags.svg} alt={flags.alt} className="md:h-72 w-full object-cover"/>
    <div className='p-5 '>
    <h3 className='text-lg font-bold text-gray-500 mb-2'>{name.common}</h3>
    <ul className='flex flex-col items-start justify-center gap-2'>
      <li>Population:{population} </li>
      <li>Region: {region} </li>
      <li>Subregion: {subregion} </li>
    </ul>
    </div>
    
   </article>
    </Link>
   </>
  )
}

export default Articles