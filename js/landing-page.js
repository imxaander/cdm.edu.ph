/* Handles the visibility of the intro animation and allows the user to scroll afterward */
window.onload = function() {
    var myDiv = document.getElementById('intro');
    var delay = 5000; // 5 seconds

    setTimeout(function() {
        myDiv.style.display = 'none';
        document.body.style.overflow = 'visible'
    }, delay);
};

/* Changes the visibility of nav-bar background and border depending on the scroll value*/
function navBackground(){
    var navBar = document.getElementById('nav-container');
    var scrollY = window.scrollY;

    if(scrollY > navBar.getAttribute('height')){
        navBar.classList.remove('hero-nav');
    }
    else{
        navBar.classList.add(('hero-nav'));
    }

    console.log(scrollY);
}
window.addEventListener('scroll', navBackground);