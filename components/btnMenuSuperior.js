let btnMenuContainer = document.querySelectorAll(".btnMenuSuperior");
btnMenuContainer.forEach(e => {
     e.innerHTML = `
          <img onmouseover="hoverImages(this, 'btn-menu_som-over')" 
          onmouseout="tiraHover(this, 'btn-menu_som')" 
          onclick="playMusica()"
          src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/btn-menu_som.svg" 
          alt="" 
          id="btnSom"
          class="btnConfig-som" 
          data-toggle="modal" 
          data-target="#exampleModalSom">

          <div id="btnInfoMenu"><img onmouseover="hoverImages(this, 'btn-menu-info-over')" onmouseout="tiraHover(this, 'btn-menu-info')" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/btn-menu-info.svg" alt="" class="btnConfig-config" ></div>

          <div id="botaoStatusContainer"><img id="botaoMenuStatusJogo" title="status" onmouseover="hoverImages(this, 'btn-menu_perfil-off')" onmouseout="tiraHover(this, 'btn-menu_perfil-off')" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/btn-menu_perfil-off.svg" alt="" class="btnConfig-perfil" ></div>

          
          <!-- Modal Som-->
          <div class="modal fade modelSom" id="exampleModalSom" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
               <div class="modal-content" id="modalContent1">
               <img
               src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/ajustes_1.svg" 
               alt="" 
               data-toggle="modal" 
               data-target="#exampleModalSom"
               class="config-som-img">                  
                    <div class="icone-fechar margin-img-close">
                    <img 
                    onmouseover="hoverImages(this, 'bt_x1')" 
                    onmouseout="tiraHover(this, 'bt_x1')"
                    src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/bt_x1.svg" 
                    alt="" 
                    data-dismiss="modal">
                    </div>
                    <div class="progressBar-content">
                    <input type="range" class="form-range" id="barraVolume" min="0" max="1" step="0.01" value="0" oninput ="ajustarVolume(this.value), ajustarProgresso(this.value)">
                    <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                         <div id="barraDeProgresso" class="progress-bar-animated progress-bar-striped bg-warning" style="width: 100%">
                         </div>
                    </div>
                    </div>          
               </div>
          <!-- ==================================================================================================================================================== -->
               <audio id="musica" control autoplay loop>
                    <source src="/assets/musica/ambiente.mp3" type="audio/mpeg"> <!-- trocar o audio quando tiver pronto -->
                    Seu navegador não suporta áudio.
               </audio>
          <!-- ==================================================================================================================================================== -->
               </div>
          </div>
          </div>
     `;
})