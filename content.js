window.addEventListener('resize', () => {
    caclPosition();
});
caclPosition();
setTimeout(() => {
    caclPosition();
}, 100);

function caclPosition() {
    const defaultPosition = (window.innerHeight > 890 && window.innerWidth > 1200) ? -23.5 : -12;
    document.querySelector('.main-wrapper > div:nth-child(3)').style.top = 
    (document.querySelector("body > main > div > div:nth-child(2) > h2").getBoundingClientRect().top + defaultPosition) + 'px';
}