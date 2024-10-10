const iframeVideos = Array.from(document.querySelectorAll('.iframeVideo'));
const imgIconeFechar = Array.from(document.querySelectorAll('.img-icone-fechar'));

for (let i = 0; i < iframeVideos.length; i++) {
  imgIconeFechar[i].addEventListener('click', () => {
    let url = iframeVideos[i].src;
    iframeVideos[i].setAttribute('src', '');
    iframeVideos[i].setAttribute('src', url);
  })
}