/*recebe o input*/
var input = document.querySelector(".input")
/*recebe o input*/

function montaCard(name){

    var card = document.querySelector(".card")
  
    let dadosPersonagem = main(name)

    var Cgender 
    var Cstatus 


    /*descobre o genero e coloco o icone do sexo correto*/
    if(dadosPersonagem.gender=="Male"){
         Cgender = "<i class='bx bx-male-sign icon'></i>"
    }
    else if(dadosPersonagem.gender=="Female"){
        Cgender = "<i class='bx bx-female-sign icon'></i>"
    }
    else{
        Cgender = "<i class='bx bx-help-circle icon'></i>"
    }
    /*descobre o genero e coloco o icone do sexo correto*/


    /*descobre o genero e coloco o icone do sexo correto*/
    if(dadosPersonagem.status=="Alive"){
        Cstatus = "<i class='bx bxs-circle icon'></i>"
   }
   else if(dadosPersonagem.status=="Dead"){
        Cstatus = "<i class='bx bxs-circle icon-red'></i>"
   }
   else{
        Cstatus = "<i class='bx bx-help-circle icon'></i>"
   }
   /*descobre o genero e coloco o icone do sexo correto*/

    
    

    /*monta e jogo o card no HTML*/
    cardPronto =
    `<h2 class="nome">${dadosPersonagem.name}</h2>
    <img class="foto" src="${dadosPersonagem.image}" alt="">
    <div class="alinhaIcones">
    <p class="especie"><i class='bx bxs-user icon'></i>Species:<span class="info"> ${dadosPersonagem.species}</span></p>
    <p class="genero">${Cgender}Gender:<span class="info"> ${dadosPersonagem.gender}</span></p>
    <p class="status">${Cstatus}Status:<span class="info"> ${dadosPersonagem.status}</span></p>
    </div>
    <p class="status">Appearances in episodes:<span class="info"> ${dadosPersonagem.episode.length}</span></p>
    
    `

    card.innerHTML = cardPronto
    /*monta e jogo o card no HTML*/
}

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