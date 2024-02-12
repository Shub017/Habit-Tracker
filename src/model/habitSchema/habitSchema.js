import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  habitName: {
    type: String,
    required: true,
  },
  
  progress: [
    {
      date: {
        type: String,
      },
      status: {
        type: String,
        enum: ["Done", "notDone", "None"],
        default: "notdone",
      },
    },
  ],

  userId: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  }
});

const habitModel = mongoose.model("Habit", habitSchema);
export default habitModel;
