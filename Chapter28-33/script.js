//chapter 28:use interpoletion( write out variables with `` and ${})
let name = 'Ivan',
    age = 20,
    mail = 'example@gmail.com';
//document.write(`Користувач  ${name}  ${age}  років. Email: ${mail}`);


//chapter 29: use let because on different iteration create new variables  
function makeArray(){
    var items =[];

    for(let i=0;i<10;i++){
        var item = function(){
            console.log(i);
        }
        items.push(item);
    }

    return items;
}

var array = makeArray();

array[1]();
array[3]();
array[7]();

//chapter 30: directional function(=>)
let fun = (a, b) => {
    console.log(this);
};
//fun();

let obj = {
    number:5,
    sayNumber: function(){
        let say = () =>{
            console.log(this);
        };

      say();
    }
};

//obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let show = () =>{
        console.log(this);
    };
    show();
});

//Chater 31: Parameters by default

function calcOrDouble(number, basis =2){
    //basis = basis || 2;
    console.log(number+ basis);
}

calcOrDouble(3, 5);
calcOrDouble(6);

//Chapter 32: Classes

class Rectangle{
    constructor(height, width = 7){
        this.height = height;
        this.width = width;
    }

    calsArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(10);

console.log(square.calsArea());


//Chapter 33: Spread
let video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blogs, 'vk', 'facebook'];

    console.log(internet);

    function log(a,b,c){
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(a + b + c);
    }

    let numbers =[2,5,7];

    log(...numbers);