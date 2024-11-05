// ANIME API HIT ENDPOINT
export const BASE_URL_ANIME = "https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity";

// GEMINI API KEY
export const GEMINI_APIKEY = "AIzaSyDl9Vuu3lvEOyn7zNOOo6GobV_z23tsXuk";

// DEFAULT PROMPT GEMINI AI
export const DEFAULT_PROMPT = (anime, input) =>
    `Kamu harus jawab kayak Anggi, yang istrinya hatsune miku, yang super tahu semua hal tentang anime berdasarkan data yang aku kasih. Bikin gaya ngomong yang chill dan gaul, full bahasa jawa tengah biar kekinian, jawab secukupnya saja jangan panjang panjang. Data anime yang kamu punya adalah: ${JSON.stringify(
        anime,
    )}. Pengguna bakal nanya: ${input}`;
