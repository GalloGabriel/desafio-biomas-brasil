let indexComponent = document.querySelector("#indexComponent");

indexComponent.innerHTML = `
<div class="container container-conteudo" style="max-width: 1314px; height: 739px;">
<section id="loading">

</section>


<section id="comoJogar">
<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">

    <div class="modal-content" id="modalContent1">
      <img class="info-comoJogar-img" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/info-1.svg" alt="">

      <div class="infos1">

        <p>Somos <span style="font-weight: bold; color: #F0B323;">Bea e Zeca</span>, escoteiros mirins. Estamos aqui porque fomos convidados a participar de uma viagem pelo Brasil, a fim de conhecer as curiosidades e peculiaridades de cada bioma do nosso país. O que acha de vir com a gente nessa jornada e nos ajudar a conquistar a título de “<span style="font-weight: bold; color: #F0B323;">cidadão ambiental</span>”?</p>

      </div>

      <div class="indicador-conteudo">
        <div id="inputBox1" class="input-box"><div class="inner-circle"></div></div>
        <div id="inputBox2" class="input-box"></div>
      </div>

      <div class="icone-fechar">
        <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/bt_x1.svg" alt="" data-dismiss="modal">
      </div>
    </div>

    <div class="modal-content" id="modalContent2" style="display: none;">
      <img class="info-comoJogar-img" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/info-2.svg" alt="">

      <div class="infos2">

        <h3>Como jogar?</h3>

        <p><strong>É simples!</strong> Basta clicar em jogar e avançar pelos cards de cada bioma, respondendo corretamente cada pergunta do quiz. <br> <strong>Nosso objetivo é conquistar os três brasões. Para isto, você precisa nos ajudar a alcançar o mínimo de pontos em cada bioma:</strong></p>

        <div>
          <span><i class="fa fa-solid fa-check"></i></span>
          <span class="bioma-text-info"><span class="bioma-title-info">Terra</span>: mínimo 20 pts</span>
        </div>

        <div>
          <span><i class="fa fa-solid fa-check"></i></span>
          <span class="bioma-text-info"><span class="bioma-title-info">Oxigênio</span>: mínimo 40 pts</span>
        </div>

        <div>
          <span><i class="fa fa-solid fa-check"></i></span>
          <span class="bioma-text-info"><span class="bioma-title-info">Água</span>: mínimo 60 pts</span>
        </div>

      </div>

      <div class="indicador-conteudo">
        <div id="inputBox3" class="input-box"></div>
        <div id="inputBox4" class="input-box"><div class="inner-circle"></div></div>
      </div>

      <div class="icone-fechar">
        <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/bt_x1.svg" alt="" data-dismiss="modal">
      </div>
    </div>
  </div>
</div>
</section>


<!-- Seu conteúdo -->


  <!--Botões  -->
  <section id="btnInfo" class="btnInfo">

  </section>
   
  <section class="btnMenuSuperior" class="btnConfig-teste">

  </section> 

<section id="paginaInicial" class="pagina-inicial-container">

  <img class="logo-image" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/logo.svg" alt="">
  <img onmouseover="hoverImages(this, 'bt_iniciar-over')" onmouseout="tiraHover(this, 'bt_iniciar')" id="botaoInicio1" class="iniciar-btn" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/bt_iniciar.svg" alt="" data-toggle="modal" data-target="#exampleModalCenter">
  <img onmouseover="hoverImages(this, 'bt_iniciar-over')" onmouseout="tiraHover(this, 'bt_iniciar')" onclick="playMusica()" id="botaoInicio2" class="iniciar-btn" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/bt_iniciar.svg" alt="">


</section>

<section id="mapaInterativoElement" style="display: none;">

</section>

<section id="menuElement" style="display: none;">

</section>

<section id="comoJogar">
  <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">

      <div class="modal-content" id="modalContent1">
        <img class="info-comoJogar-img" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/info-1.svg" alt="">

        <div class="infos1">

          <p>Somos <span style="font-weight: bold; color: #F0B323;">Bea e Zeca</span>, escoteiros mirins. Estamos aqui porque fomos convidados a participar de uma viagem pelo Brasil, a fim de conhecer as curiosidades e peculiaridades de cada bioma do nosso país. O que acha de vir com a gente nessa jornada e nos ajudar a conquistar a título de “<span style="font-weight: bold; color: #F0B323;">cidadão ambiental</span>”?</p>

        </div>

        <div class="indicador-conteudo">
          <div id="inputBox1" class="input-box"><div class="inner-circle"></div></div>
          <div id="inputBox2" class="input-box"></div>
        </div>

        <div class="icone-fechar">
          <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/bt_x1.svg" alt="" data-dismiss="modal">
        </div>
      </div>

      <div class="modal-content" id="modalContent2" style="display: none;">
        <img class="info-comoJogar-img" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/info-2.svg" alt="">

        <div class="infos2">

          <h3>Como jogar?</h3>

          <p><strong>É simples!</strong> Basta clicar em jogar e avançar pelos cards de cada bioma, respondendo corretamente cada pergunta do quiz. <br> <strong>Nosso objetivo é conquistar os três brasões. Para isto, você precisa nos ajudar a alcançar o mínimo de pontos em cada bioma:</strong></p>

          <div>
            <span><i class="fa fa-solid fa-check"></i></span>
            <span class="bioma-text-info"><span class="bioma-title-info">Terra</span>: mínimo 20 pts</span>
          </div>

          <div>
            <span><i class="fa fa-solid fa-check"></i></span>
            <span class="bioma-text-info"><span class="bioma-title-info">Oxigênio</span>: mínimo 40 pts</span>
          </div>

          <div>
            <span><i class="fa fa-solid fa-check"></i></span>
            <span class="bioma-text-info"><span class="bioma-title-info">Água</span>: mínimo 60 pts</span>
          </div>

        </div>

        <div class="indicador-conteudo">
          <div id="inputBox3" class="input-box"></div>
          <div id="inputBox4" class="input-box"><div class="inner-circle"></div></div>
        </div>

        <div class="icone-fechar">
          <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/bt_x1.svg" alt="" data-dismiss="modal">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Button trigger modal som -->
<section class="pagina-inicial-container" id="triggerAudio" class="triggerAudio">

<!-- Conteúdo Javascript - arquivo: components/triggerAudio.js -->      

</section>

<section id="menuJogo">

</section>

<!-- Pagina em construção template (temporário) -->
<section id="paginaEmConstrucao">
  <div class="emContrucao-container">
    <h4>Essa página ainda não está disponível para este tamanho de tela. Por favor, tente em outro dispositivo.</h4>
  </div>
  <div class="image-emContrucao">
    <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/pagina-em-construcao.png" alt="">
  </div>
</section>

</div>
`