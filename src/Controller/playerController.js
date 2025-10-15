import * as playerService from "../services/playerService.js";
import { success, error } from "../utils/response.js";

export const getAllPlayers = async (req, res) => {
  try {
    const players = await playerService.getAllPlayers();
    res.json(success("Jogadores listados com sucesso", players));
  } catch (err) {
    res.status(500).json(error("Erro ao listar jogadores", err));
  }
};

export const createPlayer = async (req, res) => {
  try {
    const player = await playerService.createPlayer(req.body);
    res.json(success("Jogador criado", player));
  } catch (err) {
    res.status(400).json(error("Erro ao criar jogador", err));
  }
};
