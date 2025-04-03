import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets';
import { PlayerContext } from './PlayerContext';

const DisplayAlbum = ({album}) => {

    const {id} = useParams();
    const [albumdata , setAlbumdata] = useState("");
    const {playwitId, albumData, songsData} = useContext(PlayerContext);
    
    useEffect(()=>{
      albumData.map((item)=>{
        if(item._id === id){
          setAlbumdata(item);
        }
      })
    },[])
  return albumdata ? (
    <>
      <Navbar />
      <div className='mt-10 gap-8 flex flex-col md:flex-row md:items-end'>
      <img className='w-48 rounded ' src={albumdata.image} alt='album image' />
      <div className='flex flex-col'>
        <p>Playlists</p>
        <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
        <h4>{albumData.desc}</h4>
        <p className='mt-1'>
          <img className='inline-block w-5' src={assets.spotify_logo} alt='Spotify Logo' />
          <b>Spotify</b> • 12312 likes • <b>50 Songs,</b> about 2hr 30mins
        </p>
      </div>
    </div>

    <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon}/>
    </div>
    <hr className='mt-2 text-[#a7a7a7]'></hr>
    {
        songsData.filter((item)=>item.album === album.name).map((item,index)=>(
            <div onClick={()=>playwitId(item._id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                <p className='text-white'>
                    <b className='mr-4 text-[#a7a7a7a7]'>{index + 1}</b>
                    <img className='inline w-10 mr-5' src={item.image}/>
                    {item.name}
                </p>
                <p className='text-[15px]'>{albumData.name}</p>
                <p className='text-[15px] hidden sm:block'>8 days ago</p>
                <p className='text-[15px] text-center'>{item.duration}</p>
            </div>
        ))
    }
    </>
  ): null
}

export default DisplayAlbum
