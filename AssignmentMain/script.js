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
    saving:true,
    chooseExpenses:function(){
        for(let i=0;i<2;i++){    
            let a=prompt("Введите обязательную статью расходов в этом месяце",""),
                b=prompt("Во сколько обойдется?","0");
        
            if((typeof(a))=='string' && (typeof(a)) !=null && (typeof(b))!=null && 
            a!='' && b !='' && a.length<50){
                console.log("Well");
                appData.expenses[a]=b;
            }
        }
    },
    detectDayBudget:function(){
        appData.moneyPerDay=(appData.budget/30).toFixed(1);
    },
    detectLevel:function(){
        if(appData.moneyPerDay<100){
            console.log("Минимальный уровень достатка");
        }else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
            console.log("Средний уровень достатка");
        }else if(appData.moneyPerDay>2000){
            console.log("Высокий уровень достатка")
        }else{
            console.log("Произошла ошыбка");
        }
    },
    checkSavings:function(){
        if(appData.saving){
            let save=+prompt("What sum of saving do you have?","0"),
                percent=+prompt("What is percent?","0");
    
            appData.incomePerMonth=save/100/12*percent;
            alert("My income per month is "+appData.incomePerMonth);
        }
    },
    chooseOptExpenses:function(){
        let optExpenses;
        for(let i=0; i<3; i++){
            optExpenses=prompt("Статья необязательных расходов?","");
            appData.optionalExpenses[i]=optExpenses;
        } 
    },
    chooseIncome: function(){
        let items=prompt('What income resut?','');
        while(items==null||items==""){
            items=prompt('What income resut?',''); 
        }
        appData.income=items.split(', ');
        
        appData.income.push(prompt('That all?'));
        appData.income.sort();
        console.log('Type income');
        appData.income.forEach(function(element,index,array){
            console.log(++index+') '+element);
        });
        for(var propt in appData){
            console.log(propt + ': ' + appData[propt]);
        }
    }
};