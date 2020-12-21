function backToThePast(money,year){

    var legacyMoney = money;
    age = 17;
    for(i = 1800; i <= year; i++){
        age++;
        if(i % 2 == 0){
            legacyMoney = legacyMoney - 12000;

        }else if(i % 2 == 1){
            legacyMoney = legacyMoney - (12000 + (age * 50));
        }
    }
        if(legacyMoney > 0){
            console.log(`Yes! He will live a carefree life and will have ${legacyMoney.toFixed(2)} dollars left.`);
        }else {
            console.log(`He will need ${Math.abs(legacyMoney).toFixed(2)} dollars to survive.`);
        }

}
backToThePast(50000,1902);