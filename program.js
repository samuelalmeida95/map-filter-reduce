const dados = [
    "telefone",
    "email",
    "endereco",
    "salario R$",
    "nome",
    "carteira R$900"

]

//filtra toda string que tiver o valor "carteira" e retorna o valor 
const dadosFiltro = dados.filter(dado => dado.includes("carteira"))
console.log(dadosFiltro)

//retorna um novo array com base em um outro array passado
const saldoFiltro = dadosFiltro.map(dado => dado.replace("carteira", "você deve "))
console.log(saldoFiltro)

//acumulador, valorAtual, index, array
const tudo = saldoFiltro.reduce((acc, curr) => acc + curr)

console.log(tudo)