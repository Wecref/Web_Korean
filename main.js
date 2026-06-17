import * as nav from './components/nav/Nav.js';

document.addEventListener('DOMContentLoaded', () => {
    nav.InitMenu(document.querySelectorAll('nav .nav-menus a')); // li 대신 a 태그에 이벤트 리스너를 추가합니다.
    nav.InitMenuIcon(document.querySelector('.menu-toggle'), document.querySelector('.nav-body'));
    nav.InitLanguageMenu(document.querySelectorAll('.language-selector a')); // li 대신 a 태그에 이벤트 리스너를 추가합니다.
});