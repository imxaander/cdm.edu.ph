/*
this code is based here https://www.w3schools.com/howto/howto_html_include.asp
NOTE: I just changed some things, this can be replaced with fetch, i'll look into it
variables:
    z   contains all the tags inside the document. <- slow
    el  contains the current element in the loop
    file contains the file path of current element
    xhttp contains the http request to retrieve the file using the file variable

usage:
    add include-html as an attribute provide the file path as value

    <tag include-html="file.html"> </tag>

    the file.html contents will replace the <tag> element.
    this function needs to be called after all the elements.
    make sure to include <script> includeHTML(); </script>
*/
function includeHTML() {
    let z, i, el, file, xhttp;

    /* Loop through a collection of all HTML elements  */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        el= z[i];
        /* search for elements with a certain atrribute: */
        file = el.getAttribute("include-html"); //set file to the file path
        if (file) { //check if the file has value
            /* Make an HTTP request using the attribute value as the file path: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status === 200) {el.outerHTML = this.responseText;} //set the element's innerHTML if success.
                    if (this.status === 404) {el.outerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    el.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}
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