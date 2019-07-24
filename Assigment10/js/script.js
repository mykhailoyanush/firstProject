window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info=document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i=a;i<tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i=0; i<tab.length; i++){
                if(target ==tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break; 
                }
            }
        }
    });
});

//Timer

let deadline='2019-07-29';

function getTimeRemaining(endTime) {
    let t = Date.parse(endTime)-Date.parse(new Date()),
        seconds = Math.floor((t/1000)%60),
        minutes = Math.floor((t/1000/60)%60),
        hours = Math.floor((t)/(1000*60*60));
    
    return{
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds': seconds
    };
}

function setClock(id, endTime){
    let timer=document.getElementById(id),
        hours=timer.querySelector('.hours'),
        minutes=timer.querySelector('.minutes'),
        seconds=timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock(){
        let t = getTimeRemaining(endTime);
        if(t.total<0){
            hours.textContent = 00;
            minutes.textContent = 00;
            seconds.textContent = 00;
            clearInterval(timeInterval);
        }else{
            hours.textContent = (t.hours<10)?('0'+t.hours):t.hours;
            minutes.textContent = (t.minutes<10)?('0'+t.minutes):t.minutes;
            seconds.textContent = (t.seconds<10)?('0'+t.seconds):t.seconds;
        }
        if(t.total<=0){
            clearInterval(timeInterval);
        }
    }
};

setClock('timer',deadline);

//Modal

var openDialog = function(){
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow='hidden';
}
var closeDialog= function(){
    overlay.style.display = 'none';
    this.classList.remove('more-splash');
    document.body.style.overflow='';
}
let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    description = document.querySelectorAll('.description-btn');

more.addEventListener('click', openDialog);
for(let i=0; i<description.length; i++){
    +description[i].addEventListener('click', openDialog);
}
close.addEventListener('click', closeDialog);

let message = {
    loading: "Loading",
    success: "Thanks. We call you soon!",
    failure: "Something goes wrong"
}

let form = document.querySelector('.main-form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

statusMessage.classList.add('status');

form.addEventListener('submit', function(event){
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();

    request.open('POST','server.php');
    request.setRequestHeader('Content-type','application/json; charset=utf-8');

    let formData = new FormData(form);

    let obj ={};

    formData.forEach(function(value, key){
        obj[key]=value;
    });

    let json =JSON.stringify(obj);

    request.send(json);

    request.addEventListener('readystatechange',function(){
        if(request.readyState<4){
            statusMessage.innerHTML = message.loading;
        }else if(request.readyState ==4 && request.status==200){
            statusMessage.innerHTML = message.success;
        }else{
            statusMessage.innerHTML = message.failure;
        }
    });

    for(let i=0;i<input.length;i++){
        input[i].value="";
    }
});

/*class Options{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    creatDiv(){
        let element = document.getElementsByClassName('main-block');

        let div =document.createElement('div');
        div.style.width=this.width;
        div.style.height=this.height;
        div.style.background=this.bg;
        div.style.fontSize = this.fontSize;
        div.innerHTML=this.textAlign;
        element[0].appendChild(div);
    }
}
const newDiv = new Options('200px','200px','red','10px','My First Element');

newDiv.creatDiv();*/