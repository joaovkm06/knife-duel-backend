import * as matchService from "../services/matchService.js";
import { success, error } from "../utils/response.js";

export const getAllMatches = async (req, res) => {
  try {
    const matches = await matchService.getAllMatches();
    res.json(success("Partidas listadas", matches));
  } catch (err) {
    res.status(500).json(error("Erro ao listar partidas", err));
  }
};

export const createMatch = async (req, res) => {
  try {
    const match = await matchService.createMatch(req.body);
    res.json(success("Partida criada", match));
  } catch (err) {
    res.status(400).json(error("Erro ao criar partida", err));
  }
};
