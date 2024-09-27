// Fetch and load the navbar.html into the 'navbar' div
fetch('./components/navbar.html') // Path to navbar.html
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });