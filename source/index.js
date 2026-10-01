/**
 * Fuente Cuevana — stub. Sustituye este archivo por el index.js completo
 * (getStreams + extractores VOE/StreamWish/VidHide) que ya tienes.
 */
var TMDB_KEY = 'a2d9bbed370d9f678e34006f8750a5a5';
var TMDB = 'https://api.themoviedb.org/3';
var BASE = 'https://wv3.cuevana3.eu';
var UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function getStreams(tmdbId, type, season, episode) {
  // Stub: sin extractores de embed. Usa el index.js completo de la fuente.
  console.log('[Cuevana source stub] getStreams', tmdbId, type, season, episode);
  return [];
}

async function extract(embedUrl) {
  return null;
}

module.exports = { getStreams: getStreams, extract: extract };
