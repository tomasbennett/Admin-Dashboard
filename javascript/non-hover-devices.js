const lowerAccess = document.querySelectorAll('.lower-access-svg-container');

lowerAccess.forEach(elem => {
    elem.addEventListener('touchstart', lowerAccessReveal);
})

function lowerAccessReveal(e){
    e.preventDefault();

    e.currentTarget.classList.toggle('lower-access-touch-event');
}