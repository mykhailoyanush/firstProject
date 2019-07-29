
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd'),
    data={};

inputRub.addEventListener('input', () => {
    
    function getData(){
        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();

            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onreadystatechange=function(){
                if(request.readyState<4){
                    data.responce=JSON.parse(request.response);
                    resolve();
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                        resolve();
                    } else {
                        reject();
                    }
                }           
            };
        });
    }
    
    getData().then(()=>
        inputUsd.value=inputRub.value/data.responce.usd)
        .catch(()=>inputUsd.value = "Что-то пошло не так!"); 

});