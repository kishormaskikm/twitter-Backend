import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tweet"
        }
    ]
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;