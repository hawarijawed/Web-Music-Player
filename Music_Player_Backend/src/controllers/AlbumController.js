import {v2 as cloudinary } from 'cloudinary';
import albumModel from '../models/albumModel.js';

const addAldbum = async (req, res) =>{
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});
        const albumData = {
            name,
            desc,
            bgColor,
            image: imageUpload.secure_url,
        }

        const album = albumModel(albumData);
        await album.save();
        res.json({success: true, message:"Album added sucessfully"});
    } catch (error) {
        res.json({success:false, message:"Error occured in uploading album data"});
    }
}

const listAldbum = async (req, res) =>{
    try {
        const allAlbums = await albumModel.find({});
        if(!allAlbums){
            return res.json({sucess:true, message:"No albums found"});
        }

        res.json({success:true, albums:allAlbums});
    } catch (error) {
        
    }
}

const removeAldbum = async (req, res) =>{
    try {
        const Id = req.body.id;
        const album = await albumModel.findById(Id);
        
        //Check if song exists or not
        if(!album){
            return res.json({success:false, message:"Album does not exist in database"});
        }
        await albumModel.deleteOne({_id:Id});
        res.json({success:true, message:"'Album removed successfully"})
    } catch (error) {
        res.json({success:false, message:error || "Error occured !!!"})
    }
};

export {addAldbum, listAldbum, removeAldbum};