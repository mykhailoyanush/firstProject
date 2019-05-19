"use-strict"
let money;
let time;
money=prompt("Ваш бюджет на месяц?","5000");
time=prompt("Введите дату в формате YYYY-MM-DD","2019-05-19");
let key=prompt("Введите обязательную статью расходов в этом месяце","");
let resultKey=prompt("Во сколько обойдется?","0");
let appData={
    budget:money,
    timeData:time,
    expenses:{
        key:resultKey
    },
    optionalExpenses:{
        
    },
    income:[],
    saving:""
};
alert(appData.budget/30);