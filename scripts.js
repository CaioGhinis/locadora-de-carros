const accordion = document.getElementsByClassName('contentBx');

for (i = 0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}

function scrollToTop() {
    window.scrollToTop({
        top: 0,
        behavior: 'smooth'
    })
}