const rendaAnual = parseFloat(prompt("Digite a sua renda anual:"));
const limiteImposto = 30000; // Altere o valor de acordo com a legislação fiscal.

if (rendaAnual > limiteImposto) {
    console.log("Você deve pagar impostos.");
} else {
    console.log("Você não precisa pagar impostos.");
}