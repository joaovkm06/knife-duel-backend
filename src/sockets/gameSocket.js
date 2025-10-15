import { throwKnife } from "../game/gamelogic.js";
import { createMatchState, updatePlayerHealth } from "../game/gamestate.js";

export default (io) => {
  io.on("connection", (socket) => {
    console.log(`🟢 Jogador conectado: ${socket.id}`);

    socket.on("joinRoom", ({ roomId, player }) => {
      socket.join(roomId);
      const match = createMatchState(roomId, [player]);
      io.to(roomId).emit("playerJoined", match);
    });

    socket.on("throwKnife", (data) => {
      const result = throwKnife(data.player, data.knife, data.target);
      io.to(data.roomId).emit("knifeThrown", result);

      if (result.hit) {
        updatePlayerHealth(data.roomId, data.target.id, result.damage);
        io.to(data.roomId).emit("hitPlayer", {
          playerId: data.target.id,
          damage: result.damage,
        });
      }
    });

    socket.on("disconnect", () => {
      console.log(` Jogador saiu: ${socket.id}`);
    });
  });
};
