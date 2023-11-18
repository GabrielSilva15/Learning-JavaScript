// Crie um projeto com uma página contendo um campo de texto onde o usuário vai digitar uma temperatura em escala Celsius. O que deve ser feito:
// Crie duas funções, uma para converter a temperatura para Fahrenheit (converterFahrenheit) e outra para converter para Kelvin (converterKelvin).
// Crie um ouvinte de evento 'keyup' no campo de texto para atualizar os elementos do tipo span #temp-fahrenheit e #temp-kelvin com as temperaturas nas respectivas escalas à medida que o usuário digita um valor numérico.
// Caso o usuário não tenha digitado nada ou o valor seja inválido, o valor das temperaturas após a conversão deve ser um “-”, logo abaixo deve existir uma mensagem pedindo para o usuário digitar um valor.


const span_k=document.querySelector('#temp-kelvin');
const span_f=document.querySelector('#temp-fahrenheit');
const input=document.querySelector('input');
const container=document.querySelector('.container');


function celsiusKelvin(celsius){

    return Number(celsius) + 273.15;
}

function celsiusFahrenheit(celsius){

    return Number(celsius) * 9/5 + 32;
}


const p=document.createElement('p');
container.appendChild(p);



input.addEventListener('keyup',(e)=>{
    const num=(input.value);
    const Kelvin=celsiusKelvin(num);
    const Fahrenheit=celsiusFahrenheit(num);

    if(!num){
        span_k.innerHTML='Kelvin: -'; 
        span_f.innerHTML='Fahrenheit: -';
        p.innerHTML='Por Favor Insira um Valor Válido';
    }

    else if(!isNaN(num)){       
        span_k.innerHTML=`Kelvin: ${Kelvin}`; 
        span_f.innerHTML=`Fahrenheit: ${Fahrenheit}`;
        console.log(num);
        p.innerHTML=' ';
}
    else{
        span_k.innerHTML='Kelvin: -'; 
        span_f.innerHTML='Fahrenheit: -';
        p.innerHTML='Por Favor Insira um Valor Válido';
    }

});


