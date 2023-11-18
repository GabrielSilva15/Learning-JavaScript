const gasolina=document.querySelector('#ipt-gaso');
const alcool=document.querySelector('#ipt-alcool');
const body=document.querySelector('body');
const calcularMelhorCombustivel=(gasolina,alcool)=>{
    const calculo=parseFloat(alcool/gasolina);
    if(calculo < 0.7 ){
        return 1;
    }
    return 0;
}

const btn=document.querySelector('button');


btn.addEventListener('click',()=>{
    if(calcularMelhorCombustivel(gasolina.value,alcool.value) === 1){
        const textMelhorCombustivel=document.createTextNode('O alcool é a melhor opção no momento');
        body.appendChild(textMelhorCombustivel);
    }
    else if(calcularMelhorCombustivel(gasolina.value,alcool.value) === 0){
        const textMelhorCombustivel=document.createTextNode('O alcool é a melhor opção no momento');
        body.appendChild(textMelhorCombustivel);
    }
   
});