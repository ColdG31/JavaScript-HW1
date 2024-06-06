// Operatori aritmetici
// Exercitiul 1
let x = 15;
let y = 2;
let addition = x + y;

console.log("Rezultatul adunarii este: " + x + " + " + y + " = " + addition);

// Exercitiul 2
let z = 10;
let mean = (x + y + z) / 3;

console.log("Media numerelor este: " + "(" + x + " + " + y + " + " + z + ")" + " / 3" + " = " + mean);

// Operatori de atribuire
// Exercitiul 1
x = x + 5;

console.log("Rezultatul exercitiului 1 este: " + x);

// Exercitiul 2
y = y + 10;
y += 2;

console.log("Rezultatul exercitiului 2 este: " + y);

// Operatori de comparare
// Exercitiul 1
let A = 5;
let B = 3;

if (A > B) {
  console.log("A este mai mare decat B: " + A + " > " + B);
} else {
  // puteam folosi si else if (B >= A)
  console.log("B este mai mare sau egal cu A: " + B + " >= " + A);
}

// Exercitiul 2
let varsta = 23;

if (varsta >= 18) {
  console.log("Persoana este majora si are varsta de " + varsta + " ani");
} else {
  console.log("Persoana nu este majora si are varsta de " + varsta + " ani");
}

// Operatori logici
// Exercitiul 1
let C = 99;
let D = 33;

if (C % 3 === 0 && D % 3 === 0) {
  console.log(C + " si " + D + " sunt divizibile cu 3");
} else {
  console.log(C + " si " + D + " nu sunt divizibile cu 3");
}

// Exercitiul 2
let k = 69;

if (!(k % 2 === 1)) {
  console.log(k + " este divizibil cu 2");
} else {
  console.log(k + " nu este divizibil cu 2");
}

// Conditionale si bucle
// Exercitiul 1
let numar = 1;

console.log("Primele 10 numere sunt: ");

do {
  console.log(numar);
  numar++;
} while (numar < 11);

// Exercitiul 2
let pare = 0;

console.log("Numerele pare intre 0 si 20 sunt: ");

for (let i = pare; i <= 20; i += 2) {
  console.log(i);
}

// // Alta solutie pentru exercitiul 2
// for (let i = pare; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Exercitiul 3
let numar1 = parseInt(prompt("Introduceti primul numar"), 10); // baza 10
let numar2 = parseInt(prompt("Introduceti al doilea numar"), 10); // baza 10

console.log("Numerele intre " + numar1 + " si " + numar2 + " sunt: ");

if (numar2 > numar1) {
  for (let i = numar1 + 1; i < numar2; i++) {
    console.log(i);
  }
} else if (numar1 > numar2) {
  for (let i = numar2 + 1; i < numar1; i++) {
    console.log(i);
  }
} else if (numar1 === numar2) {
  console.log("Numerele sunt egale");
}

// Exericitiul 4
let inmultire = parseInt(prompt("Introduceti un numar pentru tabla inmultirii"), 10);

console.log("Table inmultirii pentru numarul " + inmultire + " este:");

for (let i = 1; i <= 10; i++) {
  console.log(inmultire + " x " + i + " = " + inmultire * i);
}
