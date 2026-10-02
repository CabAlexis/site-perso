import type { APIRoute } from 'astro';
import { projets } from '../data/projets';

// Plan du site écrit à la main : cinq URL ne justifient pas une dépendance.
export const GET: APIRoute = ({ site }) => {
  const chemins = ['/', ...projets.map((p) => `/${p.slug}`), '/mentions-legales'];
  const urls = chemins.map((c) => `  <url><loc>${new URL(c, site)}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
