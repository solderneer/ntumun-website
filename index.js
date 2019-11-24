import SmoothScroll from 'smooth-scroll'

// Setup smooth scrolling
var scroll = new SmoothScroll('a[href*="#"]')

// Setup highlight on scroll
if(window.matchMedia("(max-width: 640px)").matches) {
  var gridimages = document.querySelectorAll(".grid-img")
  console.log(gridimages)
  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY
    for(const elem of gridimages) {
      var offset = elem.getBoundingClientRect().top 
      if((offset < 300) && (offset > 100)) {
        elem.classList.add("highlight-img")
      } else {
        elem.classList.remove("highlight-img")
      }
    }
  })
}
