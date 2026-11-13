const obj = { nome: "Ana", idade: 30 };
const texto = JSON.stringify(obj);
console.log(typeof texto);
const volta = JSON.parse(texto);
console.log(typeof volta);
console.log(volta.nome);

const fs = require("fs");
fs.writeFileSync("teste.txt", "oi");
fs.writeFileSync("teste.txt", "tchau");
console.log(fs.readFileSync("teste.txt", "utf-8"));

const d = new Date(2026, 0, 1);
d.getDate() + 14;
console.log(d.getDate());
d.setDate(d.getDate() + 14);
console.log(d.getDate());

// console.log(typeof texto); = String
// console.log(typeof volta); = Object
// console.log(volta.nome); = String "Ana"
// console.log(fs.readFileSync("teste.txt", "utf-8")); = String "tchau"
// console.log(d.getDate()); = String "15"
// console.log(d.getDate()); = String "30"
