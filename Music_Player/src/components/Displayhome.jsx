import React, { useContext } from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongsItem from './SongsItem'
import { PlayerContext } from './PlayerContext'

const Displayhome = () => {

  const {songsData, albumData} = useContext(PlayerContext);

  return (
    <>
      <Navbar />

      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl '>Featured Charts</h1>
        {/* Use a grid layout with responsive columns */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:flex items-start overflow-auto '>
          {albumData.map((item, index) => (
            <AlbumItem 
              key={index} 
              name={item.name} 
              desc={item.desc} 
              id={item._id} 
              image={item.image} 
            />
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:flex items-center overflow-auto '>
          {songsData.map((item, index)=>(
            <SongsItem 
              key={index}
              name={item.name}
              desc={item.desc}
              image = {item.image}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Displayhome
