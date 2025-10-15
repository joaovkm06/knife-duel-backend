const matches = new Map(); // salaId → estado da partida

export const getMatchState = (roomId) => matches.get(roomId);

export const createMatchState = (roomId, players) => {
  const state = {
    id: roomId,
    players,
    started: false,
  };
  matches.set(roomId, state);
  return state;
};

export const updatePlayerHealth = (roomId, playerId, damage) => {
  const match = matches.get(roomId);
  if (!match) return;
  const player = match.players.find((p) => p.id === playerId);
  if (player) player.health -= damage;
};
