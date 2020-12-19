function evenOrOdd (a) {
    if (a%2 == 0){
        console.log(a + " Jest liczbą parzystą");
    } else {
        console.log(a + " Jest liczbą nieparzystą");
    }
}

evenOrOdd(2);

function dividedBy3() {
    for (var i = 1; i <=100; i++){
        if (i%3 == 0){
        console.log(i)
        }
    }
}

dividedBy3();