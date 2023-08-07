// ===== nav bar show ======/

const navMenu = document.getElementById('nav-menu'),
      navClose =document.getElementById('nav-close'),
      navToggle =document.getElementById('nav-toggle')

      if(navToggle){
        navToggle.addEventListener('click',()=>{
          navMenu.classList.add('show-menu')
        })
      }
      if(navClose){
        navClose.addEventListener('click',()=>{
          navMenu.classList.remove('show-menu')
        })
      }
function scrollHeader(){
  const Header= document.getElementById('header')

  if(this.scrollY >= 100)
  Header.classList.add('scroll-header')
  else
  Header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
      
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      loop: true,
      zoom: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
 