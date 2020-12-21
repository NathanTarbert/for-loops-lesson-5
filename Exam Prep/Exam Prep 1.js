function shopping(restTime,orderPrice,softwarePrice,whiteFrappe){

    let relaxationTime = restTime - 15;
    let hardwareBudget = orderPrice * 3;
    let ComputerHardwareBudget = softwarePrice * 2;
    let coffeePrice = ComputerHardwareBudget + hardwareBudget + whiteFrappe;

    console.log(coffeePrice.toFixed(2));
    console.log(relaxationTime);


}
shopping(20,2,4,3);