$(document).ready(function(){
  $('#modalGabarito').modal('toggle');
});

$('#modalGabarito').on('hide.bs.modal', function(e){
  /*window.location.href = 'http://127.0.0.1:5501/menu.html';*/
  window.location.href = 'http://127.0.0.1:5500/menu.html'
});


const currentQuiz = localStorage.getItem('currentBloco');
const tituloTopico = document.querySelector('.thConteudo');
const tableBody = document.querySelector('#bodyTable');
const textoBarraPontuacao = document.querySelector('#textoBarraPontuacao');

let currentQuestoes;
let nameBiomaGabarito;

let arrayBiomasGabarito = [ 'Amazônia', 'Pantanal', 'Cerrado', 'Caatinga', 'Mata Atlântica', 'Pampas' ];

for (let i = 1; i < arrayBiomasGabarito.length + 1; i++) {
  if(currentQuiz === `${i}`){
    currentQuestoes = i;
    nameBiomaGabarito = arrayBiomasGabarito[i-1]
  }
}

console.log(currentQuestoes);
console.log(nameBiomaGabarito);

const getQtdeQuestoesCertas = localStorage.getItem(`questoesCorretasBioma${currentQuestoes}`);
let qtdeQuestoesCorretas = JSON.parse(getQtdeQuestoesCertas);
let questoesCorretas = JSON.stringify(qtdeQuestoesCorretas);


textoBarraPontuacao.innerHTML = `Você acertou ${questoesCorretas}/10`;
tituloTopico.innerHTML = `Bioma: ${nameBiomaGabarito}`;

const getInicioQuestoesStorage = localStorage.getItem(`questoesStorageBioma${currentQuestoes}`);
let inicioQuestoesStorageGabarito = JSON.parse(getInicioQuestoesStorage);

const getModifiedQuestoesStorage = localStorage.getItem(`modifiedQuestoesBioma${currentQuestoes}`);
let modifiedQuestoesStorage = JSON.parse(getModifiedQuestoesStorage);

//Defininco array que armazena os icones certos e errados
let arrIcones = [];

//alimenta array de icones de acordo com os acertos ou erros do usuário
modifiedQuestoesStorage.map((item)=>{
  if(item.questaoFeitaCorreta === 'true'){
    let itemsObject = {
      "icone": "feedback-cer"
    };
    arrIcones.push(itemsObject)
  }else{
    let itemsObject = {
      "icone": "feedback-err"
    };
    arrIcones.push(itemsObject)
  }
})

console.log(arrIcones)


// Renderizando informações do gabarito de acordo com os acertos ou erros do usuário
for (let i = 0; i < inicioQuestoesStorageGabarito.length; i++) {

  if(arrIcones[i].icone === "feedback-cer"){
    let itemGabarito = criaGabarito(arrIcones[i].icone, inicioQuestoesStorageGabarito[i].topico, inicioQuestoesStorageGabarito[i].alternativas[0].questaoText);

    tableBody.appendChild(itemGabarito);

  }else if(arrIcones[i].icone === "feedback-err"){
    let itemGabarito = criaGabarito(arrIcones[i].icone, inicioQuestoesStorageGabarito[i].topico, 'Esta questão você não acertou, mas pode refazer.');

    tableBody.appendChild(itemGabarito);
  }
  
}