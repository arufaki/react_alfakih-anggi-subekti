//Soal Prioritas 1

// 1. Variable dan Tipe Data

function swapValues(a, b) {
    // console.log(`sebelum di swap a = ${a} dan b = ${b}`);
    let temporory = a;
    a = b;
    b = temporory;

    // console.log(`sesudah swap a = ${a} dan b = ${b}`);
}

swapValues(5, 10);
// Penggunaan let disini digunakan karena variabel dapat berubah dan jika menggunakan var itu dapat kemungkinan terjadinya masalah ketika digunakan dalam lingkup yang lebih luas karena memiliki scooping level.

// Penggunaan const juga kurang cocok karena data tidak dapat diubah.

// 2. Destructuring

const reverseFirstTwo = ([a, b]) => {
    return [b, a];
};

// console.log(reverseFirstTwo([1, 2]));

// 3. Alur Kontrol atau (Control Flow)

function findLargest(number) {
    let largestArr = number[0];

    for (let i = 0; i < number.length; i++) {
        if (number[i] > largestArr) {
            largestArr = number[i];
        }
    }
    // console.log(`nilai terbesar dari argumen adalah ${largestArr}`);
}

findLargest([3, 2, 22, 20, 15, 6]);

// 4. Method

const calculator = {
    add: function add(a, b) {
        return a + b;
    },
    subtract: function subtract(a, b) {
        return a / b;
    },
    multiply: function multiply(a, b) {
        return a * b;
    },
    divide: function divide(a, b) {
        return a - b;
    },
};

// console.log(calculator.divide(8, 2));

// 5. Fungsi

function greetUser(name) {
    return `Selamat Pagi ${name}`;
}

const greetUserArrow = (name) => `Selamat Siang ${name}`;

console.log(greetUser("Anggi"));
console.log(greetUserArrow("Anggi"));
