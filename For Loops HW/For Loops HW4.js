function numbersEndingInSeven(){

    var printSingleLine = "";

    for(i = 7; i < 1000; i += 10){
        printSingleLine += i + " ";
    
    }
    console.log(`${printSingleLine}`);

}
numbersEndingInSeven();