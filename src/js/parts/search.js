const search = document.querySelector('.search');

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (!targetEl.closest('.search__body') && !targetEl.classList.contains('search__body') && document.querySelector('.search._open')) {
        document.querySelector('.search._open').classList.remove('_open')
    }

    if (targetEl.classList.contains('header__search')) {
        search.classList.toggle('_open');
    }
})
