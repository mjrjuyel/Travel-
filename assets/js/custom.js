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

// header back gound
function scrollHeader(){
  const Header= document.getElementById('header')

  if(this.scrollY >= 100)
  Header.classList.add('scroll-header')
  else
  Header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


  // swiper container
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      loop: true,
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

    // video play
    const VideoPlay = document.getElementById('video_id') ,
          videoButton = document.getElementById('video_button') ,
          videoIcon = document.getElementById('video_icon')

          function playPause(){
            if(VideoPlay.paused)
            {
                VideoPlay.play();
                videoIcon.classList.remove('ri-play-line')
                videoIcon.classList.add('ri-pause-line')
            }

            else
                {
                VideoPlay.pause()
                videoIcon.classList.remove('ri-pause-line')
                videoIcon.classList.add('ri-play-line')
                }
          }
        videoButton.addEventListener('click', playPause)

        function videoEnd(){
          videoIcon.classList.remove('ri-pause-line')
          videoIcon.classList.add('ri-play-line')
        }
        VideoPlay.addEventListener('ended', videoEnd)

        // ScrollUp Buttom
 function scrollUpButton(){
  const scrollUp= document.getElementById('scroll_up')

  if(this.scrollY >= 300){
    scrollUp.classList.add('up_button');
  }
  else{
    scrollUp.classList.remove('up_button');
  }
 }

 window.addEventListener('scroll', scrollUpButton);