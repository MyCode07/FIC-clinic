const header = document.querySelector('header');

export const stickyHeader = () => {
    if (!header) return;

    const headerheigth = header.getBoundingClientRect().height;

    const sticky = () => {
        if (window.scrollY > 200) {
            header.classList.add('_sticky')
        }
        else {
            header.classList.remove('_sticky')
        }
        document.querySelector('.wrapper').style.paddingTop = headerheigth + 'px';
    }


    sticky();
    window.addEventListener('scroll', sticky);
}