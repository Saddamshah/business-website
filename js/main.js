const activeImage = document.querySelector('.active-work img')
const images = document.querySelectorAll('.img-card img')
const activeDesc = document.querySelector('.active-img-desc')
const nav = document.querySelector('nav')

const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const mobileNav = document.querySelector('.mobile-nav')

const mobileNavLink = document.querySelectorAll('.mobile-nav a')

menuBtn.addEventListener('click', () => {
    mobileNav.classList.add('active')
    closeBtn.style.display = 'block'
    menuBtn.style.display = 'none'

})

closeBtn.addEventListener('click', ()=> {
    mobileNav.classList.remove('active')
    closeBtn.style.display = 'none'
    menuBtn.style.display = 'block'
})

mobileNavLink.forEach((link) => {
    link.addEventListener('click', () => {
    mobileNav.classList.remove('active')
    closeBtn.style.display = 'none'
    menuBtn.style.display = 'block'
    })
})

images.forEach( img => img.addEventListener('click', changeImage ))
function changeImage(event) {
    activeImage.src = event.target.src;
    activeDesc.innerHTML = event.target.nextElementSibling.innerText;
}

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 35) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})

