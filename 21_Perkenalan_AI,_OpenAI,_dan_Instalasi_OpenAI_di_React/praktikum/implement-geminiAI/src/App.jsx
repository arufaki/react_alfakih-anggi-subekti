import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState([]);
    const [session, setSession] = useState([]);
    const bottom = useRef(null);

    const API_KEY = "AIzaSyDl9Vuu3lvEOyn7zNOOo6GobV_z23tsXuk";
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    useEffect(() => {
        bottom.current?.scrollIntoView({ behavior: "smooth" });
        console.log(session);
    }, [response, session]);

    const generate = async () => {
        try {
            const hit = await model.generateContent(input);
            const resAI = hit.response.text();
            setResponse((prevRes) => prevRes.map((item, index) => (index === prevRes.length - 1 ? { ...item, response: resAI } : item)));
        } catch (error) {
            console.error(error);
        }
    };

    const handleNewChat = () => {
        const newSession = {
            id: `Chat ${session.length + 1}`,
            responses: response,
        };
        setSession((prevSession) => [...prevSession, newSession]);
        setResponse([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newhistory = {
            prompt: input,
            response: "Typing...",
        };
        setResponse((prevRes) => [...prevRes, newhistory]);
        generate();
        setInput("");
    };

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
