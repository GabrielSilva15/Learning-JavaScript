const input=document.querySelector('input');

const lista=document.querySelector('ul');

input.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){

        
            const li=document.createElement('li');
            li.innerHTML=input.value;
            lista.appendChild(li);
        
            const apagar= document.createElement('button');
            apagar.textContent='Apagar';
            li.appendChild(apagar);
        
            apagar.addEventListener('click',(event)=>{
                lista.removeChild(li);         
            });

    }
});
