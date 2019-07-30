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
    formBottom = document.querySelector('#form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

statusMessage.classList.add('status');
function sendForm(elem){
elem.addEventListener('submit', function(event){
    event.preventDefault();
    elem.appendChild(statusMessage);
    let formData = new FormData(elem);

    function postData(data){
        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            
            request.open('POST','server.php');
            request.setRequestHeader('Content-type','application/json; charset=utf-8');

            request.onreadystatechange =function(){
                if(request.readyState<4){
                    resolve();
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                        resolve();
                    } else {
                        reject();
                    }
                }
            };
            request.send(data);
        });
    }

    function clearInput(){
        for(let i=0;i<input.length;i++){
            input[i].value="";
        }
    }

    postData(formData).then(()=>statusMessage.innerHTML=message.loading)
        .then (() => statusMessage.innerHTML = message.success)
        .catch (() => statusMessage.innerHTML = message.failure)
        .then (clearInput);
});
}
sendForm(form);
sendForm(formBottom);

//slider

let slideIndex =3,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');
showSlides(slideIndex);

function showSlides(n){
    if(n>slides.length){
        slideIndex=1;
    } 
    if(n<1){
        slideIndex=slides.length;
    }

    slides.forEach((item)=>item.style.display='none');

    dots.forEach((item)=>item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display='block';
    dots[slideIndex - 1].classList.add('dot-active');

}

function plusSlide(n){
    showSlides(slideIndex+=n);
}

function currentSlide(n){
    showSlides(slideIndex=n);
}

prev.addEventListener('click',function(){
    plusSlide(-1);
});

next.addEventListener('click', function(){
    plusSlide(1);
});

dotsWrap.addEventListener('click', function(event){
    for(let i=0; i < dots.length+1; i++){
        if(event.target.classList.contains('dot')&&event.target ==dots[i-1]){
            currentSlide(i);
        }
    }
});