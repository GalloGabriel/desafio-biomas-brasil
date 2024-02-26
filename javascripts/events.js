const tituloCuriosidades = document.querySelector('.titulo-curiosidades');
const nextContentContainer = document.querySelector('.next-content-container');
const textoCuriosidade = document.querySelector('.texto-curiosidade');
const nextContentItem = document.querySelectorAll('.next-content');
const BASE_URL_IMAGE = "https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/"

let imagesCuriosidades = new Image();
arraySrcImages = ["tela-amaz.png", ""]
imagesCuriosidades.src = `${BASE_URL_IMAGE}tela-pampas.png`;
imagesCuriosidades.onload = function (){
  $('.curiosidadesContainer').css("display", "flex")
}

// Definindo qual o caminho da URL atual
const { pathname } = window.location;

let arrayBiomas = [ 'amazonia', 'pantanal', 'cerrado', 'caatinga', 'mata-atlantica', 'pampas' ];
let arrayCuriosidadesBiomas = [ curiosidadesAmazonia, curiosidadesPantanal, curiosidadesCerrado, curiosidadesCaatinga, curiosidadesMataAtlantica, curiosidadesPampas ];

for (let i = 0; i < arrayBiomas.length + 1; i++) {
  if(pathname === `/quiz/${arrayBiomas[i]}.html`){

    // Troca automaticamente o conteudo das curiosidades dos biomas
    arrayCuriosidadesBiomas[i].forEach(
      (element, i) => {
      setTimeout(() => {
        tituloCuriosidades.innerHTML = element.titulo;
        nextContentContainer.innerHTML = element.indicador;
        textoCuriosidade.innerHTML = element.curiosidade;
        
      }, 5000 * i);
      
    });
    
  }
  
}


