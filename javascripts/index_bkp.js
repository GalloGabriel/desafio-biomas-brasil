const elementosInicio = document.querySelector('#paginaInicial');
const mapaInterativo = document.querySelector('#mapaInterativo');
const loadingBox = document.querySelector('#loading');
const btnIniciar = document.querySelector('.iniciar-btn');
const comoJogarContainer = document.querySelector('#comoJogar');
const modalContent1 = document.querySelector("#modalContent1");
const modalContent2 = document.querySelector("#modalContent2");
let valorP = 0;
let getPrimeiroAcesso = localStorage.getItem(`primeiroAcesso`);
//Verificando e criando localStorage de primeiro acesso na página

//Se for o primeiro acesso do usuário na página:
if(!localStorage.getItem(`primeiroAcesso`)){
  localStorage.setItem(`primeiroAcesso`, true)
}

$('#btnInfo').click(function(){
  abreModalInfo();
  trocaAutomaticaModal();
})


$('.iniciar-btn').click(function(){
  //elementosInicio.style.display = 'none';
  $('#paginaInicial').css('display', 'none');
  chamaLoading('loading');

  if(getPrimeiroAcesso === 'true'){
    console.log("line 28")
    setTimeout(() => {
      console.log("line 30")
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
    console.log("line 43")
    setTimeout(() => {
      console.log("line 45")
      
      /*window.location.href = 'http://127.0.0.1:5501/mapa-interativo.html';*/
      loadingBox.style.display = 'none';
      $('.btnInfo').css('display', 'flex');
      $('.btnMenuSuperior').css('display', 'flex');
      $('.btnMenuInferior').css('display', 'flex');
      // interacaoMenu();
      switch (localStorage.getItem('paginaEmQueEsta')) {
        case 'paginaInicial':
            if(localStorage.getItem('paginaEmQueEsta') == 'paginaInicial'){
              
              $('#paginaInicial').css('display', 'none');
              $('#mapaInterativoElement').css('display', 'flex');
              $('#menuElement').css('display', 'none');
            
              localStorage.setItem('paginaEmQueEsta', 'mapaInterativo');
            }
            console.log("entrou no switch valor 1")
          break;
        case 'mapaInterativo':
      
            if(localStorage.getItem('paginaEmQueEsta') == 'mapaInterativo'){
              $('#mapaInterativo').css('display', 'none');
              $('#menuElement').css('display', 'flex');
      
              localStorage.setItem('paginaEmQueEsta', 'paginaInicial');
            }
            break;
          case 'menuQuiz':
      
          if(localStorage.getItem('paginaEmQueEsta') == 'menuQuiz'){
            $('#paginaInicial').css('display', 'none');
            $('#mapaInterativo').css('display', 'none');
            $('#mapaInterativoElement').css('display', 'flex');
            $('#menuElement').css('display', 'flex');
            
            localStorage.setItem('paginaEmQueEsta', 'paginaInicial');
          }
          break;
      
        default:
          
          break;
      }
    }, 2000);
  }
});

$('#exampleModalCenter').on('hide.bs.modal', function(e){
  if(getPrimeiroAcesso === 'true'){
    console.log("line 59")
    window.location.reload(true);
    }
  });

  if(getPrimeiroAcesso === 'true'){
    console.log("line 65")
    $('#botaoInicio2').css('display', 'none');
    $('#btnInfo').css('display', 'none');
  }else if(getPrimeiroAcesso === 'false'){
    console.log("line 69")
    $('#botaoInicio1').css('display', 'none');
    $('#btnInfo').css('display', 'flex');
    $('#btnConfig').css('display', 'flex');
  }

  $('#botaoAvancar').click(function(){
    mapaInterativo.style.display = 'none';
    chamaLoading('loading');
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
  console.log("chamou loading");
  loadingBox.style.display = 'flex';
  loadingBox.innerHTML = `
    <div class="loading-icon-container">
      <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/${element}.svg" alt="" class="loading-icon" />
    </div>
    `
    $('#btnInfo').css('display', 'none');
    $('.btnMenuSuperior').css('display', 'none');
    $('.btnMenuInferior').css('display', 'none');
}

function resetarJogo(){
  let storages = [
    "primeiroAcesso",
    "audioTime",
    "modifiedQuestoesBioma3",
    "modifiedQuestoesBioma1",
    "questoesStorageBioma5",
    "questoesCorretasBioma3",
    "cardFeito2",
    "cardFeito1",
    "parabens2",
    "cardFeito4",
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
    "questoesCorretasBioma4",
    "paginaEmQueEsta"
];

    storages.map((items)=>{
      localStorage.removeItem(items);
    });

    setTimeout(() => {
      window.location.href = "http://127.0.0.1:5501/index.html";
      // location.reload(true);
    }, 1000);

}

if(localStorage.getItem('paginaEmQueEsta') == null){

  localStorage.setItem('paginaEmQueEsta', 'paginaInicial');

}

function interacaoMenu(){

  switch (localStorage.getItem('paginaEmQueEsta')) {
    case 'paginaInicial':
        if(localStorage.getItem('paginaEmQueEsta') == 'paginaInicial'){
          
          $('#paginaInicial').css('display', 'none');
          $('#mapaInterativoElement').css('display', 'flex');
          $('#menuElement').css('display', 'none');
        
          localStorage.setItem('paginaEmQueEsta', 'mapaInterativo');
        }
        console.log("entrou no switch valor 1")
      break;
    case 'mapaInterativo':
  
        if(localStorage.getItem('paginaEmQueEsta') == 'mapaInterativo'){
          $('#mapaInterativo').css('display', 'none');
          $('#menuElement').css('display', 'flex');
  
          localStorage.setItem('paginaEmQueEsta', 'paginaInicial');
        }
        break;
      case 'menuQuiz':
  
      if(localStorage.getItem('paginaEmQueEsta') == 'menuQuiz'){
        $('#paginaInicial').css('display', 'none');
        $('#mapaInterativo').css('display', 'none');
        $('#mapaInterativoElement').css('display', 'flex');
        $('#menuElement').css('display', 'flex');
        
        localStorage.setItem('paginaEmQueEsta', 'paginaInicial');
      }
      break;
  
    default:
      
      break;
  }
}


if(localStorage.getItem('paginaEmQueEsta') == 'menuQuiz'){
  interacaoMenu();
}