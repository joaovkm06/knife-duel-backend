import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
  winner: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
  status: { type: String, enum: ["waiting", "playing", "finished"], default: "waiting" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Match", matchSchema);
