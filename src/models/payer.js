import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  health: { type: Number, default: 100 },
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
});

export default mongoose.model("Player", playerSchema);
