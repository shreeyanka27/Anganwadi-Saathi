$(document).ready(function () {

  $('.fa-bars').click(function () {
    $(this).toggleClass('fa-times');
    $('.nav').toggleClass('nav-toggle');
  });

  $(window).on('load scroll', function () {

    $('.fa-bars').removeClass('fa-times');
    $('.nav').removeClass('nav-toggle');

    if ($(window).scrollTop() > 10) {
      $('header').addClass('header-active');
    } else {
      $('header').removeClass('header-active');
    }

  })
  $('.facility').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });

});


var feild = document.querySelector('textarea');
var backUp = feild.getAttribute('placeholder');
var btn = document.querySelector('.btn');
var clear = document.getElementById('clear')

feild.onfocus = function () {
  this.setAttribute('placeholder', '');
  this.style.borderColor = '#333';
  btn.style.display = 'block'
}

feild.onblur = function () {
  this.setAttribute('placeholder', backUp);
  this.style.borderColor = '#aaa'
}

clear.onclick = function () {
  btn.style.display = 'none';
  feild.value = '';
}