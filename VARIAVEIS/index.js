const nomeProduto = prompt("Qual o produto?");
const produtoPreco = Number(prompt("Qual o valor?"));

const desconto = produtoPreco - 1 ;


console.log(` O seu produto é ${nomeProduto} e atualmente custa ${produtoPreco} Reais, o gerente resolveu dar desconto de 1 real, agora custa ${desconto} reais`);


