localStorage.setItem('firstTelaFinal', true);
setTimeout(()=>{
  let timeLeft = 10;
  let RedirectTimer = setInterval(()=>{
    if(timeLeft <= 0){
      clearInterval(RedirectTimer);
    } else{
      $('#timeLeftSpan').html(timeLeft)
    }
  
    timeLeft -= 1;
  }, 1000);

  $('.alert').show();

  setTimeout(()=>{
    $(".alert").alert('close')
  }, 11000);
  
}, 10000);


setTimeout(()=>{
  /*window.location.href = 'http://127.0.0.1:5501/menu.html';*/
  // window.location.href = 'http://127.0.0.1:5500/menu.html'
  
  // window.location.href = 'http://127.0.0.1:5500/index.html'
  window.location.href = 'http://127.0.0.1:5501/index.html'
}, 21500)

