function oddEvenPosition(numberCount,numbersArray){

    var oddSum = 0;
    var oddMin = 0;
    var oddMax = 0;
    var evenSum = 0;
    var evenMin = 0;
    var evenMax = 0;
    var counter = 1;

    if(numberCount == 0){
    
    counter = 0;
    console.log(`Odd Sum: ${oddSum.toFixed(2)}`);
    console.log("Odd Min: No");
    console.log("Odd Max: No");
    console.log(`Even Sum: ${evenSum.toFixed(2)}`);
    console.log("Even Min: No");
    console.log("Even Max: No");
    }

    for(i = 1; i <= numberCount; i += 2){
        var oddNumber = numbersArray.shift();

        oddSum += oddNumber;

        if(oddNumber < oddMin){
            oddMin = oddNumber;
        }

        if(oddNumber > oddMax){
            oddMax = oddNumber;
        }
        

    for(j = 1; j <= numberCount; j++){
        var evenNumber = numbersArray.shift();   
        
        if(evenNumber == undefined){
            break;
        }
        evenSum += evenNumber;

        if(evenNumber < evenMin){
            evenMin = evenNumber;
        }

        if(evenNumber > evenMax){
            evenMax = evenNumber;
        }
        break;
    }  
    }
    if(counter != 0){
    console.log(`Odd Sum: ${oddSum.toFixed(2)}`);
    console.log(`Odd Min: ${oddMin.toFixed(2)}`);
    console.log(`Odd Max: ${oddMax.toFixed(2)}`);
    console.log(`Even Sum: ${evenSum.toFixed(2)}`);
    console.log(`Even Min: ${evenMin.toFixed(2)}`);
    console.log(`Even Max: ${evenMax.toFixed(2)}`);
    }
}
oddEvenPosition(5,[3,-2,8,11,-3]);
// oddEvenPosition(0);