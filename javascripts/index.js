const elementosInicio = document.querySelector('#paginaInicial');
const mapaInterativo = document.querySelector('#mapaInterativo');
const loadingBox = document.querySelector('#loading');
const btnIniciar = document.querySelector('.iniciar-btn');
const comoJogarContainer = document.querySelector('#comoJogar');
const modalContent1 = document.querySelector("#modalContent1");
const modalContent2 = document.querySelector("#modalContent2");

//Verificando e criando localStorage de primeiro acesso na página

//Se for o primeiro acesso do usuário na página:
if(!localStorage.getItem(`primeiroAcesso`)){
  localStorage.setItem(`primeiroAcesso`, true)
}

let getPrimeiroAcesso = localStorage.getItem(`primeiroAcesso`);

$('#btnInfo').click(function(){
  abreModalInfo();
  trocaAutomaticaModal();
})


$('.iniciar-btn').click(function(){
  //elementosInicio.style.display = 'none';
  $('#paginaInicial').css('display', 'none');
  chamaLoading('loading');

  if(getPrimeiroAcesso === 'true'){
    setTimeout(() => {
      //mapaInterativo.style.display = 'flex';
      $('#paginaInicial').css('display', 'flex');
      loadingBox.style.display = 'none';
      abreModalInfo();
      trocaAutomaticaModal();
      $('#btnInfo').css('display', 'flex');
      //window.location.reload(true);
    }, 3000);
    localStorage.setItem(`primeiroAcesso`, false);
  }
  
  if(getPrimeiroAcesso === 'false'){
    setTimeout(() => {
      /*window.location.href = 'http://127.0.0.1:5501/mapa-interativo.html';*/
      $('#indexComponent').css('display', 'none');
      $('#mapaInterativoElement').css('display', 'flex');
      loadingBox.style.display = 'none';
      $('#btnInfo').css('display', 'flex');
    }, 3000);
  }
  
})

$('#exampleModalCenter').on('hide.bs.modal', function(e){
  
  if(getPrimeiroAcesso === 'true'){
    window.location.reload(true);
  }
});

if(getPrimeiroAcesso === 'true'){
  $('#botaoInicio2').css('display', 'none');
  $('#btnInfo').css('display', 'none');
}else if(getPrimeiroAcesso === 'false'){
  $('#botaoInicio1').css('display', 'none');
  $('#btnInfo').css('display', 'flex');
  $('#btnConfig').css('display', 'flex');
}


$('#botaoAvancar').click(function(){
  mapaInterativo.style.display = 'none';
  chamaLoading('loading');

  setTimeout(() => {
    mapaInterativo.style.display = 'none';
    /*window.location.href = 'http://127.0.0.1:5501/menu.html';*/
    window.location.href = 'http://127.0.0.1:5500/menu.html'
    $('#btnInfo').css('display', 'flex');
  }, 3000);
})

// Chamando Quiz
function showQuiz(curiosidadesContainer, quizContainer){
  let curiosidadesCont = document.querySelector(`.${curiosidadesContainer}`);
  let quizCont = document.querySelector(`.${quizContainer}`)

  curiosidadesCont.style.display = 'none';
  //chamaLoading(loadingElement);

  setTimeout(() => {
    loadingBox.style.display = 'none';
    quizCont.style.display = 'flex';
  }, 500)
}


//Alternando modal de "Como Jogar?"

$('#inputBox3').click(function(){
  modalContent1.style.display = 'flex';
  modalContent2.style.display = 'none';
});
$('#inputBox2').click(function(){
  modalContent1.style.display = 'none';
  modalContent2.style.display = 'flex';
});


// Funções

function abreModalInfo(){
  comoJogarContainer.style.display = 'block';
  modalContent1.style.display = 'flex';
  modalContent2.style.display = 'none';
}

function trocaAutomaticaModal(){
  setTimeout(() => {
    modalContent1.style.display = 'none';
    modalContent2.style = `display: flex; transition: ease 0.5s`;
  }, 13000);
}

function chamaLoading(element){
  loadingBox.style.display = 'flex';
  loadingBox.innerHTML = `
    <div class="loading-icon-container">
      <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/${element}.svg" alt="" class="loading-icon" />
    </div>
    `
  $('#btnInfo').css('display', 'none');
}


function resetarJogo(){
  let storages = [
    "modifiedQuestoesBioma3",
    "modifiedQuestoesBioma1",
    "questoesStorageBioma5",
    "questoesCorretasBioma3",
    "cardFeito2",
    "cardFeito1",
    "parabens2",
    "cardFeito4",
    "primeiroAcesso",
    "status2",
    "currentBloco",
    "parabens5",
    "modifiedQuestoesBioma6",
    "status3",
    "questoesStorageBioma6",
    "questoesStorageBioma4",
    "status1",
    "parabens1",
    "questoesStorageBioma1",
    "cardFeito5",
    "questoesCorretasBioma6",
    "resumo",
    "questoesCorretasBioma1",
    "cardFeito6",
    "modifiedQuestoesBioma5",
    "questoesCorretasBioma5",
    "questoesStorageBioma3",
    "modifiedQuestoesBioma4",
    "modifiedQuestoesBioma2",
    "cardFeito3",
    "questoesCorretasBioma2",
    "saibaMais",
    "parabens4",
    "parabens6",
    "parabens3",
    "questoesStorageBioma2",
    "questoesCorretasBioma4"
];

    storages.map((items)=>{
      localStorage.removeItem(items);
    });

    setTimeout(() => {
      window.location.href = "http://127.0.0.1:5500/index.html";
    }, 1000);

}