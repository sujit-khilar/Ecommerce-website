// set the dagte we are counting down to
var countDownDate = new Date("Sep 21, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations foe days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over , write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 10,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
     "@0.00": {
       slidesPerView: 2,
       spaceBetween: 10,
     },
     "@0.75": {
       slidesPerView: 2,
       spaceBetween: 10,
     },
     "@1.00": {
       slidesPerView: 3,
       spaceBetween: 10,
     },
     "@1.50": {
       slidesPerView: 4,
       spaceBetween: 10,
     },
   },
 });

//  Animation

ScrollReveal().reveal('.top_nav',{
   origin: 'bottom',
   distance: '20px',
   duration: 3000,
   opacity: 0,
});

ScrollReveal().reveal('.nav',{
   origin: 'bottom',
   distance: '20px',
   duration: 3000,
   opacity: 0,
   delay:100,
});

ScrollReveal().reveal('.header',{
   origin: 'bottom',
   distance: '20px',
   opacity: 0,
   delay:200,
});

ScrollReveal().reveal('.section',{
   origin: 'bottom',
   distance: '30px',
   opacity: 0,
   duration: 3000,
   delay:200,
});


ScrollReveal().reveal('.footer',{
   origin: 'bottom',
   distance: '30px',
   opacity: 0,
   duration: 3000,
   delay:200,
});



const AddToCart = document.querySelectorAll('.add_to_cart');

AddToCart.forEach((button)=>{
   button.addEventListener('click',()=>{
      const id= button.getAttribute('data-id');
      const title= button.getAttribute('data-title');
      const image = button.getAttribute('data-image');
      const price = button.getAttribute('data-price');

      const cartItem = {id, title, image, price};
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(cartItem);
      localStorage.setItem('cart',JSON.stringify(cart));
   })
})