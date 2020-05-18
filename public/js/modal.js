

let openmodal = document.querySelectorAll('.modal-open')
let info = document.getElementsByClassName('.uppy-Dashboard-AddFiles-info')
let lazyImages = document.querySelectorAll('.lazy')
let inAdvance = 300

function lazyLoad() {
  lazyImages.forEach(image => {
    if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
      image.src = image.dataset.src
    }
  })
}

lazyLoad()

window.addEventListener('scroll', _.throttle(lazyLoad, 10))
window.addEventListener('resize', _.throttle(lazyLoad, 10))

let sliderImage = document.getElementById('hero-slider');
let hero1 = document.querySelector('#hero1');
let hero2 = document.querySelector('#hero2');
let hero3 = document.querySelector('#hero3');
let hero4 = document.querySelector('#hero4');
let hero5 = document.querySelector('#hero5');

setTimeout(function(){ hero1.classList.add("hidden")}, 4000);
setTimeout(function(){ hero2.classList.remove("hidden")}, 4000);
setTimeout(function(){ hero2.classList.add("hidden")}, 8000);
setTimeout(function(){ hero3.classList.remove("hidden")}, 8000);
setTimeout(function(){ hero4.classList.remove("hidden")}, 12000);
setTimeout(function(){ hero3.classList.add("hidden")}, 12000);
setTimeout(function(){ hero4.classList.add("hidden")}, 12000);







for (let i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', function(event){
    event.preventDefault()
    toggleModal()
  })
}

const overlay = document.querySelector('.modal-overlay')
overlay.addEventListener('click', toggleModal)

let closemodal = document.querySelectorAll('.modal-close')
for (let i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', toggleModal)
}

document.onkeydown = function(evt) {
  evt = evt || window.event
  let isEscape = false
  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc")
  } else {
    isEscape = (evt.keyCode === 27)
  }
  if (isEscape && document.body.classList.contains('modal-active')) {
    toggleModal()
  }
};


function toggleModal () {
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  modal.classList.toggle('opacity-0')
  modal.classList.toggle('pointer-events-none')
  body.classList.toggle('modal-active')
}

let main = document.querySelector('#main')
let filters = document.querySelector('#filters')

function scrollToFilters() {
  filters.scrollIntoView({behavior: "smooth", block: "end", inline: "start"})
}

main.addEventListener("click", scrollToFilters)