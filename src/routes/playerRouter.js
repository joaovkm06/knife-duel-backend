import express from "express";
import { getAllPlayers, createPlayer } from "../Controller/playerController.js";

const router = express.Router();

router.get("/", getAllPlayers);
router.post("/", createPlayer);

export default router;
