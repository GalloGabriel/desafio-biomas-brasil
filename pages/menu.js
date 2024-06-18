let menuElement = document.querySelector("#menuElement");

menuElement.innerHTML = `
    <!-- Seu conteúdo -->

    <section id="menuJogo">
      <div class="menuContainer">
        <img class="escolhaTexto" src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/escolha.svg" alt="Escolha um dos biomas e inicie o desafio! Veja quantos pontos você precisa para conseguir cada brasão. Terra: mínimo 20 pontos. Oxigênio: mínimo 40 pontos. Água: mínimo 60 pontos.">
  
        <div class="cards-biomas">
          <div class="eachCard" id="cardAmazonia">
            <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/c1-amaz.svg" alt="Amazônia" class="cards-image" onclick="goTo('amazonia')" onmouseover="hoverImages(this, 'c1_amaz-over')" onmouseout="tiraHover(this, 'c1-amaz')">
            <span class="pontuacao-menu"></span>
          </div>
  
          <div class="eachCard" id="cardPantanal">
            <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/c1-pantanal.svg" alt="Pantanal" class="cards-image" onclick="goTo('pantanal')" onmouseover="hoverImages(this, 'c1_pantanal-over')" onmouseout="tiraHover(this, 'c1-pantanal')">
            <span class="pontuacao-menu"></span>
          </div>
  
          <div class="eachCard" id="cardCerrado">
            <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/c1-cerrado.svg" alt="Cerrado" class="cards-image" onclick="goTo('cerrado')" onmouseover="hoverImages(this, 'c1_cerrado-over')" onmouseout="tiraHover(this, 'c1-cerrado')">
            <span class="pontuacao-menu"></span>
          </div>
  
          <div class="eachCard" id="cardCaatinga">
            <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/c1-caatinga.svg" alt="Caatinga" class="cards-image" onclick="goTo('caatinga')" onmouseover="hoverImages(this, 'c1_caatinga-over')" onmouseout="tiraHover(this, 'c1-caatinga')">
            <span class="pontuacao-menu"></span>
          </div>
  
          <div class="eachCard" id="cardMata">
            <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/c1-mata.svg" alt="Mata Atlântica" class="cards-image" onclick="goTo('mata-atlantica')" onmouseover="hoverImages(this, 'c1_mata-over')" onmouseout="tiraHover(this, 'c1-mata')">
            <span class="pontuacao-menu"></span>
          </div>
          
          <div class="eachCard" id="cardPampas">
            <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/c1-pampas.svg" alt="Pampas" class="cards-image" onclick="goTo('pampas')" onmouseover="hoverImages(this, 'c1_pampas-over')" onmouseout="tiraHover(this, 'c1-pampas')">
            <span class="pontuacao-menu"></span>
          </div>
        </div>
      </div>
    </section>
  
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

    <!-- Modal Parabéns -->
    <div class="modal fade" id="modalParabens" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
  
        <div class="modal-content" id="modalContent1" style="margin-top: 130px;">
  
          <div class="parabens-img" style="width: 100%;">
            
          </div>
  
          <div class="icone-fechar" id="fecharModalParabens">
            <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/bt_x1.svg" alt="" data-dismiss="modal">
          </div>
          
        </div>
  
      </div>
    </div>
  
  
    <!-- Modal Status -->
    <div class="modal fade" id="modalStatus" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
  
        <div class="modal-content" id="modalContent1" style="margin-top: 130px;">
  
          <div class="status-img">
            
          </div>
  
          <div class="icone-fechar" id="fecharModalStatus">
            <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/bt_x1.svg" alt="" data-dismiss="modal">
          </div>
  
          <div class="qtde-perguntas-status" style="bottom: 295px; left: 288px;">
            <span id="contentQtdePerguntasStatus"></span>
          </div>
  
          <div class="qtde-cards-status" style="bottom: 215px; left: 315px;">
            <span id="contentQtdeCardsStatus"></span>
          </div>
          
        </div>
  
      </div>
    </div>
  
  
    <!-- Modal Saiba Mais -->
    <div class="modal fade" id="modalSaibaMais" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
  
        <div class="modal-content" id="modalContent1" style="margin-top: 130px;">
  
          <div class="status-img" id="voceSabiaImg">
            
          </div>
  
          <div class="icone-fechar" id="fecharModalStatus">
            <img src="https://apps.univesp.br/_testes/desafio-biomas-do-brasil/assets/bt_x1.svg" alt="" data-dismiss="modal">
          </div>
  
          <div class="titulo-saiba-mais posicionamento-voce-sabia">
            <h3 class="tituloSaibaMais"></h3>
          </div>
  
          <div class="conteudo-voce-sabia posicionamento-voce-sabia">
            
          </div>
  
          <div class="next-saibaMais-container">
            
          </div>
          
        </div>
  
      </div>
    </div>


    <!-- Modal Resumo -->
    <div class="modal fade" id="modalResumo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content" style="background-color: #009bbd; align-items: normal; margin-top: 130px;">
          <div class="modal-header">
            <h5 style="color: #fff; font-weight: bold; font-size: 24px;" class="modal-title" id="exampleModalLabel">Confira sua jornada até o momento!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span style="color: #fff;" aria-hidden="true">&times;</span>
            </button>
          </div>
          <div style="color: #fff; font-size: 18px; font-weight: bold;" class="modal-body">
            <p>Pontos conquistados: <span id="pontosConquistadosResumo"></span></p>
            <p>Cards concluídos: <span id="cardsConcluidosResumo"></span></p>
            
            <p>Continue completando os cards para ganhar mais pontos e conquistar o titulo de Cidadão Ambiental!</p>
          </div>
        </div>
      </div>
    </div>
`