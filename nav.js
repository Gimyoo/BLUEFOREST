const menuBtn = document.querySelector(".menuBtn");
const hiddenMenu = document.querySelector(".hiddenMenu");
const showMenu = document.querySelector(".showMenu");
const HIDE_CN = 'hide';
const OPEN_CN = 'open';

/* 메뉴 펼치기 & 숨기기*/
function HideShowMenu(){
    hiddenMenu.classList.toggle(HIDE_CN);
    /*메뉴 펼치기하면 네이게이션의 색상 변경*/
    hiddenMenu.classList.toggle(OPEN_CN);
    showMenu.classList.toggle(OPEN_CN);
}

/*햄버거 메뉴 애니메이션*/
function toggleMenu(){
    menuBtn.classList.toggle(OPEN_CN);
}

function init(){ 
    menuBtn.addEventListener('click', HideShowMenu)
    menuBtn.addEventListener('click', toggleMenu);
}

init();