//Inicia a musica sem volume
  ajustarVolume(0.03);
  ajustarProgresso(0.03);
  

  function ajustarVolume(volume) {
    var musica = document.getElementById("musica");
    musica.volume = volume;
  }

  function ajustarProgresso(volume) {
    var barraDeProgresso = document.getElementById("barraDeProgresso");
    barraDeProgresso.style.width = (volume * 100) + "%";
  }
  
// Verifique se o áudio não está reproduzindo
let musica = document.getElementById("musica");
if (musica.paused) {
  musica.play()
    .then(function() {
      console.log("Áudio reproduzido com sucesso!");
    })
    .catch(function(error) {
      console.log("Erro ao reproduzir áudio:", error);
    });
}

function playMusica(){
  musica.play()
}

if (localStorage.getItem('audioTime')) {
    musica.currentTime = parseFloat(localStorage.getItem('audioTime'));
}

if (localStorage.getItem('volume')) {
  musica.volume = parseFloat(localStorage.getItem('volume'));
  volume.value = musica.volume;
}

// Adiciona um ouvinte de eventos para salvar o tempo decorrido da música para nao ficar repeteco :]
musica.addEventListener('timeupdate', () => {
    localStorage.setItem('audioTime', musica.currentTime);
});
