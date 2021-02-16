const label = document.querySelector('label')
const mobileMenu = label.nextElementSibling

const showMenu = function(){
    mobileMenu.classList.toggle('show');
}

label.addEventListener('click', function(event){    
    showMenu(event.target)

})

