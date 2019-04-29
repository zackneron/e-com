
let menu = document.querySelector('#js-mobile-menu');
let jsMenuOpen = document.querySelector('#js-menu-open');
let menuToggle = document.querySelector('.js-mobile-menu-toggle'); 
let acc = document.querySelectorAll(".js-accordion");
let i;

// TOGGLE THE MENU ON MOBILE AND TABLET
menu.addEventListener('click', function(){
  if(menuToggle.classList.contains('js-mobile-menu-toggle')){
    menuToggle.classList.toggle('js-hide');
  }
});

// TOGGLE INDIVIDUEL ACCORDION
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
      console.log('working');
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// SLIDE
function slider(){
  $(".slider #1").show("fade", 500);
  $(".slider #1").delay(5500).hide("slide",{direction:'left'}, 500);
  
  let sc = $(".slider img").size();
  let count = 2;
  
  setInterval(function() {
      $(".slider #"+count).show("slide",{direction:'right'}, 500);
      $(".slider #"+count).delay(5500).hide("slide",{direction:'left'}, 500);
      
      if(count == sc){
          count = 1;
      }else{
          count = count + 1;
      }
  },6500);
}
slider();

// ACCORDION
$(function (){
  $('.content-card__accordion').click(function(){
    $(this).find('.accordion-indicator').toggleClass('active');
  });
});


// ADD VALUE IN CART ICON

let addBtn = document.querySelectorAll('.add__btn');
for(let i = 0; i < addBtn.length; i++){
  addBtn[i].addEventListener('click', function(field){
    nr = parseInt(document.querySelector('#js-cart').innerHTML);
    document.querySelector('#js-cart').innerHTML = nr + 1;

    nr = parseInt(document.querySelector('#js-cart-mobile').innerHTML);
    document.querySelector('#js-cart-mobile').innerHTML = nr + 1;

    if (nr >= 0) {
      document.querySelector('.add__title').innerHTML = 'Remove';
    }
  });
}
