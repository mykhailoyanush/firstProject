
var elements=document.getElementsByClassName('menu-item'),
    elem=document.getElementsByClassName('menu'),
    li = document.createElement('li'),
    title=document.getElementById('title').textContent,
    column=document.getElementsByClassName('column');
    question=prompt('What you mind about apple','');
console.log(elements);
//document.body.elem.insertBefore(elements[2],elements[1]);
li.className="menu-item";
li.textContent="Fifth element";
elem[0].insertBefore(elements[2],elements[1]);
elem[0].appendChild(li);
document.body.style.backgroundImage="url('img/apple_true.jpg')";
document.getElementById('title').textContent="Мы продаем только подлинную технику Apple";
column[1].removeChild(document.getElementsByClassName('adv')[0]);
document.getElementById('prompt').textContent=question;
