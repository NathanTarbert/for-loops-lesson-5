function rollercoaster(capacity,minAge,numInLine,ridersAge){

    var validRiders = 0;

    for(i = 0; i < numInLine; i++){
        if(ridersAge[i] >= minAge) {
            validRiders++;
        }
    }
        if(validRiders >= capacity){
            console.log(`The rollercoaster departures`);
        }else{
            console.log(`Waiting...`);
        }

}

rollercoaster(2,10,3,[15,12,8]);