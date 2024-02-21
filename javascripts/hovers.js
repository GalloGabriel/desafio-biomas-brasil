const menuJogo = document.querySelector("#menuJogo");

function hoverImages(e, url){
  /*e.setAttribute("src", `/assets/${url}.svg`);*/
  e.setAttribute("src", `https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/${url}.svg`)
}

function tiraHover(e, url){
  /*e.setAttribute("src", `/assets/${url}.svg`);*/
  e.setAttribute("src", `https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/${url}.svg`)
}

function goTo(link){
  /*window.location.href = `http://127.0.0.1:5501/quiz/${link}.html`;*/
  window.location.href = `http://127.0.0.1:5500/quiz/${link}.html`;
}