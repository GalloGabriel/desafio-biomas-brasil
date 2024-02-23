const tituloQuestao = document.querySelector('#tituloQuestao');
const alternativasContainer = document.querySelector('#alternativasContainer');
const contagemDinamica = document.querySelector('.contagem-dinamica');
let styleAlternativaSelecionada;

// Criando variável que armazenará o numero do bloco atual
let currentBloco;

let arrQuestoes = [];

let arrayBlocos = [ quizAmazonia, quizPantanal, quizCerrado, quizCaatinga, quizMataAtlantica, quizPampas ];
let arrayCoresBiomas = [ '#018043', '#afbc30', '#F0B323', '#EA7C2C', '#99425f', '#7E6341' ]

for (let i = 0; i < arrayBiomas.length + 1; i++){
  
  if(pathname === `/quiz/${arrayBiomas[i]}.html`){
    currentBloco = `${i+1}`;
    
    styleAlternativaSelecionada = `background-color: ${arrayCoresBiomas[i]}; color: #FFF; border: 2px solid ${arrayCoresBiomas[i]};`;
    arrayBlocos[i].map((questao)=>{
      arrQuestoes.push(questao);
    })
  }

}

// Define de qual localStorage iremos trazer os dados quando a página é carregada
let inicioQuestoesStorage;

// Se ainda não existir localStorage, cria 'questoesStorage' com os dados do arrQuestoes e traz os dados dele
if(!localStorage.getItem(`questoesStorageBioma${currentBloco}`)){
  localStorage.setItem(`questoesStorageBioma${currentBloco}`, JSON.stringify(arrQuestoes));
  inicioQuestoesStorage = localStorage.getItem(`questoesStorageBioma${currentBloco}`);
}

// Se já existir localStorage 'questoesStorage' traz os dados dele
else if(localStorage.getItem(`questoesStorageBioma${currentBloco}`) && !localStorage.getItem(`modifiedQuestoesBioma${currentBloco}`)){
  inicioQuestoesStorage = localStorage.getItem(`questoesStorageBioma${currentBloco}`);
}

// Se existir localStorage com as questoes modificadas (exercício já foi feito ao menos uma vez), traz dados de 'modifiedQuestoes'
else{
  inicioQuestoesStorage = localStorage.getItem(`modifiedQuestoesBioma${currentBloco}`);
}

// Armazena questoes trazidas do localStorage
let questoesStorage = JSON.parse(inicioQuestoesStorage);

// Cria Array que irá armazenar questões nao feitas ou questões que foram marcadas erradas
let currentQuestoes = [];

// Mapeia questões do localStorage e armazena questões erradas ou que não foram feitas
questoesStorage.map((item)=>{

    currentQuestoes.push(item);
  
});



tituloQuestao.innerHTML = currentQuestoes[0].titulo;
contagemDinamica.innerHTML = currentQuestoes[0].questaoId;

let numAlternativa = 0;

let copiaSemEmbaralhar = [...currentQuestoes[0].alternativas];
currentQuestoes[0].alternativas.sort((a,b) => a.ordem - b.ordem).map((alternativas) => {

  numAlternativa++

  let alternativasContent = criaAlternativas(alternativas.questaoCorreta, currentQuestoes[0].numeros[numAlternativa - 1].alternativaId, currentQuestoes[0].numeros[numAlternativa - 1].alternativaId, alternativas.questaoText)

  alternativasContainer.appendChild(alternativasContent)

})


// Definindo variáveis
let click = 0;
let inputsChecked = [];
let questoesCorretas = 0;
const radioButtons = document.querySelectorAll('input[name="alternativas"]');
let divAlternativa = document.querySelectorAll(".alternativas-item");
let textoLabel = document.querySelectorAll(".texto-label");
const styleAlternativasNaoSelecionadas = `background-color: #FFF; color: #000; border: 3px solid #000;`;

let arrChecked = Array.from(radioButtons);
let arrDivQuestao = Array.from(divAlternativa);

for (let i = 0; i < arrChecked.length; i++) {
  arrChecked[i].addEventListener('change', function(){

    if(arrChecked[i].checked){

      switch(i){
        case 0:
          arrDivQuestao[0].style = styleAlternativaSelecionada;
          arrDivQuestao[1].style = styleAlternativasNaoSelecionadas;
          arrDivQuestao[2].style = styleAlternativasNaoSelecionadas;
          arrDivQuestao[3].style = styleAlternativasNaoSelecionadas;
          break;

        case 1:
          arrDivQuestao[1].style = styleAlternativaSelecionada;
          arrDivQuestao[0].style = styleAlternativasNaoSelecionadas;
          arrDivQuestao[2].style = styleAlternativasNaoSelecionadas;
          arrDivQuestao[3].style = styleAlternativasNaoSelecionadas;
          break;

        case 2:
          arrDivQuestao[2].style = styleAlternativaSelecionada;
          arrDivQuestao[0].style = styleAlternativasNaoSelecionadas;
          arrDivQuestao[1].style = styleAlternativasNaoSelecionadas;
          arrDivQuestao[3].style = styleAlternativasNaoSelecionadas;
          break;

        case 3:
          arrDivQuestao[3].style = styleAlternativaSelecionada;
          arrDivQuestao[0].style = styleAlternativasNaoSelecionadas;
          arrDivQuestao[1].style = styleAlternativasNaoSelecionadas;
          arrDivQuestao[2].style = styleAlternativasNaoSelecionadas;
          break;
      }
      
    }
  })    
}

let arrayModifiedQuestoes = [];


function chamaProximaQuestao(evt){

  // Define inputsChecked como um Array vazio
  inputsChecked.splice([]);

  // Se alguma alternativa estiver selecionada alimenta inputsChecked
  arrChecked.map((items)=>{
    if(items.checked){
      inputsChecked.push(items.checked)
    }
  })


  // Se NÃO houver alguma alternativa selecionada
  if(inputsChecked.length === 0){
    evt.preventDefault();
  }

  // Se houver alguma alternativa selecionada
  else{

    // Aimenta qtde de click
    click++;

    for (let i = 0; i < radioButtons.length; i++){

      if(radioButtons[i].checked){

        if(radioButtons[i].value === 'true'){
          questoesCorretas++;
          currentQuestoes[click - 1].questaoFeitaCorreta = 'true';
        }else{
          currentQuestoes[click - 1].questaoFeitaCorreta = 'false';
        }

        radioButtons[i].checked = false;
        arrDivQuestao[i].style = styleAlternativasNaoSelecionadas;

        let modifiedQuestoes = [
          {
            "questaoId": currentQuestoes[click - 1].questaoId,
            "titulo": currentQuestoes[click - 1].titulo,
            "questaoFeitaCorreta": currentQuestoes[click - 1].questaoFeitaCorreta,

            "numeros": [
              {"alternativaId": 1},
              {"alternativaId": 2},
              {"alternativaId": 3},
              {"alternativaId": 4},
            ],

            "alternativas":[
              {
                "ordem": Math.floor(Math.random() * 1000000),
                "alternativaId": 1,
                "questaoCorreta": currentQuestoes[click - 1].alternativas[0].questaoCorreta,
                "questaoText": currentQuestoes[click - 1].alternativas[0].questaoText,

              },
        
              {
                "ordem": Math.floor(Math.random() * 1000000),
                "alternativaId": 2,
                "questaoCorreta": currentQuestoes[click - 1].alternativas[1].questaoCorreta,
                "questaoText": currentQuestoes[click - 1].alternativas[1].questaoText,
              },
        
              {
                "ordem": Math.floor(Math.random() * 1000000),
                "alternativaId": 3,
                "questaoCorreta": currentQuestoes[click - 1].alternativas[2].questaoCorreta,
                "questaoText": currentQuestoes[click - 1].alternativas[2].questaoText,
              },
              
              {
                "ordem": Math.floor(Math.random() * 1000000),
                "alternativaId": 3,
                "questaoCorreta": currentQuestoes[click - 1].alternativas[3].questaoCorreta,
                "questaoText": currentQuestoes[click - 1].alternativas[3].questaoText,
              }
            ]
          }
        ]

        arrayModifiedQuestoes.push(...modifiedQuestoes);

      }

    }


    //Chama a proxima questão até os objetos acabarem
    console.log(currentQuestoes.length)
    if(click < currentQuestoes.length){
      embaralhaQuestao(click);

      /*
      if(click === currentQuestoes.length - 1){
        let contagemContainer = document.querySelector('.contagem-questoes');
        contagemContainer.style.left = '303px';
      }
      */

      //Atualizando o titulo da questao
      tituloQuestao.innerHTML = currentQuestoes[click].titulo;

      //Atualizando alternativas da questao
      for (let i = 0; i < currentQuestoes[click].alternativas.length; i++) {
        
        textoLabel[i].innerHTML = currentQuestoes[click].alternativas[i].questaoText;
        contagemDinamica.innerHTML = currentQuestoes[click].questaoId;
        radioButtons[i].value = currentQuestoes[click].alternativas[i].questaoCorreta;
        
      }
    }

    // Quando objetos acabarem
    if(click === currentQuestoes.length){
      localStorage.setItem(`questoesCorretasBioma${currentBloco}`, questoesCorretas);
      localStorage.setItem(`modifiedQuestoesBioma${currentBloco}`, JSON.stringify(arrayModifiedQuestoes));
      localStorage.setItem('currentBloco', currentBloco);
      /*window.location.href = 'http://127.0.0.1:5501/gabarito.html';*/
      window.location.href = 'http://127.0.0.1:5500/gabarito.html'
    }

  }
  
}



const botaoAvancar = document.querySelector('#botaoResponder');
botaoAvancar.addEventListener('click', chamaProximaQuestao);



function embaralhaQuestao(n){
  currentQuestoes[n].alternativas.sort((a,b) => a.ordem - b.ordem);
}