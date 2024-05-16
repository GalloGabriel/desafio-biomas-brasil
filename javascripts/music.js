//Inicia a musica sem volume
  ajustarVolume(0.5);
  ajustarProgresso(0.5);
  

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