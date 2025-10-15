import Player from "../models/payer.js";

export const getAllPlayers = async () => {
  return await Player.find();
};

export const createPlayer = async (data) => {
  const player = new Player(data);
  return await player.save();
};
