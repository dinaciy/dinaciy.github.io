var buffetPrice = function (age) {

    //var price=0;

    if (age < 10) {
        return (20);
        //price = 20;

    }
    else if ((age >= 10) && (age < 21)) {
        return (30);
        //price  = 30;

    } 
        return (40);
    //price = 40;
}

//return (price);


console.log("age=9: $" + buffetPrice(9));
console.log("age = 15: $" + buffetPrice(15));
console.log("age=25: $" + buffetPrice(25));

/*
if (age<10) {
    console.log("$20");
}

else if (age>10 || age<21) {
    console.log("$30");
}
else (age>21) {
    console.log("$40");
}

/*console.log("I am in borwser!")

var hungry = true;
var thirsty = true;

if (hungry){
    console.warn("I am very hungry");
}

if (thirsty){
    console.error("but I'm thirsty");
}

/*
if (hungry) {
    console.warn("I am very hungry");

} else if(thirsty) {
    console.error("but i am thirsty");

} else if(
    console.log("I am bored");
}
*/