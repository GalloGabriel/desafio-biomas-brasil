let botaoMenuInfoContainer = document.querySelectorAll('.btnInfo');
botaoMenuInfoContainer.forEach(e =>{
e.innerHTML = `
<img id="btnMenuInfo" onmouseover="hoverImages(this, 'btn-menu-info-over')" onmouseout="tiraHover(this, 'btn-menu-info')" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/btn-menu-info.svg" alt="" data-toggle="modal" data-target="#exampleModalCenter">
`
})


