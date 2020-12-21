function minMaxNumber(n, numArray){

    //check to see if the array is empty and if it is empty, return not valid array.
    var minNum = numArray[0];
    var maxNum = numArray[0];

    for(var i = 0; i < n; i++){
        var theNum = numArray.shift();
        if(theNum > maxNum){
            maxNum = theNum;
        
      }else if(theNum < minNum){
            minNum = theNum;
        }
    }
    console.log(`Min number: ${minNum}`);
    console.log(`Max number: ${maxNum}`);

}

minMaxNumber(3,[10,350,50]);

//numArray.length;