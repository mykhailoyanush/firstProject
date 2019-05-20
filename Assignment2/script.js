"use-strict"
let money;
let time;
money=+prompt("Ваш бюджет на месяц?","5000");
time=prompt("Введите дату в формате YYYY-MM-DD","2019-05-19");
let appData={
    budget:money,
    timeData:time,
    expenses:{
    },
    optionalExpenses:{
        
    },
    income:[],
    saving:""
};
for(let i=0;i<2;i++){    
let a=prompt("Введите обязательную статью расходов в этом месяце",""),
    b=prompt("Во сколько обойдется?","0");
    if((typeof(a))=='string' && (typeof(a)) !=null && (typeof(b))!=null && 
    a!='' && b !='' && a.length<50){
        console.log("Well");
        appData.expenses[a]=b;
    }
}

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
appData.moneyPerDay=appData.budget/30;
if(appData.moneyPerDay<100){
    console.log("Минимальный уровень достатка");
}else if(appData.moneyPerDay>100 && appData.moneyPerDay<2000){
    console.log("Средний уровень достатка");
}else if(appData.moneyPerDay>2000){
    console.log("Высокий уровень достатка")
}else{
    console.log("Произошла ошыбка");
}