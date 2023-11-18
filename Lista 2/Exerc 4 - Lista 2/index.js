// Crie um novo projeto com uma página que tenha 2 campos de texto com os rótulos Nome e Salário e 1 botão com o rótulo "Adicionar". 
// O usuário deve digitar esses valores e ao clicar em adicionar, deve ser criado um objeto com essas propriedades e valores e deve ser adicionado a um array. 
// Na sequência, deve mostrar na tela por meio de um elemento <li>.
// Deve ser exibido também quem ganha o maior salário e o total de salários pagos (utilize a função reduce).



const nome=document.querySelector('#nome');
const salario=document.querySelector('#salario');
const botao=document.querySelector('button');
const lista=document.querySelector('ul');
const body=document.querySelector('body');
const Funcionarios=[];
let maior=0;

let p=document.createElement('p');


botao.addEventListener('click', ()=>{
    let nomeFunc=nome.value;
    let salarioFunc=parseFloat(salario.value);

    let Funcionario={
        nome:nomeFunc,
        salario:salarioFunc,
    }

    Funcionarios.push(Funcionario);
    console.log(Funcionarios);

    
    // for(let i in Funcionarios){
    //     if(Funcionarios[i].salario > maior){
    //         maior=Funcionarios[i].salario;
    //         MaiorSalario=Funcionarios[i].nome;
    //     }
    // }

    let MaiorSalario=Funcionarios.reduce((ant,atual)=>{
        if(ant.salario > atual.salario){
            return ant;
        }
        return atual;
    });



   let li=document.createElement('li');
   li.textContent=`${nomeFunc}  ${salarioFunc}`;
   lista.appendChild(li);

    
        


        

    let total=Funcionarios.reduce((anterior,atual)=> anterior + atual.salario,0);
    p.textContent=`O maior salário pertence a ${MaiorSalario.nome} e a soma de todos os salarios é ${total} `;
    body.appendChild(p);

    
})


