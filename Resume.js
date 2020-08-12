const navtoggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav__link');
navtoggle.addEventListener('click', function(){
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link =>{ //problem here
    link.addEventListener('click', function(){
        document.body.classList.remove('nav-open');
    })
});


