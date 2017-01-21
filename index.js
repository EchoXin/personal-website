window.onload = function() {

    var home = document.getElementById('home');
    var about = document.getElementById('about');
    var education = document.getElementById('education');
    var contact = document.getElementById('contact');
    var content = document.getElementsByClassName('content')[0];
    home.addEventListener('click', function() {
        content.innerHTML = '';
    });

    about.addEventListener('click', function() {
        content.innerHTML = "<iframe src='about.html'></iframe>";
    });

    education.addEventListener('click', function() {
        content.innerHTML = "<iframe src='education.html'></iframe>";
    });

    contact.addEventListener('click', function() {
        content.innerHTML = "<iframe src='contact.html'></iframe>";
    });

};
