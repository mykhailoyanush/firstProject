/*localStorage.setItem('number',1);

console.log(localStorage.getItem('number'));

localStorage.removeItem('number');

localStorage.clear();

window.addEventListener('DomContentLoaded',function(){

    let checkBox = document.getElementById('rememberMe'),
        change = document.getElementById('chnge'),
        form = document.getElementsByTagName('form')[0];

    if(localStorage.getItem('isChecked')==true){
        checkBox.checked =true; 
    }
    if(localStorage.getItem('bg')=='changed'){
        form.style.backgroundColor = 'red';
    }
    checkBox.addEventListener('click',function(){
        localStorage.setItem('isChecked',true);
    });

    let person={
        name:'Alex',
        age: 25
    }

    let sereliazedPerson = JSON.stringify(person);

    localStorage.setItem('Alex',sereliazedPerson);

    console.log(JSON.parse(localStorage.getItem('Alex')));

    change.addEventListener('click', function(){
        localStorage.setItem('bg', 'changed')
    })
});

let json='{"id":2}';
try{
    let user = JSON.parse(json);
    console.log(user);

    if(!user.name){
        throw new Error('There is not name!');
    }
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`We get error: ${error.name}`);
}
finally{
    console.log('Finally Block!');
}
console.log('End');
*/
$(document).ready(function(){
    $('.list-item:first').hover(function(){
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click',function(){
        $('.image:even').fadeToggle('slow');
    });
    $('.list-item:eq(4)').on('click',function(){
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            },3000
        );
    });
});

//.classList
//.addEventListener
//$.ajax -fetch
//animations
