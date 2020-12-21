function equalPairs(n,arrayOfNumbers){

    var sum = 0;
    var result =0;
    var sum1 = 0;
    var sum2 = 0;

    for(let i = 0; i < n; i++){
    let shift = arrayOfNumbers.shift();
    sum1 = sum1 + shift;
    }

    for(let j = 0; j < n; j++){
    let shift = arrayOfNumbers.shift();
    sum2 = sum2 + shift;
    }

    if(sum1 == sum2){
        console.log(`Yes, value=${sum2}`);
    }else {
        result = sum1 - sum2;
        console.log(`No, maxdiff=${result}`);
        
    }

}
equalPairs(2,[-1,0,0,-1]);