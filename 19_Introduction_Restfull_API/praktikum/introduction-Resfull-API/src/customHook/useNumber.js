export default function useNumber(value) {
    const handleNumber = () => {
        const randomNumber = Math.floor(Math.random() * value);
        console.log(randomNumber);
    };

    return {
        handleNumber,
    };
}
