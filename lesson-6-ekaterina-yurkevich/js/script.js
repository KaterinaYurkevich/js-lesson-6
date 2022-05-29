// 1)

let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];

let teamA = [];
let teamH = [];

function findSubstringInString(arr, substr, newArr) {
    arr.forEach((item) => {
        if (item.indexOf(substr) !== -1) {
            newArr.push(item);
        };
    });
    return newArr;
};

console.log(findSubstringInString(harryPotterTeam, "a", teamA));
console.log(findSubstringInString(harryPotterTeam, "H", teamH));

// 2)

let arr = [6, 3, "ten", 1, true, "4"];

let sumOfNumbers = 0;
let multiplyOfNumbers = 1;

arr.forEach((item) => {
    if (typeof(item) === "number") {
        sumOfNumbers += item;
        multiplyOfNumbers *= item;
    }
});

console.log("Исходный массив: ", arr);
console.log("Сумма чисел: ", sumOfNumbers);
console.log("Произведение чисел: ", multiplyOfNumbers);


// 3)

let numArr = [1, 3, 5, 7, 9, 11];

let squaresOfNumArr = [];

function getSquareOfNumber(arr) {
    arr.forEach(item => squaresOfNumArr
        .push(Math.pow(item, 2)));
    return squaresOfNumArr;
};

getSquareOfNumber(numArr);

console.log("Исходный массив: ", numArr);
console.log("Массив квадратов чисел: ", squaresOfNumArr);

// 4)

let students = [
    { name: 'Alexey', id: 123, marks: 9 },
    { name: 'Vitalik', id: 101, marks: 5 },
    { name: 'Tanya', id: 200, marks: 7 },
    { name: 'Sasha', id: 115, marks: 10 }
];

let findedStudent;

students.forEach(item => {
    if (+item.id === 101) {
        findedStudent = item;
    }
});

console.log(findedStudent);

// 5)

let javaScriptTypes = ["number", "null", "undefined", "string"];

javaScriptTypes.splice(javaScriptTypes.length, 0, "bigInt", "boolean", "symbol", "object");

console.log(javaScriptTypes);

// 6)

let parfume = ["Ex Nihilo", "Killian", "BDK", "Replica"];

console.log("Исходный массив: ", parfume);

parfume.splice(parfume.length - 1, 1, "Jo Malone");

console.log("Новый массив: ", parfume);