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