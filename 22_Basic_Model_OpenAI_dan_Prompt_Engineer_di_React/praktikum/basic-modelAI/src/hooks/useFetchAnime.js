import { useEffect, useState } from "react";
import { fetchAnimeData } from "../api/animeApi";
import { BASE_URL_ANIME } from "../utils/constants";

const useFetchAnime = () => {
    const [anime, setAnime] = useState([]);

    useEffect(() => {
        const fetchAnime = async () => {
            const localData = localStorage.getItem("animeData");
            if (localData) {
                setAnime(JSON.parse(localData));
            } else {
                const page1 = await fetchAnimeData(BASE_URL_ANIME, 1);
                const page2 = await fetchAnimeData(BASE_URL_ANIME, 2);

                const combineData = [...page1, ...page2].map((item) => ({
                    title: item.title,
                    type: item.type,
                    episodes: item.episodes,
                    score: item.score,
                    year: item.year,
                    genres: item.genres,
                    synopsis: item.synopsis,
                }));

                localStorage.setItem("animeData", JSON.stringify(combineData));
                setAnime(combineData);
            }
        };
        fetchAnime();
    }, []);
    return anime;
};

export default useFetchAnime;
