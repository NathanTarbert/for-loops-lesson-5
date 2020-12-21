function zigZagSum(n,arrayOfNumbers){

    sum = 0;

    for(i = 0; i < n; i++){
    const number = arrayOfNumbers[i];

    if(i % 2 == 0){
        sum += number;
    }else {
        sum -= number;
}
    
}
    console.log(sum);

}



zigZagSum(2,[10,-20]);