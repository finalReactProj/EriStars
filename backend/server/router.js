import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { imageModel, userModel } from "./schema.js";
import express from "express";
import dotenv from "dotenv/config";
import nodemailer from "nodemailer"


const router = express.Router()

router.post("/api/addimage", async (req, res) => {
  const {
    body: {
      data: { fullName, status, type, imageSrc,history },
    },
  } = req;

  if (!fullName || !status || !type || !imageSrc || !history)
    return res.send({ message: "please fill out all the fields " });
  try {
    const exist = await imageModel.findOne({ fullName, type });
    if (exist) return res.send({ message: `${fullName} already existed` });
    const saveArtist = new imageModel({ fullName, status, type, imageSrc,history });
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
    body: { data: { firstName, lastName, email, password } },
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
    body:  { data: { email, password  } },
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
      secure: false,
      sameSite:"Lax" 
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

//logout

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

router.get("/api/Auth", (req, res) => { 
  try{  const token = req.cookies["connect.sid"];
  if (!token) return res.json({message:false })
  const isUserLogggedIN = jwt.verify(token, process.env.JWTSECURITY);
  if (!isUserLogggedIN) return res.status(400).json({ message: false })
    res.status(200).json({ message: true })
  } catch (error) {
    res.status(500).send({ message: error.message });
  }

})


router.post("/api/message",async(req, res) => {
try {
  const { firstName, lastName, email, phone, message } = req.body.data;
  if (!firstName || !lastName || !email || !phone || !message) return res.send({message:"Please fill out all the fields"})
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:email,
      pass: "tuxt uoze hnon gezz",
    },
  });
  const mail = {
    from: email,
    to: "luulsara24@gmail.com",
    subject: "comment about the website",
    html: `<p>${message}</p>`,
  };
await transporter.sendMail(mail)


} catch (error) {
  
}
})
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


