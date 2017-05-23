window.addEventListener('scroll', () => {

// Animating headers
  let wScroll = this.pageYOffset;
    // var wScroll = $(this).scrollTop();

  let logo = document.querySelector('.logo')
  logo.style.transform = 'translate(0px, '+ wScroll /2 +'%)'

  let backbird = document.querySelector('.back-bird')
  backbird.style.transform = 'translate(0px, '+ wScroll /4 +'%)'

  let forebird = document.querySelector('.fore-bird')
  forebird.style.transform = 'translate(0px, -'+ wScroll /256 +'%)'


// Landing Elements
  // 1.2 = animation triggers when element is 20% in view on screen
  // let clothespics = document.querySelector('.clothes-pics').scrollHeight + document.body.scrollTop - (window.innerHeight / 1.2)
  // .scrollHeight = height of content in element
  // .scrollTop = # of px scrolled vertically

  let clothespics2 = $('.clothes-pics').offset().top - ($(window).height() / 1.2)

  let figures = document.querySelectorAll('.clothes-pics figure')

  function landPic(i) {
    setTimeout( () => {
      figures[i].classList.add('is-showing');
    }, (150 * (i+1) ));
  }

  if (wScroll > clothespics2 ){
    for(var i = 0; i < figures.length; i++) {
      landPic(i);
    }
  }
  // Landing Elements

  // var figures = document.querySelectorAll('.clothes-pics figure');
  //
  // function showPic(i) {
  //   setTimeout(function(){
  //     figures[i].classList.add('is-showing');
  //   }, (700 * (Math.exp(i * 0.14)) - 700));
  // }
  //
  // if(wScroll > document.querySelector('.clothes-pics').scrollHeight + document.body.scrollTop - (window.innerHeight / 1.2)) {
  //
  //   for(var i = 0; i < figures.length; i++) {
  //     showPic(i);
  //   }
  //
  // }
})
