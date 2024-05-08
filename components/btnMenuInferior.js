let btnMenuContainerInferior = document.querySelector("#btnMenuInferior");

btnMenuContainerInferior.innerHTML = `

<div><img onmouseover="hoverImages(this, 'btn-menu_baixar-over')" onmouseout="tiraHover(this, 'btn-menu_baixar')" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/btn-menu_baixar.svg" alt="" class="btnConfig-baixar" ></div>
<div>
    <img 
        onmouseover="hoverImages(this, 'btn-menu_reiniciar-over')"  
        onmouseout="tiraHover(this, 'btn-menu_reiniciar')" 
        src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/btn-menu_reiniciar.svg" 
        alt="" 
        class="btnConfig-reiniciar"
        data-toggle="modal" 
        data-target="#modalReiniciar"></div>
<div><img onmouseover="hoverImages(this, 'btn-menu_cert-off')" onmouseout="tiraHover(this, 'btn-menu_cert-off')" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/btn-menu_cert-off.svg" alt="" class="btnConfig-cert" ></div>`;