const nota = parseFloat(prompt("Digite a nota do aluno:"));
const limiteAprovacao = 6.0;

if (nota >= limiteAprovacao) {
    console.log("O aluno foi aprovado.");
} else {
    console.log("O aluno foi reprovado.");
}