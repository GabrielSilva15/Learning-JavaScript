const btn_calcular=document.querySelector('button');


const calcularPotencia=(base,expoente)=>{
    return Math.pow(base,expoente)
};

const body=document.querySelector('body');
const div=document.createElement('div');

btn_calcular.addEventListener('click',()=>{
    const valueBase=document.querySelector('#base').value;
    const valueExpoente=document.querySelector('#expoente').value;
    const resul=calcularPotencia(valueBase,valueExpoente);
    div.innerHTML=resul;
    body.appendChild(div);
});