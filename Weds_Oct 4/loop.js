var i=0;
while (i<10) {
    console.log("i= %d", i);
    i++;
}


var mul= function(n, m){
    return (n*m);
}

for (var outer= 2; outer<13; outer++) {
    console.error("Multiplication table:%d", outer)
    for(var inner=1; inner<13; inner++){
        console.log("%d * %d", outer, inner, mul(outer,inner));
    }
}