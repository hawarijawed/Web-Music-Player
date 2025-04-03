import React from 'react'
import {useNavigate} from 'react-router-dom'
const AlbumItem = ({ image, name, desc, id }) => {

const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 px-2 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <div className='flex flex-col items-start'>
        <img className='w-full h-auto rounded mb-3' src={image} alt={name} />
        <p className='font-bold text-sm text-start'>{name}</p>
        <p className='text-slate-200 text-sm text-start justify-items-center'>{desc}</p>
      </div>
    </div>
  )
}

export default AlbumItem
