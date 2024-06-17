let botaoVoltar = document.querySelectorAll('.btnVoltar');
botaoVoltar.forEach(e =>{
e.innerHTML = `
<img 
    id="btnMenuBack" 
    src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/back.png" 
    onmouseover="hoverImagesPng(this, 'back-over')"  
    onmouseout="tiraHoverPng(this, 'back')" 
    onclick="voltar()"
    alt="">
`
})