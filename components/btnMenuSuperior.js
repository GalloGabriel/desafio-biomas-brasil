let btnMenuContainer = document.querySelector("#btnMenuSuperior");

btnMenuContainer.innerHTML = `
<img onmouseover="hoverImages(this, 'btn-menu_som-over')" 
     onmouseout="tiraHover(this, 'btn-menu_som')" 
     src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/btn-menu_som.svg" 
     alt="" 
     class="btnConfig-som" 
     data-toggle="modal" 
     data-target="#exampleModal">
<div><img onmouseover="hoverImages(this, 'btn-menu_config-over')" onmouseout="tiraHover(this, 'btn-menu_config')" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/btn-menu_config.svg" alt="" class="btnConfig-config" ></div>
<div><img onmouseover="hoverImages(this, 'btn-menu_perfil-off')" onmouseout="tiraHover(this, 'btn-menu_perfil-off')" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/btn-menu_perfil-off.svg" alt="" class="btnConfig-perfil" ></div>
`;