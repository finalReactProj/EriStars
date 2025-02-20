import express from "express"
import { imageModel } from "./schema.js";
const route = express.Router();

route.post("/api/addimage", async (req, res) => {
  const {
    body: {
      data: { fullName, status, type, imageSrc },
    },
  } = req;
 
  if (!fullName || !status || !type || !imageSrc)
    return res.send({ message: "please fill out all the fields " });
  try {
    const exist = await imageModel.findOne({ fullName, type });
    if (exist) return res.send({ message: `${fullName} already existed` });
    const saveArtist = new imageModel({ fullName, status, type, imageSrc });
    await saveArtist.save();
    res.send({ message: "Artist saved succesfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

route.delete("/api/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) return res.send({ message: `${fullName} has no id.` });
    const artistToDel = await imageModel.findByIdAndDelete( id );
    res.send({ message: "deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
route.patch("/api/put/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.body.updatedData);
  try {
    const artistToUpdate = await imageModel.findByIdAndUpdate(
      id,
      req.body.updatedData
    );
    res.send({ message: artistToUpdate });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
export default route