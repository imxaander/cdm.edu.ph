// Use to include nav bar
// To use: create a div with id of "nav-container" and add the script tag before the end of the body tag
// <body>
// e.g <div id="nav-container"></div>
// .........contents..............
// <script src="../includeNav.js"></script>
// </body>

fetch('../nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-container').innerHTML = data;
    })
    .catch(error => console.error('Error fetching nav.html:', error));