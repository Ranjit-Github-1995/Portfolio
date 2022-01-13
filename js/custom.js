let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let themSwitch = document.querySelector('.themSwitch');
let body = document.querySelector('body')
toggle.onclick = function(){
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// Light and Dark Theme Switch

themSwitch.onclick = function(){
    body.classList.toggle('dark')
}

// fix active menu

function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    navigation.classList.remove('active');
    main.classList.remove('active')
}