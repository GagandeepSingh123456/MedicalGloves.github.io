function Change(){

    var Navbar=document.getElementById('navbarr');
    var Scroll=window.scrollY;
    if(Scroll<3){
        Navbar.classList.remove('changii');
    }else{
        Navbar.classList.add('changii');
    }

}
window.addEventListener('scroll',Change)