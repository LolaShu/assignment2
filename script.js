const menu ={};
menu.init = function(){
menu.label = document.querySelector('label')
menu.mobileMenu = menu.label.nextElementSibling

menu.showMenu = function(){
    menu.mobileMenu.classList.toggle('show');
}

menu.label.addEventListener('click', function(event){    
    menu.showMenu(event.target)

})  
}

menu.init();




