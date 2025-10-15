import mongoose from "mongoose";

const knifeThrowSchema = new mongoose.Schema({
  player: { type: mongoose.Schema.Types.ObjectId, ref: "Player" },
  match: { type: mongoose.Schema.Types.ObjectId, ref: "Match" },
  angle: Number,
  force: Number,
  hit: Boolean,
  damage: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("KnifeThrow", knifeThrowSchema);
