const input=document.querySelector('input');
const lista=document.querySelector('ul');
const Filmes= [ 'Piratas do Caribe','Clube de Luta','Mario','Superman','Batman','Eu sou a lenda','O último homem'];

input.addEventListener('keyup',(e)=>{
    let ver=e.target.value;

    let result = Filmes.filter((filme)=>filme.toLowerCase().includes(ver.toLowerCase()) ? true : false);
    
    lista.innerHTML='';
    result.forEach((film)=>{
        let li=document.createElement('li');
        li.textContent=film;
        lista.appendChild(li);
    });
});


// const input=document.querySelector('input');
// const lista=document.querySelector('ul');
// const Filmes= [ 'Piratas do Caribe','Clube de Luta','Mario','Superman','Batman','Eu sou a lenda','O último homem'];

// input.addEventListener('keyup',(e)=>{
//     let ver=e.target.value;

//     let result = Filmes.filter((filme)=>{
//         let res = filme.toLowerCase(); 
//         if(res.includes(ver.toLowerCase())){
//             return true;
//         }
//         return false;
        
//     });
//     lista.innerHTML='';
//     result.forEach((film)=>{
//         let li=document.createElement('li');
//         li.textContent=film;
//         lista.appendChild(li);
//     });
// });
