const pontuacaoMenu = document.querySelectorAll('.pontuacao-menu');
const eachCardImage = document.querySelectorAll('.cards-image');
const parabensImage = document.querySelector('.parabens-img');
const statusImage = document.querySelector('.status-img');
const contentQtdePerguntasStatus = document.querySelector('#contentQtdePerguntasStatus');
const contentQtdeCardsStatus = document.querySelector('#contentQtdeCardsStatus');
const voceSabiaImg = document.querySelector('#voceSabiaImg');
const voceSabiaTitulo = document.querySelector('.tituloSaibaMais');
const voceSabiaConteudo = document.querySelector('.conteudo-voce-sabia');
const nextSaibaMaisContainer = document.querySelector('.next-saibaMais-container');
const BASE_IMG_URL = 'https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets';
const disabledCard = `pointer-events: none; cursor: not-allowed;`;
const pontosConquistadosResumo = document.querySelector('#pontosConquistadosResumo');
const cardsConcluidosResumo = document.querySelector('#cardsConcluidosResumo');

// Define array que irá conter as qtdes de questoes corretas de cada bloco
let arrQtdeQuestoesCorretas = [];
let cardsCompletos = 0;

//Define array que irá conter a qtde de Cards Feitos
let arrCardsFeitos = [];

for (let i = 1; i < 6 + 1; i++) {
  let getQtdeQuestoesCertas;
  let qtdeQuestoesCorretas;
  if(!localStorage.getItem(`questoesCorretasBioma${i}`)){
    localStorage.setItem(`questoesCorretasBioma${i}`, 0);
    getQtdeQuestoesCertas = localStorage.getItem(`questoesCorretasBioma${i}`);
    qtdeQuestoesCorretas = parseInt(getQtdeQuestoesCertas);
    arrQtdeQuestoesCorretas.push(qtdeQuestoesCorretas);
  }else{
    getQtdeQuestoesCertas = localStorage.getItem(`questoesCorretasBioma${i}`);
    qtdeQuestoesCorretas = parseInt(getQtdeQuestoesCertas);
    arrQtdeQuestoesCorretas.push(qtdeQuestoesCorretas);
  }

  if(!localStorage.getItem(`parabens${i}`)){
    localStorage.setItem(`parabens${i}`, false)
  }
  
  let getCardsFeitos = localStorage.getItem(`cardFeito${i}`);
  let qtdeCardsFeitos = parseInt(getCardsFeitos);
  arrCardsFeitos.push(qtdeCardsFeitos);
}

let arrPontuacaoMenu = Array.from(pontuacaoMenu);
let arrEachCardImage = Array.from(eachCardImage);
let arrSrcImages = [ 'c2-amaz', 'c2-pantanal', 'c2-cerrado', 'c2-caatinga', 'c2-mata', 'c2-pampas' ];
let somaPontuacao = arrQtdeQuestoesCorretas.reduce((a,b) => a + b, 0);
let somaCardsFeitos = arrCardsFeitos.reduce((a,b) => a + b, 0);

/* Atualiza cards completos */
for (let i = 0; i < arrQtdeQuestoesCorretas.length; i++) {
  if(arrQtdeQuestoesCorretas[i] === 10){
    cardsCompletos++;
  }
}

let arrQtdeTotalQuestoes = [quizAmazonia.length, quizCaatinga.length, quizCerrado.length, quizMataAtlantica.length, quizPampas.length, quizPantanal.length];

let qtdeTotalQuestoes = arrQtdeTotalQuestoes.reduce((a,b) => a + b, 0)

if(!localStorage.getItem('resumo')){
  localStorage.setItem('resumo', false)
}

/* Trigger Modal de Resumo */
if(somaCardsFeitos === 6 && somaPontuacao < qtdeTotalQuestoes && localStorage.getItem('resumo') !== 'true'){
  pontosConquistadosResumo.innerHTML = somaPontuacao;
  cardsConcluidosResumo.innerHTML = cardsCompletos;

  setTimeout(()=>{

    if( $('#modalStatus').hasClass("show") ){
      $('#modalStatus').on('hide.bs.modal', function(e){
        $('#modalResumo').modal('toggle');
      });
    }

    else if( $('#modalParabens').hasClass("show") ){
      $('#modalParabens').on('hide.bs.modal', function(e){
        setTimeout(()=>{
          if($('#modalStatus').hasClass("show")){
            $('#modalStatus').on('hide.bs.modal', function(e){
              $('#modalResumo').modal('toggle');
            });
          }else{
            $('#modalResumo').modal('toggle');
          }
        }, 300)
      })
    }

    else{
      $('#modalResumo').modal('toggle');
    }
  }, 500);
  localStorage.setItem('resumo', true);  
}

for (let i = 0; i < 6; i++){
  arrPontuacaoMenu[i].innerHTML = `${arrQtdeQuestoesCorretas[i]}/10`;

  if(arrQtdeQuestoesCorretas[i] === 10 && localStorage.getItem(`parabens${i+1}`) !== 'true'){
    arrEachCardImage[i].src = `${BASE_IMG_URL}/${arrSrcImages[i]}.svg`;
    arrEachCardImage[i].style = disabledCard;
    localStorage.setItem(`parabens${i+1}`, true);
    parabensImage.innerHTML = `<img src="${BASE_IMG_URL}/parabens${i+1}.svg" alt="">`;
    $('#modalParabens').modal('toggle');
  }else if(arrQtdeQuestoesCorretas[i] === 10){
    arrEachCardImage[i].src = `${BASE_IMG_URL}/${arrSrcImages[i]}.svg`;
    arrEachCardImage[i].style = disabledCard;
  }
}

let arrPontuacoesPossiveis = [20, 40, 60];

for (let i = 0; i < arrPontuacoesPossiveis.length; i++) {
  if(!localStorage.getItem(`status${i+1}`)){
    localStorage.setItem(`status${i+1}`, false)
  }
}

for (let i = 0; i < arrPontuacoesPossiveis.length; i++) {
  if(somaPontuacao >= arrPontuacoesPossiveis[i] && localStorage.getItem(`status${i+1}`) !== 'true'){
    statusImage.innerHTML = `<img src="${BASE_IMG_URL}/status${i+1}.svg" alt="">`;
    contentQtdePerguntasStatus.innerHTML = `${somaPontuacao}/60`;
    contentQtdeCardsStatus.innerHTML = `${cardsCompletos}/6`;
    localStorage.setItem(`status${i+1}`, true);

    setTimeout(()=>{
      if( $('#modalParabens').hasClass("show") ){
        $('#modalParabens').on('hide.bs.modal', function(e){
          $('#modalStatus').modal('toggle');
        })
      }else{
        $('#modalStatus').modal('toggle');
      }
    }, 300)
  }
}
/* SAIBA MAIS  */

localStorage.setItem('saibaMais', false);

let arraySaibaMais = [ saibaMaisTerra, saibaMaisOxigenio, saibaMaisAgua ];
let nextItemsArray = [];

$('.botao-acessar-dicas').click(function(){
  localStorage.setItem('saibaMais', true)

  $('#modalStatus').modal('hide');

  for (let i = 0; i < arrPontuacoesPossiveis.length; i++){
    if(somaPontuacao === arrPontuacoesPossiveis[i]){

      voceSabiaImg.innerHTML = `<img src="${BASE_IMG_URL}/voce-sabia${i+1}.svg" alt="">`;

      arraySaibaMais[i].map((element, i) => {
        let nextItem = criaNextSaibaMais();
        nextItemsArray.push(nextItem);

        nextItemsArray.forEach((item)=>{
          nextSaibaMaisContainer.appendChild(item);
        });

        const filledNext = document.querySelectorAll('.filled-inicio');

        filledNext.forEach((e)=>{
          setTimeout(()=>{
            e.classList.remove("filled-inicio")
            e.classList.add("nextSaibaMais-filled")
          }, 8000 * i)
          
        })

        setTimeout(()=>{
          voceSabiaTitulo.innerHTML = element.titulo;
          voceSabiaConteudo.innerHTML = element.conteudo;
          
        }, 8000 * i)
      })

      $('#modalSaibaMais').modal('toggle');
    }
  }
  
});


//Verifica pontuação para ir para Tela Final
$('#modalStatus').on('hide.bs.modal', function(e){
  if(somaPontuacao === qtdeTotalQuestoes && localStorage.getItem('saibaMais') === 'false'){
    setTimeout(()=>{
      // window.location.href = 'http://127.0.0.1:5500/tela-final.html'
      window.location.href = 'http://127.0.0.1:5501/tela-final.html'
    }, 1000)
  }
});


$('#modalSaibaMais').on('hide.bs.modal', function(e){
  localStorage.setItem('saibaMais', false)
  if(somaPontuacao === qtdeTotalQuestoes){
    setTimeout(()=>{
      // window.location.href = 'http://127.0.0.1:5500/tela-final.html'
      window.location.href = 'http://127.0.0.1:5501/tela-final.html'
    }, 1000)
  }
});