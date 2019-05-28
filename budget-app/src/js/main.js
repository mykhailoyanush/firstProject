let btnStart=document.getElementById('start'),
    budgetValue=document.querySelector("div[class='budget-value']"),
    elems = document.querySelectorAll("div[class*='value']"),
    inputs =document.getElementsByClassName('expenses-item'),
    approve=document.getElementsByTagName('button')[0],
    optExpValue=document.getElementsByClassName('optionalexpenses-value')[0],
    optExpBtn=document.getElementsByTagName('button')[1],
    calc=document.getElementsByTagName('button')[2],
    enters=document.querySelectorAll("input[class='optionalexpenses-item']"),
    titles=document.querySelector("input[class='choose-income']"),
    checkBox=document.querySelector("input[id='savings']"),
    sum=document.querySelector("input[class='choose-sum']"),
    percent=document.querySelector("input[class='choose-percent']"),
    year=document.querySelector("input[class='year-value']"),
    month=document.querySelector("input[class='month-value']"),
    day=document.querySelector("input[class='day-value']"),
    expensesValue=document.getElementsByClassName("expenses-value")[0],
    money,
    time;

let buttons = document.getElementsByTagName('button');
for(let i=0; i<buttons.length;i++){
    if(buttons[i].textContent!='Начать расчет'){
        buttons[i].disabled=true;
    }
}
btnStart.addEventListener('click',function(){
    money=+prompt("Ваш бюджет на месяц?","5000");
    time=prompt("Введите дату в формате YYYY-MM-DD","2019-05-19");

    while(isNaN(money) || money=="" || money==null){
        money=+prompt("Ваш бюджет на месяц?","5000");
    }
    appData.budget=money;
    appData.timeData=time;
    budgetValue.textContent=money.toFixed();
    year.value=new Date(Date.parse(time)).getFullYear();
    month.value=new Date(Date.parse(time)).getMonth() + 1;
    day.value=new Date(Date.parse(time)).getDate();

    for(let i=0; i<buttons.length;i++){
        if(buttons[i].textContent!='Начать расчет'){
            buttons[i].disabled=false;
        }
    }
});

approve.addEventListener('click',function(){
    let sum=0;
    
    for(let i=0;i<inputs.length;i++){    
        let a=inputs[i].value;
            b=inputs[++i].value;
    
        if((typeof(a))=='string' && (typeof(a)) !=null && (typeof(b))!=null && 
        a!='' && b !='' && a.length<50){
            console.log("Well");
            appData.expenses[a]=b;
            sum += +b;
        }else{
            i=i-1;
        }
    }
    expensesValue.textContent=sum;
});

optExpBtn.addEventListener('click',function(){
    for(let i=0; i<enters.length; i++){
        let a=enters[i].value;            
        appData.optionalExpenses[i]=a;
        optExpValue.textContent+= appData.optionalExpenses[i] + " ";
    }
    
    
});

calc.addEventListener('click', function(){
    if(appData.budget != undefined){
        appData.moneyPerDay=((appData.budget-expensesValue.textContent)/30).toFixed(1);
        document.getElementsByClassName('daybudget-value')[0].textContent=appData.moneyPerDay;

        if(appData.moneyPerDay<100){
            document.getElementsByClassName('level-value')[0].textContent="Минимальный уровень достатка";
        }else if(appData.moneyPerDay>=100 && appData.moneyPerDay<2000){
            document.getElementsByClassName('level-value')[0].textContent="Средний уровень достатка";
        }else if(appData.moneyPerDay>=2000){
            document.getElementsByClassName('level-value')[0].textContent="Высокий уровень достатка";
        }else{
            document.getElementsByClassName('level-value')[0].textContent="Произошла ошыбка";
        }
    }else{
        document.getElementsByClassName('daybudget-value')[0].textContent="Произошла ошыбка";
    }
    
});

titles.addEventListener('change', function(){
    let items=titles.value;
    appData.income=items.split(', ');
    document.getElementsByClassName('income-value')[0].textContent=appData.income;
});

checkBox.addEventListener('click', function(){
    if(appData.saving==true){
        appData.saving=false;
    }else{
        appData.saving=true;
    }
});

sum.addEventListener('input', function(){
    if(appData.saving == true){
        let suma = +sum.value,
            percents = +percent.value;

        appData.incomePerMonth=suma/100/12*percents.toFixed(1);
        appData.incomePerYear=suma/100*percents.toFixed(1);

        document.getElementsByClassName('monthsavings-value')[0].textContent=appData.incomePerMonth;
        document.getElementsByClassName('yearsavings-value')[0].textContent=appData.incomePerYear;    
    }
});

percent.addEventListener('input', function(){
    if(appData.saving == true){
        
    }
});

let appData={
    budget:money,
    timeData:time,
    expenses:{
    },
    optionalExpenses:{
        
    },
    income:[],
    saving:false
};