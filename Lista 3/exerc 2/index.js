const nomeCliente= document.querySelector('#nome');
const documentoCliente= document.querySelector('#documento');
const saldoCliente= document.querySelector('#saldo');
const lista=document.querySelector('ul');
const addBtn=document.querySelector('#add');
let ClienteArray=[];

class ClienteBanco{
    constructor(nome,documento,saldo){
        this.nome=nome;
        this.documento=documento;
        this.saldo=saldo;
    }
    
}



addBtn.addEventListener('click',()=>{
    let cliente= new ClienteBanco(nomeCliente.value,documentoCliente.value,saldoCliente.value);
    ClienteArray.push(cliente);
    
    lista.replaceChildren();
    
    
    for(let cliente of ClienteArray){
        const sacar=document.createElement('button');
        sacar.textContent='Sacar 100';
        const depositar=document.createElement('button');
        depositar.textContent='Depositar 100';
        
        const li=document.createElement('li');
        li.textContent =`Nome: ${cliente.nome} | Documento:${cliente.documento} | Saldo:${cliente.saldo}` ;

        sacar.addEventListener('click',()=>{
            cliente.saldo=Number(cliente.saldo) -100;
            console.log(cliente.nome, cliente.saldo);
            li.textContent =`Nome: ${cliente.nome} | Documento:${cliente.documento} | Saldo:${cliente.saldo}` ;
            li.appendChild(sacar);
            li.appendChild(depositar);
        });

        depositar.addEventListener('click',()=>{
            cliente.saldo=Number(cliente.saldo) + 100;
            console.log(cliente.nome, cliente.saldo);
            li.textContent =`Nome: ${cliente.nome} | Documento:${cliente.documento} | Saldo:${cliente.saldo}` ;
            li.appendChild(sacar);
            li.appendChild(depositar);
        });
        
        li.appendChild(sacar);
        li.appendChild(depositar);
        lista.appendChild(li);

     }

});





