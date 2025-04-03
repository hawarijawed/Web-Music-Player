import React, { useContext } from 'react'
import { PlayerContext } from './PlayerContext'

const SongsItem = ({image, name, desc, id}) => {

  const {playwitId} = useContext(PlayerContext);

  return (
    <div onClick={()=>playwitId(id)} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongsItem
