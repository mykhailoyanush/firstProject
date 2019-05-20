"use-strict"
let money;
let time;
function start(){    
    money=+prompt("Ваш бюджет на месяц?","5000");
    time=prompt("Введите дату в формате YYYY-MM-DD","2019-05-19");

    while(isNaN(money) || money=="" || money==null){
        money=+prompt("Ваш бюджет на месяц?","5000");
    }
}
start();

let appData={
    budget:money,
    timeData:time,
    expenses:{
    },
    optionalExpenses:{
        
    },
    income:[],
    saving:true
};


function chooseExpenses(){
    for(let i=0;i<2;i++){    
        let a=prompt("Введите обязательную статью расходов в этом месяце",""),
            b=prompt("Во сколько обойдется?","0");
    
        if((typeof(a))=='string' && (typeof(a)) !=null && (typeof(b))!=null && 
        a!='' && b !='' && a.length<50){
            console.log("Well");
            appData.expenses[a]=b;
        }
    }
}

chooseExpenses();

/*let k=0;
while(k<2){
    let a=prompt("Введите обязательную статью расходов в этом месяце",""),
    b=prompt("Во сколько обойдется?","0");
    if((typeof(a))=='string' && (typeof(a)) !=null && (typeof(b))!=null && 
    a!='' && b !='' && a.length<50){
        console.log("Well");
        appData.expenses[a]=b;
    }
    k++;
}
let j=0;
do{
    let a=prompt("Введите обязательную статью расходов в этом месяце",""),
    b=prompt("Во сколько обойдется?","0");
    if((typeof(a))=='string' && (typeof(a)) !=null && (typeof(b))!=null && 
    a!='' && b !='' && a.length<50){
        console.log("Well");
        appData.expenses[a]=b;
    }
    j++;
}while(j<2)
*/

function detectDayBudget(){
    appData.moneyPerDay=(appData.budget/30).toFixed(1);
}

detectDayBudget();

function detectLevel(){    
    if(appData.moneyPerDay<100){
        console.log("Минимальный уровень достатка");
    }else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
        console.log("Средний уровень достатка");
    }else if(appData.moneyPerDay>2000){
        console.log("Высокий уровень достатка")
    }else{
        console.log("Произошла ошыбка");
    }
}

detectLevel();

function chooseOptExpenses(){
    let optExpenses;
    for(let i=0; i<3; i++){
        optExpenses=prompt("Статья необязательных расходов?","");
        appData.optionalExpenses[i]=optExpenses;
    }        
}

chooseOptExpenses();

function checkSavings(){
    if(appData.saving){
        let save=+prompt("What sum of saving do you have?","0"),
            percent=+prompt("What is percent?","0");

        appData.incomePerMonth=save/100/12*percent;
        alert("My income per month is "+appData.incomePerMonth);
    }
}

checkSavings();