const num=document.querySelector('#num');
const separador=document.querySelector('#separador');
const btn=document.querySelector('button');
const container=document.querySelector('.container');
const p=document.createElement('p');
container.appendChild(p);

btn.addEventListener('click',()=>{
   let nums=num.value;
   let StringArray=[];
   StringArray=nums.split(separador.value);
    StringArray.forEach((numero)=>{
    let res=parseInt(numero);
   });
   let min=Math.min(...StringArray);
   let max=Math.max(...StringArray);
   p.innerHTML=`O menor número é ${min} e o maior número é ${max}`;
});