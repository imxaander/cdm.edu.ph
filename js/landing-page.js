/* Handles the visibility of the intro animation and allows the user to scroll afterward */
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


document.getElementById('right-arrow').onclick = function (){
    arrowClicked(1);
}
document.getElementById('left-arrow').onclick = function (){
    arrowClicked(-1);
}

function arrowClicked(direction){
    let card = document.getElementById('card');
    card.style.animationName = 'card-fade';
    card.addEventListener('animationend', function (){
        card.style.animationName = 'none';
        //I'll change the course data in this part
    })
}