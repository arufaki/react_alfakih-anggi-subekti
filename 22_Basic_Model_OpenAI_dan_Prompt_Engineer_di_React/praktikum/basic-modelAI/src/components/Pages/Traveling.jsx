import React, { useState } from "react";
import { generationConfig, initGenerativeAI, safetySettings } from "../../services/generativeAI";
import { GEMINI_APIKEY, TRAVALING_PROMPT } from "../../utils/constants";

function Traveling() {
    const genAI = initGenerativeAI(GEMINI_APIKEY);

    const [formData, setFormData] = useState({
        country: "",
        city: "",
        visitDate: "",
        activities: "",
    });

    const [schedule, setSchedule] = useState("");
    const [isLoading, setLoading] = useState(false);

    const { country, city, visitDate, activities } = formData;

    const formatSchedule = (text) => {
        return text
            .replace(/## Itinerary Singkat/g, "<strong>Itinerary Singkat</strong>")
            .replace(/\*\*(Hari \d+):/g, "<strong>$1</strong>")
            .replace(/\*\*(\w+):/g, "<strong>$1:</strong>")
            .replace(/\n/g, "<br>");
    };

    // Hit Gemini API
    const generate = async () => {
        try {
            setLoading(true);
            const hit = await genAI.generateContent(TRAVALING_PROMPT(country, city, visitDate, activities), generationConfig, safetySettings);
            const resAI = hit.response.text();
            setSchedule(formatSchedule(resAI));
            setFormData({
                country: "",
                city: "",
                visitDate: "",
                activities: "",
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        generate();
    };

    return (
        <>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Rencana Perjalanan with AI</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                            Negara
                        </label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Masukkan nama kota"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            Kota
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Masukkan nama kota"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Waktu Kunjungan
                        </label>
                        <input
                            type="text"
                            id="visitDate"
                            name="visitDate"
                            value={formData.visitDate}
                            onChange={handleChange}
                            placeholder="Contoh : 3 Hari, 4 Minggu, 3 Bulan"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="activities" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferensi Aktivitas
                        </label>
                        <textarea
                            id="activities"
                            name="activities"
                            value={formData.activities}
                            onChange={handleChange}
                            placeholder="Contoh: Wisata alam, kuliner, museum, dll."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                        disabled={isLoading}
                    >
                        Kirim
                    </button>
                </form>
            </div>
            {isLoading ? <p className="text-center">Loading...</p> : <div dangerouslySetInnerHTML={{ __html: schedule }} className="w-[1024px] mx-auto my-10" />}
        </>
    );
}

export default Traveling;
