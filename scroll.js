document.lastScrollPosition = 0;

document.addEventListener('scroll', () => {
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';

    document.lastScrollPosition = window.pageYOffset;
})