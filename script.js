// DEFINISCO LA VARIABILE NOME E CREO LA RICHIESTA
const nome = prompt("Qual è il tuo nome?");
console.log(nome);
// DEFINISCO LA VARIABILE COGNOME E CREO LA RICHIESTA
const cognome = prompt("Qual è il tuo cognome?");
console.log(cognome);
// DEFINISCO LA VARIABILE COLORE E CREO LA RICHIESTA
const colore = prompt("Qual è il tuo colore preferito?");
console.log(colore);
// DEFINISCO LA VARIABILE PASSWORD SOMMANDO I VALORI
const password = nome + cognome + colore + "24";
console.log(password);
// MOSTRO IL RISULTATO IN HTML
document.getElementById("Pass").innerText = password;
