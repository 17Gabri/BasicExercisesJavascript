
// Exercise 1
console.warn("Exercise 1");

let myName = "Gabri";
console.log(myName);

// Exercise 2
console.warn("Exercise 2");

let age = 28;
console.log(age);

// Exercise 3
console.warn("Exercise 3");

let ignaciAge = 32;
let ageDiff = ignaciAge - age;
console.log(ageDiff);

// Exercise 4
console.warn("Exercise 4");

if (age > 21) {
    console.log("Older than 21")
} else {
    console.log("Younger than 21")
}

// Exercise 1/Array
console.warn("Exercise 1/Array");

let names = ["Juan", "Bartolo", "Manolo", "Pepe"];
names.sort();

console.log(names[0]);
console.log(names[names.length - 1]);

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Exercise 2/Array
console.warn("Exercise 2/Array");

let edadClase = [24, 21, 20, 26, 22];
edadClase.sort();
for (let i = 0; i < edadClase.length; i++) {
    console.log(edadClase[i]);
    if (edadClase[i] % 2 == 0) {
        console.log(edadClase[i]);
    }
}


// Exercise 3/Array
console.warn("Exercise 3/Array");

function numeroBajo() {
    let numbsTres = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
    let minimNumber = Math.min.apply(null, numbsTres);
    console.log(minimNumber);
}



// Exercise 4/Array
console.warn("Exercise 4/Array");

function numeroAlto() {
    let numbsCuatro = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
    let maxNumber = Math.max.apply(null, numbsCuatro);
    console.log(maxNumber);
}
// Exercise 5/Array
console.warn("Exercise 5/Array");

function ejercicioCinco() {
    let numbsCinco = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
    let i = 2;
    console.log(numbsCinco[i]);
}

// Exercise 6/Array
console.warn("Exercise 6/Array");

function ejercicioSeis() {
    var elementos = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 100, 33, 23, 12, 99, 100];
    var repetidos = [];
    var temporal = [];

    elementos.forEach((value, index) => {
        temporal = Object.assign([], elementos);
        temporal.splice(index, 1);
        if (temporal.indexOf(value) != -1 && repetidos.indexOf(value) == -1) repetidos.push(value);
    });
    console.log(repetidos);
}

// Exercise 7/Array
console.warn("Exercise 7/Array");

function ejercicioSiete() {
    let myColor = ["Red", "Green", "White", "Black"];
    console.log(myColor.join());
}

// Exercise 1/String
console.warn("Exercise 1/String");

console.log("32443".split("").reverse().join(""));


// Exercise 2/String
console.warn("Exercise 2/String");



console.log("webmaster".split("").sort().join(""));


// Exercise 3/String
console.warn("Exercise 3/String");

console.log("principe de persia".replace(/\b[a-z]/g, c => c.toUpperCase()));


// Exercise 4/String
console.warn("Exercise 4/String");

function longestWord(s) {
    let longWord = ""
    let words = s.replace(",", " ").split(" "); //replace usado para eliminar "," de las palabras.
    words.forEach(function (word) {
        if (word.length > longWord.length) {
            longWord = word
        };
    });
    return longWord
};

console.log(longestWord("Tutorial de desarrollo web"));











