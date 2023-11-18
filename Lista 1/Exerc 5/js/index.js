// Crie um projeto com apenas um botão com rótulo “Simular”. 
// Esse botão deve estar associado a um evento que vai realizar uma simulação de um rolamento de dados comuns (com valores de 1 a 6) 1 milhão de vezes. 
// Ao final, deve mostrar na tela quantas vezes cada um dos números apareceu na simulação. 
// Use o método Math.random() pra gerar esse número entre 1 e 6, fazendo o arredondamento quando necessário.

const simular=document.querySelector('button');
const container=document.querySelector('.container');
const p=document.createElement('p');



simular.addEventListener('click',()=>{
    let num1=0;
    let num2=0;
    let num3=0;
    let num4=0;
    let num5=0;
    let num6=0;
    for(let i=1;i<=100;i++){
        let num=Math.round(Math.random()*(6-1) + 1);
        console.log(num);
        switch (num){
            case 1:
                num1++;
                break;
            case 2:
                num2++;
                break;
            case 3:
                num3++;
                break;
            case 4:
                num4++;
                break;
            case 5:
                num5++;
                break;  
            case 6:
                num6++;
                break;
            default:
                return 0;      
        }
    }
    p.innerHTML=`Numero 1 Apareceu: ${num1} vezes | Numero 2 Apareceu: ${num2} vezes | Numero 3 Apareceu: ${num3} vezes | Numero 4 Apareceu: ${num4} vezes | Numero 5 Apareceu: ${num5} vezes | Numero 6 Apareceu: ${num6} vezes`;
    container.appendChild(p);
})