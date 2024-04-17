let chave = 'cebcd482eda57fa9a6714c1c2ba91885'; 

async function buscarCidade(cidade) {
    

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric`;  

    
    let dados = await fetch(url).then(resposta => resposta.json());  

    enviaTela(dados);
   
}


function recuperarDado() {
    
    let cidade = document.querySelector(".input-cidade").value; 

    buscarCidade(cidade);
}

function enviaTela(dados){
   
    document.querySelector(".cidade").innerHTML = `Tempo em ${dados.name}`;  

    document.querySelector(".graus").innerHTML = `${Math.floor(dados.main.temp)}°C`; 

    document.querySelector(".icone").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 

    document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity}%`; 
}

