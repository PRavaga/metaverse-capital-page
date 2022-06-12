const defaultPosition = (window.innerHeight > 890 && window.innerWidth > 1200) ? 46 : 48;
document.querySelector('.main-wrapper > div:nth-child(3)').style.bottom = (defaultPosition + (window.innerHeight-850)/250) + '%';
window.addEventListener('resize', () => {
    const defaultPosition = (window.innerHeight > 890 && window.innerWidth > 1200) ? 46 : 48;
    document.querySelector('.main-wrapper > div:nth-child(3)').style.bottom = (defaultPosition + (window.innerHeight-850)/250) + '%';
});