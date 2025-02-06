import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { imageModel, userModel } from "./schema.js";
import express from "express";
import dotenv from "dotenv/config";

const router = express.Router()

router.post("/api/addimage", async (req, res) => {
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
router.get("/getAll", async (req, res) => {
  const artists = await imageModel.find();
  res.send({ message: artists });
});

//Register

router.post("/api/register", async (req, res) => {
  const {
    body: { firstName, lastName, email, password },
  } = req;
  try {
    if (!firstName || !lastName || !email || !password)
      return res
        .status(400)
        .send({ message: "fill out all the fields please!" });
    const isExisted = await userModel.findOne({ email });
    if (isExisted)
      return res.status(400).send({ message: "user already existed" });
    const hashedPassword = await bcrypt.hash(password, 8);
    const registeredUser = new userModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await registeredUser.save();
    const token = jwt.sign(
      { id: registeredUser._id },
      process.env.JWTSECURITY,
      {
        expiresIn: "1d",
      }
    );
    res.cookie("myCookie", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.status(201).send({ message: "user registered successfully." });
  } catch (error) {
    res
      .status(500)
      .send({ message: "error while registered." + error.message });
  }
});

//login

router.post("/api/login", async (req, res) => {
  const {
    body: { email, password },
  } = req;
  if (!email || !password)
    return res.status(400).send({ message: "fill out all the fields please." });
  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).send({ message: "sign up please." });
    const checkPass = await bcrypt.compare(password, user.password);
    if (!checkPass) return res.status(403).send({ message: "bad credentials" });
        const token = jwt.sign({ id: user._id }, 
        process.env.JWTSECURITY, { expiresIn: "1hr" });
    res.cookie("connect.sid", token, {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
    });
    res
      .status(200)
      .send({
        message: `congrats ${user.firstName} . you logged in successfully.`,
      });
  } catch (error) {
    res.status(500).send({ message: "error while login" + error.message });
  }
});

//lodout

router.post("/api/logout", async (req, res) => {
  try {
    res.clearCookie("connect.sid", {
      httpOnly: true,
    });
    res.status(200).send({ message: "you logged out successfully." });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// forget pass

router.post("/api/forgotPass", async (req, res) => {});




router.get("/api/getAllArtists", async (req, res) => {
  try {
    const artists = (await imageModel.find()).length;
    res.status(200).send({message:artists})
  } catch (error) {
res.status(500).send({message:error.message})
  }
});
router.get("/api/getAllUsers", async (req, res) => {
  try {
    const users = (await userModel.find()).length;
    res.status(200).send({ message: users });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});




export default router


