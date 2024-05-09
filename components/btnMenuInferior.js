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
<div><img onmouseover="hoverImages(this, 'btn-menu_cert-off')" onmouseout="tiraHover(this, 'btn-menu_cert-off')" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/btn-menu_cert-off.svg" alt="" class="btnConfig-cert" ></div>

<!-- Modal Som-->
<section id="modalBtnReiniciar">
  <div class="modal fade modelSom" id="modalReiniciar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-content btnReiniciar" id="modalContent1">
          <img
          src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/reiniciar.svg" 
          alt="" 
          data-toggle="modal" 
          data-target="#modalReiniciar"
          class="btnReiniciarJogo"> 
          
            <div class="btnSimNao">
              
              <img
              onmouseover="hoverImages(this, 'bt_sim-over')"  
              onmouseout="tiraHover(this, 'bt_sim')" 
              src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/bt_sim.svg" 
              alt="" 
              data-toggle="modal" 
              data-target="#modalReiniciar"
              class="btnReiniciar-width"
              onclick="resetarJogo()">     
                            
              <img
              onmouseover="hoverImages(this, 'bt_nao-over')"  
              onmouseout="tiraHover(this, 'bt_nao')" 
              src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/bt_nao.svg" 
              alt="" 
              data-toggle="modal" 
              data-target="#modalReiniciar"
              class="btnReiniciar-width">                  
    
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;