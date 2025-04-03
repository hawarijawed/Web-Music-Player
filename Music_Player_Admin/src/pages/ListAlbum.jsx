import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { url } from '../App'; // Assuming the base URL is imported from App
import { toast } from 'react-toastify';

const ListAlbum = () => {
  const [data, setData] = useState([]); // Store album data
 
  const fetchAlbum = async () =>{
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if(response.data.success){
        setData(response.data.albums);
      }
      else{
        toast.error(`Error occurred}`);
      }
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  }

  const removeAlbum = async(id) =>{
    try {
      const response = await axios.post(`${url}/api/album/remove`,{id});
      if(response.data.success){
        toast.success(response.data.message);
        await fetchAlbum();
      }
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
}

  useEffect(()=>{
    fetchAlbum();
  }, []);
  return (
    <div>
      <p>All Album List</p>
      <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
        <b>Image</b>
        <b>Name</b>
        <b>Description</b>
        <b>Color</b>
        <b>Action</b>
      </div>

      {data.map((item, index) =>{
        return (
          <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
              <img className='w-12' src={item.image} alt='Song image'/>
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <p>{item.Color}</p>
              <p onClick={()=>removeAlbum(item._id)} className='cursor-pointer'>X</p>
            </div>
        )
      })}
    </div>
  );
};

export default ListAlbum;
