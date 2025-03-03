import express from "express";
import { imageModel } from "./schema.js";
const route = express.Router();

// route.post("/api/addimage", async (req, res) => {
//   console.log(req.body.data)
//   const {
//     body: {
//       data: { fullName, status, type,history },
//     },

//   } = req;
//   console.log(fullName, status, type, history);
//   const { imageUrl } = req.body;
//   console.log(imageUrl);

//    try {
//      if (!fullName || !status || !type || !history)
//        return res.send({ message: "please fill out all the fields... " });
//      if (!imageUrl) {
//        return res.status(400).json({ message: "Image URL is required" });
//      }
//      const exist = await imageModel.findOne({ fullName, type });
//      if (exist) return res.send({ message: `${fullName} already existed` });
//      const saveArtist = new imageModel({ fullName, status, type,history, imageUrl });
//      await saveArtist.save();
//      res.send({ message: "Artist saved succesfully" });
//    } catch (error) {
//      res.status(500).send({ message: error.message });
//    }
// });

route.delete("/api/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) return res.send({ message: `${fullName} has no id.` });
    const artistToDel = await imageModel.findByIdAndDelete(id);
    res.send({ message: "deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
route.patch("/api/put/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await imageModel.findByIdAndUpdate(id, req.body.updatedData);
    res.send({ message: "artist updated successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

route.post("/api/save-image", async (req, res) => {
  try {
    const {
      body: {
        data: { fullName, status, type, history },
      },
    } = req;
    const { imageUrl } = req.body;
    if (!fullName || !status || !type || !history)
      return res.send({ message: "please fill out all the fields... " });
    if (!imageUrl) {
      return res.status(400).json({ message: "Image URL is required" });
    }
    const exist = await imageModel.findOne({ fullName, type });
    console.log(exist);
    if (exist) return res.send({ message: `${fullName} already existed` });
    const saveArtist = new imageModel({
      fullName,
      type,
      status,
      history,
      imageSrc: imageUrl,
    });
    await saveArtist.save();
    res.send({ message: "Artist saved succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving Artist", error });
  }
});
export default route;
