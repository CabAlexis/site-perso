// Pointe de flèche orientée selon le dernier segment d'une polyligne.
export function pointe(points: [number, number][], longueur = 8, ouverture = 0.42): string {
  const [x1, y1] = points[points.length - 2];
  const [x2, y2] = points[points.length - 1];
  const a = Math.atan2(y2 - y1, x2 - x1);
  const g = [x2 - longueur * Math.cos(a - ouverture), y2 - longueur * Math.sin(a - ouverture)];
  const d = [x2 - longueur * Math.cos(a + ouverture), y2 - longueur * Math.sin(a + ouverture)];
  return `M${x2},${y2} L${g[0].toFixed(1)},${g[1].toFixed(1)} L${d[0].toFixed(1)},${d[1].toFixed(1)} Z`;
}
