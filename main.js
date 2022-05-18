window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  // quais dados vou precisar?

  //o topo da seção
  const sectionTop = section.offsetTop

  // a altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  // console.log(sectionTopReachOrPassedTargetLine)

  //verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  //a seçãoa termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500
}).reveal(
  '#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content '
)
