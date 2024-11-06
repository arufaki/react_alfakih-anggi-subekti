import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ onClick, datas, handleClickHistory, response }) => {
    const historyData = datas;
    const realtimeResponse = response;
    const isResponsesEmpty = realtimeResponse.length === 0;
    return (
        <div className="h-screen w-60 bg-slate-500">
            <Link to="/chat">
                <button
                    className={`mt-2 ml-3 p-3 rounded-lg cursor-pointer ${isResponsesEmpty ? "bg-gray-300" : "bg-blue-300"}`}
                    onClick={isResponsesEmpty ? null : onClick}
                    disabled={isResponsesEmpty}
                >
                    New Chat
                </button>
            </Link>
            <div className="mt-5">
                {historyData
                    .slice()
                    .reverse()
                    .map((data) => (
                        <p className="cursor-pointer px-5 bg-blue-500 mb-2 hover:opacity-70" key={data.id} onClick={() => handleClickHistory(data)}>
                            {data.id}
                        </p>
                    ))}
            </div>
        </div>
    );
};

export default Sidebar;
