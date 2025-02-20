
import mongoose from "mongoose";




const imageSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    status: { type: String, required: true },
    type: { type: String, required: true },
    imageSrc: { type: String, required: true },
    history: { type: String, required: true },
  },
  { timestamps: true }
);
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

 export const imageModel = mongoose.model("Artist", imageSchema);
export const userModel = mongoose.model("User", userSchema);



