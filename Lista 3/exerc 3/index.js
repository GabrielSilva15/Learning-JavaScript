//Crie um novo projeto com uma página que tem um formulário para um objeto baseado em uma classe Transacao, com no mínimo os campos Descrição (texto) e Valor
// e um botão Adicionar que ao clicar adicione uma nova transação, mostrada em uma tabela (<table>). 
//Caso a transação seja com valor negativo (despesa), mostre o valor em vermelho, caso seja positivo (receita), mostre em verde. Ao final da tabela, mostre o total de saldo.


const desc=document.querySelector("#desc");
const valor=document.querySelector("#valor");
const addBtn=document.querySelector("#add");
const secTabela=document.querySelector("#tabela");
const table=document.querySelector('table');
let saldoTotal=0;
let saldoText=document.createElement('p');

class Transacao{
    constructor(desc,valor){
        this.desc=desc;
        this.valor=valor;
    }
}

addBtn.addEventListener('click',()=>{
    const tableElement=document.createElement('tr');
    const tableDesc=document.createElement('td');
    const tableValor=document.createElement('td');
    let novaTransacao=new Transacao(desc.value,valor.value);
    

    tableDesc.textContent=novaTransacao.desc;
    tableValor.textContent=novaTransacao.valor;
    if(novaTransacao.valor < 0){
        console.log(novaTransacao.valor);
        tableValor.style.color="red";
    }
    else if(novaTransacao.valor > 0){
        console.log(novaTransacao.valor);
        tableValor.style.color='green';
    }
    saldoTotal=Number(novaTransacao.valor) + Number(saldoTotal);
    saldoText.textContent=`Saldo: ${saldoTotal}`;
    tableElement.appendChild(tableDesc);
    tableElement.appendChild(tableValor);
    table.appendChild(tableElement);
    secTabela.appendChild(saldoText);
    



})