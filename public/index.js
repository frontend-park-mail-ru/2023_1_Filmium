import { Header } from "./components/header/header.js";

const headerActions = {
    main: {
        name: 'Главная',
        href: '/'
    },
    catalog: {
        name: 'Каталог',
        href: '/catalog'
    },
    store: {
        name: 'Магазин',
        href: '/store'
    },
    movies: {
        name: 'Моё',
        href: '/my-movies'
    }
}

const headerData = {
    logoIcon: '/logo/logo.svg',
    headerActions,
    searchIcon: '/svg-icons/search.svg',
    profileIcon: '/profile/profile.jpg',
}

const root = document.getElementById('root');

function renderHeader(parent) {
    console.log("Hello from index");

    const header = document.createElement('header');
    header.classList.add('headerTop');

    const headerContent = new Header(header);
    headerContent.config = headerData;
    headerContent.render();

    parent.prepend(header);

    // const header = new Header(parent);
    // header.config = headerData;
    // createLink('/header/header.css');
    // header.render();
}

function createLink(href) {
    const head = document.head;
    const link = document.createElement('link');
    link.href = href;
    link.rel = 'stylesheet';
    head.appendChild(link);
}

// const testDiv = document.createElement('div');
renderHeader(root);
// console.log(testDiv);




// const rootElement = document.getElementById('root');

// function addHeaderLogoIconSvg(headerLogo) {
//     const svg =
//         `
//             <svg height="50px" viewBox="0 0 8.4666669 8.4666669" id="svg8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg">
//                 <g id="layer1" transform="translate(0,-288.53332)">
//                     <path d="m 16.033203,1.0117188 c -2.833585,0 -5.216959,1.9898455 -5.837891,4.640625 C 9.4641459,4.6664753 8.3021699,4.015625 6.9902344,4.015625 c -2.1972945,0 -4,1.8026961 -4,4 0,1.188193 0.5372429,2.249339 1.3691406,2.984375 H 2 c -0.5522619,5.5e-5 -0.9999448,0.447738 -1,1 v 18 c 5.52e-5,0.552262 0.4477381,0.999945 1,1 h 21 c 0.552262,-5.5e-5 0.999945,-0.447738 1,-1 v -2.998047 h 1.1875 C 25.60542,28.15831 26.707733,29 28,29 h 2 c 0.552262,-5.5e-5 0.999945,-0.447738 1,-1 V 15 c -5.5e-5,-0.552262 -0.447738,-0.999945 -1,-1 h -2 c -1.294426,0 -2.398165,0.844549 -2.814453,2.003906 H 24 V 12 c -5.5e-5,-0.552262 -0.447738,-0.999945 -1,-1 h -2.501953 c 0.951374,-1.0611695 1.537113,-2.4576012 1.537109,-3.9882812 9e-6,-3.3018709 -2.700083,-6 -6.001953,-6 z m 0,2 c 2.220988,0 4.001959,1.7790362 4.001953,4 6e-6,2.174841 -1.710876,3.9163952 -3.867187,3.9882812 h -0.269531 c -2.156157,-0.07205 -3.865241,-1.8135505 -3.865235,-3.9882812 -6e-6,-2.2209638 1.779013,-4 4,-4 z M 6.9902344,6.015625 c 1.1164142,0 2.0000004,0.8835654 2,2 4e-7,1.1163968 -0.8835858,2.001953 -2,2.001953 -1.1164143,0 -2,-0.8855562 -2,-2.001953 0,-1.1164346 0.8835857,-2 2,-2 z M 10.644531,9.6269531 C 10.889476,10.127344 11.199953,10.589077 11.568359,11 H 9.6210938 C 10.052075,10.619293 10.407924,10.158117 10.644531,9.6269531 Z M 3,13 H 22 V 29 H 3 Z m 25,3 h 1 v 11 h -1 c -0.565608,0 -0.987669,-0.421627 -0.996094,-0.984375 v -9.03125 C 27.012331,16.421591 27.434392,16 28,16 Z m -4,1.996094 h 1 v 7.005859 h -1 z" id="path827" style="color:#ffffff;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#ffffff;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#ffffff;solid-opacity:1;vector-effect:none;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.99999988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"/>
//                     <path d="m 1.5878906,292.50195 a 0.26465,0.26465 0 1 0 0,0.5293 h 0.5292969 a 0.26465,0.26465 0 1 0 0,-0.5293 z" id="path865" style="color:#ffffff;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#ffffff;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#ffffff;solid-opacity:1;vector-effect:none;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5291667;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"/>
//                 </g>
//             </svg>
//         `;
//
//     headerLogo.innerHTML = svg;
// }

// const headerLogo = document.querySelector('.headerTop__logo__icon');
// addHeaderLogoIconSvg(headerLogo);


// function addHeaderSearchIconSvg(headerSearch) {
//     const svg =
//         `
//             <svg height="30px" viewBox="0 0 8.4666669 8.4666669" id="svg8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" transform="matrix(1, 0, 0, 1, 0, 0)">
//                 <g id="SVGRepo_bgCarrier" stroke-width="0"/>
//                 <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.22013333940000002"/>
//                 <g id="SVGRepo_iconCarrier"> <g id="layer1" transform="translate(0,-288.53332)"> <path d="M 11.996094 1.0039062 C 5.9328116 1.0039062 0.99610131 5.9386839 0.99609375 12.001953 C 0.99610131 18.06526 5.9328116 23.001953 11.996094 23.001953 C 14.670102 23.001953 17.122499 22.040573 19.03125 20.447266 L 29.291016 30.708984 C 30.235897 31.653866 31.653866 30.235898 30.708984 29.291016 L 20.447266 19.029297 C 22.03584 17.121901 22.994137 14.671545 22.994141 12.001953 C 22.994133 5.9386839 18.059376 1.0039062 11.996094 1.0039062 z M 11.996094 3.0039062 C 16.978497 3.003944 20.994135 7.0195531 20.994141 12.001953 C 20.994135 16.984391 16.978497 21.001953 11.996094 21.001953 C 7.0136911 21.001953 2.9960999 16.984391 2.9960938 12.001953 C 2.9960999 7.0195531 7.0136911 3.003944 11.996094 3.0039062 z " id="path935" style="color:#ffffff;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#ffffff;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#ffffff;solid-opacity:1;vector-effect:none;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1.99999988;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"/> </g> </g>
//             </svg>
//         `;
//
//     headerSearch.innerHTML = svg;
// }
//
// const headerSearch = document.querySelector('.headerTop__search__icon');
// addHeaderSearchIconSvg(headerSearch);


// const config = {
//     main: {
//         name: 'Главная',
//         href: '/',
//         render: renderMain,
//         key: '/',
//
//     },
//     catalog: {
//         name: 'Каталог',
//         href: '/catalog',
//         render: renderCatalog,
//         key: 'catalog',
//     },
//     shop: {
//         name: 'Магазин',
//         href: '/shop',
//         render: renderShop,
//         key: 'shop',
//     }
// };

// function renderMain(parent) {
//     const headerNav =
//         `
//             <header class="headerTop">
//                 <nav class="headerTop__nav">
//                     <a href="" class="headerTop__logo__icon">
//                         <img src="/logo/logo.svg">
//                     </a>
//
//                     <ul class="headerTop__actions">
//                         <li class="headerTop__action active">
//                             <a href="#">
//                                 Главная
//                             </a>
//                         </li>
//                         <li class="headerTop__action">
//                             <a href="#">
//                                 Каталог
//                             </a>
//                         </li>
//                         <li class="headerTop__action">
//                             <a href="#">
//                                 Магазин
//                             </a>
//                         </li>
//                     </ul>
//
//                     <div class="headerTop__right">
//                         <div class="headerTop__search">
//                             <a href="#" class="headerTop__search__icon">
//                                 <img src="/svg-icons/search.svg">
//                             </a>
//                         </div>
//                         <div class="headerTop__verticalSpacer"></div>
//                         <div class="headerTop__button">
//                             <button class="button__subscription">
//                                 <span>Купить подписку</span>
//                             </button>
//                         </div>
//
//                         <div class="headerTop__verticalSpacer"></div>
//
//                         <a href="" class="headerTop__profile">
//                             <img src="/profile/profile.jpg" class="headerTop__profile__image">
//                         </a>
//                     </div>
//                 </nav>
//             </header>
//         `;
//
//     Ajax.get({
//         url: '/',
//         callback: ()
//     });
// }

