let drink =0;

function shoot(arrow){
    console.log("You are shoot...");
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() < .5 ? resolve({}) : reject("You lose");
        }, 3000);
    });  
    
    return promise;
}

function win(){
    console.log("You win!!!");
    (drink ==1) ? buyBeer(): giveMoney();
}

function lose(){
    console.log("You lost!!!");
} 

function buyBeer(){
    console.log("SomeOne buy beer you");
}

function giveMoney(){
    console.log("You get money");
}
shoot({}).then(mark => console.log("Succesfull shoot!")).then(win).catch(miss => console.error(miss)).catch(lose);
     