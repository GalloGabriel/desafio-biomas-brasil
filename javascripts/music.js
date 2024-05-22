let musica = document.getElementById("musica");

//Inicia a musica com volume baixo
ajustarVolume(0.0);
ajustarProgresso(0.03);

//ajustar volume
function ajustarVolume(volume) {
  var musica = document.getElementById("musica");
  musica.volume = volume;
}
//ajustar a barra para ficar com o mesmo volume
function ajustarProgresso(volume) {
  var barraDeProgresso = document.getElementById("barraDeProgresso");
  barraDeProgresso.style.width = (volume * 100) + "%";
}
// Verifique se o áudio não está reproduzindo
if (musica.paused) {
  musica.play()
    .then(function() { })
    .catch(function(error) { });
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
