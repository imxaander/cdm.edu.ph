// landing page 'CDM' animation
window.onload = function() {
    let myDiv = document.getElementById('intro');
    let delay = 5000; // 5 seconds

    setTimeout(function() {
        myDiv.style.display = 'none';
        document.body.style.overflow = 'visible'
    }, delay);
};

/* Changes the visibility of nav-bar background and border depending on the scroll value*/
function navBackground(){
    let navBar = document.getElementById('nav-container');
    let scrollY = window.scrollY;

    if(scrollY > navBar.getAttribute('height')){
        navBar.classList.remove('hero-nav');
    }
    else{
        navBar.classList.add(('hero-nav'));
    }

    console.log(scrollY);
}
window.addEventListener('scroll', navBackground);