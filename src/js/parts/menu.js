import { lockPadding, unLockPadding } from '../utils/lockPadding.js';


const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header nav');
const menuMobile = document.querySelector('.menu');
const allMenuLinks = document.querySelectorAll('nav ul li a');
const menuCloseBtn = document.querySelector('._close');
if (burger) {
    burger.addEventListener('click', (e) => {
        menu.classList.toggle('_open');
        menuMobile.classList.toggle('_open');
        burger.classList.toggle('_active');

        if (menu.classList.contains('_open')) {
            lockPadding();
        }
        else {
            unLockPadding();
        }
    })
}


if (menuCloseBtn) {
    menuCloseBtn.addEventListener('click', (e) => {
        menu.classList.remove('_open');
        burger.classList.remove('_open');
        unLockPadding();
    })
}


if (allMenuLinks.length) {
    allMenuLinks.forEach(link => {
        link.addEventListener('click', (е) => {
            if (menu.classList.contains('_open')) {
                menu.classList.remove('_open');
                unLockPadding();
            }
        })
    })
}


// menu arrow buttom
const arrow = `<button><svg width="16" height="10" viewBox="0 0 16 10"  xmlns="http://www.w3.org/2000/svg"> <path d="M15.1421 1L8.07107 8.07107L1 1"  stroke-width="1.5" stroke-linecap="round"/></svg>
</button>`;
const arrowRight = `<button><svg width="16" height="9" viewBox="0 0 16 9">
<path d="M15.3536 4.85355C15.5488 4.65829 15.5488 4.34171 15.3536 4.14644L12.1716 0.964465C11.9763 0.769203 11.6597 0.769203 11.4645 0.964465C11.2692 1.15973 11.2692 1.47631 11.4645 1.67157L14.2929 4.5L11.4645 7.32843C11.2692 7.52369 11.2692 7.84027 11.4645 8.03553C11.6597 8.23079 11.9763 8.23079 12.1716 8.03553L15.3536 4.85355ZM5.82819e-08 5L15 5L15 4L-5.82819e-08 4L5.82819e-08 5Z"/>
</svg></button>
`;

// add menu summenu opener button
const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');
        const link = li.querySelector('a');


        if (submenu) {
            if (link.closest('ul').parentElement && link.closest('ul').parentElement.tagName == 'NAV') {
                link.insertAdjacentHTML('afterend', arrow);
            }
            else {
                link.insertAdjacentHTML('afterend', arrowRight);
            }

            const btn = li.querySelector('button');

            if (btn) {
                btn.addEventListener('click', function (e) {
                    toggleMenu(li)
                })
            }
        }
    })

    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            item.removeAttribute('data-open')
        }
    }
}



document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (!targetEl.closest('li[data-open]') && !targetEl.closest('nav') && document.querySelector('li[data-open]')) {
        document.querySelector('li[data-open]').removeAttribute('data-open')
    }
})