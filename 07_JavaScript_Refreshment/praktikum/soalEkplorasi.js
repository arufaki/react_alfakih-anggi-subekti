const btnGenerate = document.querySelector(".generate"),
    text = document.querySelector(".typograph");

const quotes = [
    "Kualitas kode yang baik adalah cermin dari pengembang yang baik.",
    "Desain bukan hanya apa yang terlihat dan terasa. Desain adalah bagaimana cara kerjanya.",
    "Setiap bug adalah kesempatan untuk belajar dan menjadi lebih baik.",
    "Pengalaman pengguna yang baik adalah hasil dari kolaborasi yang baik.",
    "Satu baris kode yang bersih lebih baik daripada sepuluh baris kode yang rumit.",
    "Jadilah developer yang selalu belajar; teknologi selalu berkembang.",
    "Keberhasilan proyek tidak hanya ditentukan oleh kodenya, tetapi juga oleh komunikasi tim.",
    "Front-end adalah jembatan antara pengguna dan teknologi; buatlah jembatan itu kuat.",
    "Desain responsif adalah kunci untuk menjangkau lebih banyak pengguna.",
    "Sebuah aplikasi yang hebat tidak hanya memenuhi kebutuhan pengguna, tetapi juga mengejutkan mereka.",
];

// SOAL EKSPLORASI NO 1 Manipulasi DOM

text.textContent = quotes[0];
btnGenerate.addEventListener("click", () => (text.textContent = quotes[Math.floor(Math.random() * quotes.length)]));

//
//

//SOAL EKSPLORASI NO 2 ASYNC-AWAIT DENGAN DOM

function apiQuotes() {
    return new Promise((resolve, reject) => {
        const status = true;
        if (status) {
            setTimeout(() => {
                resolve(quotes);
            }, 1000);
        } else {
            setTimeout(() => {
                reject("failed to Fetch");
            }, 1000);
        }
    });
}

const hitAPI = async () => {
    try {
        const consume = await apiQuotes();
        text.textContent = consume[Math.floor(Math.random() * consume.length)];
        btnGenerate.addEventListener("click", () => (text.textContent = consume[Math.floor(Math.random() * consume.length)]));
    } catch (error) {
        text.textContent = error;
    }
};

hitAPI();
