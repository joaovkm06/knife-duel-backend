export function throwKnife(player, knife, target) {
  const rad = (knife.angle * Math.PI) / 180;
  const speedX = Math.cos(rad) * knife.force;
  const speedY = Math.sin(rad) * knife.force;
  const gravity = 0.5;

  let x = player.x;
  let y = player.y;
  let vy = speedY;
  let hit = false;

  while (y <= 400) {
    x += speedX;
    y -= vy;
    vy -= gravity;

    if (
      x >= target.x &&
      x <= target.x + target.width &&
      y >= target.y &&
      y <= target.y + target.height
    ) {
      hit = true;
      break;
    }
  }

  const damage = hit ? Math.floor(knife.force / 5) : 0;
  return { hit, damage };
}
