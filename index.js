/*
O que o JavaScript precisa fazer? 
Pegar os valores colocados nos inputs, fazer a conta matemática e imprimir o resultado no HTML
*/


let diasTrabalhados = document.getElementById('dias'); //uso nas duas funções
const horaDiaria = 8; //uso nas duas funções


const calcularSalarioFinal = () => {
    let salarioHoraIndex = document.getElementById('salario_hora'); //mudei pra index porque nao sabia se eu podia setar 
    let salarioFinal = 0;

    salarioFinal = (salarioHoraIndex.value * horaDiaria) * diasTrabalhados.value;
    let resultadoSalarioFinal = document.getElementById('resultado_salario_final');
    resultadoSalarioFinal.innerHTML = `R$ ${salarioFinal}`;
}

//Essa função tá cuidando da hora.HTML
const calcularSalarioPorHora = () => {
    let salarioTotal = document.getElementById('salario_total')
    let salarioHora = (salarioTotal.value / diasTrabalhados.value) / horaDiaria

    let resultadoSalarioHora = document.getElementById('resultado_salario_hora');
    resultadoSalarioHora.innerHTML = `R$ ${salarioHora}`;   
}

