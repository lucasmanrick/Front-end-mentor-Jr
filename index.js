const childSelector = document.getElementById (`nav-show`)
  childSelector.addEventListener (`click`, openNavBar)


const closeMenuLogo = document.getElementById (`close-png`) 
  closeMenuLogo.addEventListener (`click`, closeNavBar)


const showMenu = document.querySelector (`.menu-side`)
const subContainer = document.getElementById (`container`)


function openNavBar () {
    showMenu.classList.add (`show`)
    childSelector.style = "display:none;"
    subContainer.style = "opacity:0.3;"
}



function closeNavBar () {
  showMenu.classList.remove (`show`)
  childSelector.style = "@media (max-width: 960px) {display:block;}"
  
  subContainer.style = "opacity:1;"
}


subContainer.style = "@media (min-width:660px) opacity:1;"