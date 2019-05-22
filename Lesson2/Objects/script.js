let options={
    width:1024,
    height:1024,
    name:"Kenny"
}
console.log(options);
options.bool=true;
options.colors={
    border: "red",
    bg: "yellow"
}
console.log(options);
delete options.bool;
for(let key in options){
    console.log("Key - " + key + ", Value - "+options[key])
}
console.log("Count keys = "+Object.keys(options).length);