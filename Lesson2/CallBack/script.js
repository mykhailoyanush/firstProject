function callBack(test,func){
    console.log("Test callBack = "+test);
    func();
}
function myFunc(){
    console.log("Test myFunc");
}
callBack("TestCallBack",myFunc);