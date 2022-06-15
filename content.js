window.addEventListener('resize', () => {
    caclPosition();
});
caclPosition();
setTimeout(() => {
    caclPosition();
}, 100);

function caclPosition() {
    if (window.innerWidth <= 850) return document.querySelector('.main-wrapper > div:nth-child(3)').style.top = '300px'; 
    const h2Position = document.querySelector("body > main > div > div:nth-child(2)").getBoundingClientRect().y;
    // const difference = document.querySelector("body > main > div > div:nth-child(3) > pre").getBoundingClientRect().y - document.querySelector("body > main > div > div:nth-child(3) > h2").getBoundingClientRect().y
    // const letterSpacing = parseFloat(getComputedStyle(document.querySelector('body > main > div > div:nth-child(3) h2')).letterSpacing, 10);
    // const resolutionIndex = window.innerWidth > 1500 ? (1920/window.innerWidth)*1.5 : (1920/window.innerWidth)*0.9;
    const rightBlockPosition = h2Position;

    document.querySelector('.main-wrapper > div:nth-child(3)').style.top = rightBlockPosition + 'px'
}
