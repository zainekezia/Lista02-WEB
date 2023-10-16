const numero1 = parseInt(prompt("Digite o primeiro número:"));
const numero2 = parseInt(prompt("Digite o segundo número:"));

if (numero1 % numero2 === 0) {
    console.log(`${numero1} é divisível por ${numero2}.`);
} else {
    console.log(`${numero1} não é divisível por ${numero2}.`);
}