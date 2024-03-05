const tituloCuriosidades = document.querySelector('.titulo-curiosidades');
const nextContentContainer = document.querySelector('.next-content-container');
const textoCuriosidade = document.querySelector('.texto-curiosidade');
const nextContentItem = document.querySelectorAll('.next-content');
const BASE_URL_IMAGE = "https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/";


let arraySrcImages = ["tela-amaz.png", "tela-pantanal.png", "tela-cerrado.png", "tela-caatinga.png", "tela-mata.png", "tela-pampas.png"];

// Definindo qual o caminho da URL atual
const { pathname } = window.location;

let arrayBiomas = [ 'amazonia', 'pantanal', 'cerrado', 'caatinga', 'mata-atlantica', 'pampas' ];
let arrayCuriosidadesBiomas = [ curiosidadesAmazonia, curiosidadesPantanal, curiosidadesCerrado, curiosidadesCaatinga, curiosidadesMataAtlantica, curiosidadesPampas ];

for (let i = 0; i < arrayBiomas.length + 1; i++) {
  
  if(pathname === `/quiz/${arrayBiomas[i]}.html`){

    chamaLoading(`loading-${arrayBiomas[i]}`)

    let imagesCuriosidades = new Image();
    imagesCuriosidades.src = `${BASE_URL_IMAGE}${arraySrcImages[i]}`;
    
    
    imagesCuriosidades.onload = function (){

      loadingBox.style.display = 'none';

      $('.curiosidadesContainer').css("display", "flex");
      
      /*
      // Troca automaticamente o conteudo das curiosidades dos biomas
      arrayCuriosidadesBiomas[i].forEach(
        (element, i) => {
        setTimeout(() => {
          tituloCuriosidades.innerHTML = element.titulo;
          nextContentContainer.innerHTML = element.indicador;
          textoCuriosidade.innerHTML = element.curiosidade;
          
        }, 5000 * i);
        
      }); 
      */
      
    }
    
    
  }
  
}

//Troca info do Carrosel de curiosidades nas setas do teclado
$(document).bind('keyup', function(e) {
  if(e.which == 39){
      $('.carousel').carousel('next');
  }
  else if(e.which == 37){
      $('.carousel').carousel('prev');
  }
});