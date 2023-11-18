const inptTexto=document.querySelector('#text');
const inptData=document.querySelector('#data');
const btn=document.querySelector('button');
const lista=document.querySelector('ul');

let array=[];

function criarObj(nome,data){
    this.nome=nome;
    this.dataMarked=data;  
}

function formatarData(data){
    let newDate=new Date(data);
    return `${newDate.getHours()}:${newDate.getMinutes()}, ${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
}

btn.addEventListener('click',()=>{
    let data=inptData.value;
    let texto=inptTexto.value

    let obj=new criarObj(texto,data);
    array.push(obj);
    array.sort(function(a,b){
        return new Date(a.dataMarked) - new Date(b.dataMarked);
    });
    
    lista.replaceChildren();

    for(let eventos of array){
        let li=document.createElement('li');
        li.innerText=`${eventos.nome} ${formatarData(eventos.dataMarked)}`;
        lista.appendChild(li);
      

        
    };
    
});







