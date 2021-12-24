var input = document.querySelector(".input")


function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}


function main(name){
    let dadosBrutos = fazGet(`https://rickandmortyapi.com/api/character/?name=${name}`)
    var dados = JSON.parse(dadosBrutos)

    return dados.results[0]
}


function montaCard(name){
    var card = document.querySelector(".card")
  
    let dadosPersonagem = main(name)

    cardPronto =
    `<h2 class="nome">${dadosPersonagem.name}</h2>
    <img class="foto" src="${dadosPersonagem.image}" alt="">
    <p class="especie">Species:<span class="info"> ${dadosPersonagem.species}</span></p>
    <p class="genero">Gender:<span class="info"> ${dadosPersonagem.gender}</span></p>
    <p class="status">Status:<span class="info"> ${dadosPersonagem.status}</span></p>
    <p class="status">Appearances in episodes:<span class="info"> ${dadosPersonagem.episode.length}</span></p>`

    card.innerHTML = cardPronto
}/*montaCard()*/

function Getname(){
    let input = document.querySelector(".input")

    let name = input.value

    console.log(name)

    montaCard(name)




}   

   input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        Getname()
        ;
    }
});