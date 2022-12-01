$(document).ready(function(){
    $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active')
      $('body').toggleClass('lock')
    })
  });
  document.body.onload = function() {
    setTimeout(function(){
      var preloader = document.getElementById("loading")
      if( !preloader.classList.add('done'))
      {
        preloader.classList.add('done')
      }
    }, 1000)
  }