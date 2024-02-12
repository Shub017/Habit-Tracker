import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    }
});

