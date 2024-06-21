/* -------------------------
HIDE HEADER ON SCROLL DOWN
------------------------- */
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-down');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-down').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

/* -------------------------
SLIDER
------------------------- */
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let numItems = items.length;
    
let active = 1;
function loadShow(){
    let stt = 0;
    items[active].style.transform = 'none';
    items[active].style.zIndex = numItems;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i = active + 1; i < numItems; i++){
        stt++;
        items[i].style.transform = `translateX(${((150*stt) / 19.2)}vw) scale(${1 - 0.2*stt}) perspective(${(16 / 19.2)}vw) rotateY(-1deg)`;
        items[i].style.zIndex = numItems - stt;
        items[i].style.filter = `blur(5px)`;
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${((-150*stt) / 19.2)}vw) scale(${1 - 0.2*stt}) perspective(${(16 / 19.2)}vw) rotateY(1deg)`;
        items[i].style.zIndex = numItems - stt;
        items[i].style.filter = `blur(5px)`;
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

/* -------------------------
FAQs ACCORDION
------------------------- */
document.querySelectorAll('.accordion .item .question').forEach(anchor => {
    anchor.addEventListener('click', function() {
      const item = this.parentElement;
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  }); 

