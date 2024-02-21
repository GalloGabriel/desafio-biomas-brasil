let criaGabarito = function(iconeFeedback, topicoGabarito, respostaGabarito){
  let itemGabarito = document.createElement("tr");
  
  itemGabarito.innerHTML = `
    <td><img class="feedback-img" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/${iconeFeedback}.svg" alt=""></td>
    <td>${topicoGabarito}</td>
    <td>${respostaGabarito}</td>
  `;

  return itemGabarito;
}