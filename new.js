
window.onscroll = function () {
    var navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "#000000"; 
    } else {
        navbar.style.backgroundColor = "#333232"; 
    }
};

var readMoreButton = document.querySelector('button[href="Google.com"]');
if (readMoreButton) {
    readMoreButton.addEventListener('click', function () {
        window.location.href = "https://www.google.com";
    });
}
