import express from "express";
import upload from "../middlewares/multer.js";
import { addAldbum, removeAldbum, listAldbum } from "../controllers/AlbumController.js";

const albumRouter = express.Router();

albumRouter.post('/add', upload.single('image'), addAldbum);
albumRouter.get('/list', listAldbum);
albumRouter.post('/remove', removeAldbum);

export default albumRouter;