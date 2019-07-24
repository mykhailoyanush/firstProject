/*let options = {
    width: 1366,
    height: 768,
    background:"red",
    font:{
        size: '15px',
        color: 'white'
    }
}

console.log(JSON.parse(JSON.stringify(options)));
*/

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', ()=>{
    let request = new XMLHttpRequest();


    request.open('GET', 'json-file.json');
    request.setRequestHeader('Content-type','application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function(){
        if(request.readyState  === 4 && request.status ===200){
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value/ data.usd;
        }else{
            inputUsd.value = "Something goes wrong";
        }
    });
});