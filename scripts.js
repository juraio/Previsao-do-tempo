

const key = "96a3ae270bbb1fb3b49cf1aa300d098c"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade") .innerHTML = dados.main.humidity + "%"

}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br$units=metric`).then(Response => Response.json())

    colocarDadosNaTela(dados)


}

function cliqueiNoBotao (){
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}