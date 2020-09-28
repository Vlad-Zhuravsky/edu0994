// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://crushdrummers.ru/*
// @grant        none
// ==/UserScript==

let yaInput = document.getElementsByName("text")[0];
let nextPageButton = document.getElementsByTagName('a');
let button = document.getElementsByClassName("button")[0];
let sites = {
    "xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":["Гобой","Саксофон","Валторна","Фагот","Скрипка","Флейта","Как звучит флейта"],
    "https://crushdrummers.ru":["Барабанное шоу","Шоу барабанщиков в Москве","Заказать барабанщиков в Москве"]
};
let site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];
let keywords = sites[site];
let keyword = keywords[getRandom(0,keywords.length)];
let i =0;

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

if(button != undefined){ //Если мы на главной странице Яндекса
    document.cookie = "site="+site;
}else{ //Если мы уже не на главной странице Яндекса
    site = getCookie("site");
}


if (button != undefined){
    let timerId = setInterval(()=>{
        yaInput.value += keyword[i++];
        if(i==keyword.length){
            clearInterval(timerId);
            document.getElementsByClassName("button")[0].click();
        }
    },500);
}else if(location.hostname == "yandex.ru"){
    let flag = true;
    let links = document.links;
    for(let i = 0; i<links.length;i++){
        let link = links[i];
        if(link.href.indexOf(site) != -1){
            links[i].removeAttribute("target");
            setTimeout(()=>{links[i].click()},2000);
            flag = false;
            break;
        }
    }
    if(flag){
        for(let i = 0;i<nextPageButton.length;i++){
            if(nextPageButton[i].getAttribute('aria-label')=="Следующая страница"){
                setTimeout(()=>{nextPageButton[i].click()},2000);
            }else if(nextPageButton[i].getAttribute('aria-label')=="Страница 10"){
                location.href = "https://yandex.ru/";
            }
        }
    }
}else{
    if(getRandom(0,100)>=80){
        location.href = "https://yandex.ru/";
    }else{
        let links = document.links;
        setInterval(()=>{
            let index = getRandom(0,links.length);
            console.log("Я не умер, я еще живой! Проверяю ссылку: "+links[index]);
            if(links[index].href.indexOf(location.hostname) != -1){
                links[index].click();
            }
        },5000);
    }
}
