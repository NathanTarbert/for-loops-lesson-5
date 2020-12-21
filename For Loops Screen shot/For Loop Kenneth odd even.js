function main(n, numArray) {
    var evenSS = 0;
    var minEvens = 0;
    var maxEvens = 0;
    var oddSS = 0;
    var minOdds = 0;
    var maxOdds = 0;
    for (var i = 1; i <= n; i++) {
        currentValue = numArray.shift();
        if (i % 2 == 0) {
            //even positions
            evenSS += currentValue;
            if (minEvens > currentValue) {
                minEvens = currentValue;
            }
            if (maxEvens < currentValue) {
                maxEvens = currentValue;
            }
        } else {
            //odd positions
            oddSS += currentValue;
            if (minOdds > currentValue) {
                minOdds = currentValue;
            }
            if (maxOdds < currentValue) {
                maxOdds = currentValue;
            }
        }
    }
    console.log("Odd Sum: " + oddSS.toFixed(2));
    if (minOdds == 0) {
        console.log("Odd Min: No");
    } else {
        console.log("Odd Min: " + minOdds.toFixed(2));
    }
    if (maxOdds == 0) {
        console.log("Odd Max: No");
    } else {
        console.log("Odd Max: " + maxOdds.toFixed(2));
    }
    console.log("Even Sum: " + evenSS.toFixed(2));
    if (minEvens == 0) {
        console.log("Even Min: No");
    } else {
        console.log("Even Min: " + minEvens.toFixed(2) + " ");
    }
    if (maxEvens == 0) {
        console.log("Even Max: No");
    } else {
        console.log("Even Max: " + maxEvens.toFixed(2));
    }
}

main(5[3,-2,8,11,-3]);