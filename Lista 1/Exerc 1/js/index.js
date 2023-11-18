const btn=document.querySelector('button');

function gerarNumero(){
    return Math.round(Math.random()*100 + 1);
}
const lista=document.createElement('ul');
const body=document.querySelector('body');



btn.addEventListener('click',()=>{
    const li=document.createElement('li');
    console.log(gerarNumero());
    li.textContent=gerarNumero();
    lista.appendChild(li);
    body.appendChild(lista);
});
