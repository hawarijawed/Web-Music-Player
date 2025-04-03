import { v2 as cloudinary } from "cloudinary";
import  songModel  from "../models/songModel.js";

const addSong = async (req, res)=>{
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];
        
        //use cloudinary uploader to upload file on cloudinary
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type:"video"});
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"});
        const duration = `${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`
        const songData = {
            name, 
            desc, 
            album, 
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration,
        }
        
        const song = songModel(songData);
        await song.save();

        res.json({success:true, message:"Song added successfully"})
    } catch (error) {
        res.json({success:false, message:error});
    }
}

const listSong = async (req, res) =>{
    try {
        const allSong = await songModel.find({});//findall song
        res.json({success:true,songs:allSong});
    } catch (error) {
        res.json({success:false, message:error});
    }
}

const removeSong = async (req, res) =>{
    try {
        const Id = req.body.id;
        console.log(Id);
  
        const song = await songModel.findById(Id);
        console.log(`Song Name: ${song}`);
        
        //Check if song exists or not
        if(!song){
            console.log('Song does not exist in database');
            return res.json({success:false, message:"Song does not exist in database"});
        }
        await songModel.deleteOne({_id:Id});
        console.log('Song removed successfully');
        res.json({success:true, message:"'Song removed successfully"})
    } catch (error) {
        res.json({success:false, message:error || "Error occured !!!"})
    }
};

export {addSong, listSong,removeSong};;