import Match from "../models/match.js";

export const getAllMatches = async () => {
  return await Match.find().populate("players");
};

export const createMatch = async (data) => {
  const match = new Match(data);
  return await match.save();
};
