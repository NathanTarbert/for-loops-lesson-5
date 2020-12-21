function bills(months,billsArray){

    var electricity = 0;
    var water = 0;
    var internet = 0;
    var other = 0;

    for(i = 0; i < months; i++){
        let bill = billsArray.shift();
        electricity += bill;
        water += 20;
        internet += 15;
        averageBillSum = bill + 20 + 15;
        other += averageBillSum * 1.20;
    }

    let Average = (electricity + water + internet + other) / months; 

    console.log(`Electricity: ${electricity.toFixed(2)} $`);
    console.log(`Water: ${water.toFixed(2)} $`);
    console.log(`Internet: ${internet.toFixed(2)} $`);
    console.log(`Other: ${other.toFixed(2)} $`);
    console.log(`Average: ${Average.toFixed(2)} $`);

}
bills(5,[68.63,89.25,132.53,93.53,63.22]);