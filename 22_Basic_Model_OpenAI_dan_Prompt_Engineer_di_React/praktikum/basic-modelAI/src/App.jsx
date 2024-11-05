import { useEffect, useRef } from "react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { generationConfig, initGenerativeAI, safetySettings } from "./services/generativeAI";
import { DEFAULT_PROMPT, GEMINI_APIKEY } from "./utils/constants";
import useFetchAnime from "./hooks/useFetchAnime";

const App = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState([]);
    const [session, setSession] = useState([]);
    const bottom = useRef(null);
    const genAI = initGenerativeAI(GEMINI_APIKEY);
    const anime = useFetchAnime();

    // HIT API GEMINI
    const generate = async () => {
        try {
            const hit = await genAI.generateContent(DEFAULT_PROMPT(anime, input), generationConfig, safetySettings);
            const resAI = hit.response.text();
            setResponse((prevRes) => prevRes.map((item, index) => (index === prevRes.length - 1 ? { ...item, response: resAI } : item)));
        } catch (error) {
            console.error("error bro :", error);
            setResponse((prevRes) => prevRes.map((item, index) => (index === prevRes.length - 1 ? { ...item, response: "Prompt mu melanggar ketentuan ! tolong refresh halaman ini yaa!" } : item)));
        }
    };

    // Effect agar setiap teks yang diinputkan scroll tetap berada di bawah
    useEffect(() => {
        bottom.current?.scrollIntoView({ behavior: "smooth" });
    }, [response]);

    // Handle submit prompt
    const handleSubmit = (e) => {
        e.preventDefault();
        setResponse((prevRes) => [...prevRes, { prompt: input, response: "Typing..." }]);
        generate();
        setInput("");
    };

    // Handle button new chat
    const handleNewChat = () => {
        const newSession = {
            id: `Chat ${session.length + 1}`,
            responses: response,
        };
        setSession((prevSession) => [...prevSession, newSession]);
        setResponse([]);
    };

    // handle click history chatting berdasarkan session
    const clickHistory = (data) => {
        setResponse(data.responses);
    };

    return (
        <div className="h-screen flex flex-row ">
            <Sidebar onClick={handleNewChat} datas={session} handleClickHistory={clickHistory} response={response} />
            <div className="flex flex-col w-full justify-end pb-12">
                <div className="overflow-y-auto ">
                    {response.map((res, index) => (
                        <div key={index} className="mt-4 px-[300px]">
                            <p className="text-right mb-10 bg-slate-400 p-2 rounded-lg">{res.prompt}</p>
                            <p className="mt-10 ">{res.response}</p>
                        </div>
                    ))}
                    <div ref={bottom} />
                </div>

                <form onSubmit={handleSubmit} className="pt-11 text-center">
                    <input type="text" onChange={(e) => setInput(e.target.value)} className="bg-slate-400" value={input} />
                    <button type="submit" className="bg-blue-400 ml-4">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default App;
