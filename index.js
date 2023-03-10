const showMenu = document.querySelector (`.menu-side`)

const openMenuSelector = document.getElementById (`nav-show`)
openMenuSelector.addEventListener (`click`, openNavBar)

function openNavBar () {
  showMenu.classList.add (`show`)
  openMenuSelector.parentElement.classList.add (`block`)

  
}

const closeMenuLogo = document.getElementById (`close-png`) 
closeMenuLogo.addEventListener (`click`, closeNavBar)

function closeNavBar () {
  showMenu.classList.remove (`show`)
  openMenuSelector.parentElement.classList.remove (`block`)
}









