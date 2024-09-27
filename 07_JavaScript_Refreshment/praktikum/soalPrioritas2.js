// Soal Prioritas 2

//  1. Async - Await

function apiExample() {
    return new Promise((resolve, reject) => {
        const status = true;
        if (!status) {
            setTimeout(() => {
                resolve("Success");
            }, 1000);
        } else {
            setTimeout(() => {
                reject("Failed to Fetch");
            }, 2000);
        }
    });
}

async function fetchData() {
    try {
        const fetch = await apiExample();
        console.log(fetch);
    } catch (error) {
        console.log(error);
    }
}

// fetchData();

// 2. Classes

class Person {
    constructor(name, age) {
        (this.name = name), (this.age = age);
    }

    introduce() {
        return `Hello my name is ${this.name} and my age is ${this.age} years old`;
    }
}

const classPerson = new Person("Anggi", 12);

console.log(classPerson.introduce());
