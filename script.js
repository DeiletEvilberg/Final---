console.log('hii');

let timer;
let titleOld = document.querySelector('head title').innerHTML;

// console.log(titleOld);

function changeTitle(icon, text){
    document.querySelector('head title').innerHTML = text;
    document.querySelector('link[rel="icon"]').setAttribute('href', icon);
}

window.onblur = () => {
    timer = setTimeout (() => {
        changeTitle('icons/bsd.ico', 'Не хочешь...Ну и не нужно');
    }, 3)
}

window.onfocus = () => {
    clearTimeout(timer);
    changeTitle('icons/dazai.ico', titleOld);
}

const spider = document.querySelector('.spider');


function scarySound(){
    const audio = new Audio();
    audio.preload = 'auto';
    audio.scr = 'img/monstr.mp3';
    audio.play();
}

spider.onclick = scarySound


const header = document.querySelector('.siteHeader');

document.querySelector('.on').onchange = function(){
    if (this.checked){
        header.classList.add('siteHeader-bg');
        header.classList.add('spiderAnimation');
    }
    else (this.checked){
        header.classList.remove('siteHeader-bg');
        header.classList.remove('spiderAnimation');
    }

}
