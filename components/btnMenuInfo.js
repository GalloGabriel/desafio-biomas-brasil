let botaoMenuInfoContainer = document.querySelectorAll('.btnInfo');
botaoMenuInfoContainer.forEach(e =>{
e.innerHTML = `
<div class="btn_disable"></div>
<img 
    id="btnMenuInfo" 
    onmouseover="hoverImages(this, 'btn-menu-info-over')" 
    onmouseout="tiraHover(this, 'btn-menu-info')" 
    onclick="playMusica()" 
    src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/btn-menu-info.svg" 
    alt="" 
    data-toggle="modal" 
    data-target="#exampleModalCenter">
`
})