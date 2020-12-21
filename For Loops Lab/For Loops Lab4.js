function vowelSum(n,characterArray){
    
    
    var sum = 0;
    for(i = 0; i < n; i++){
        var character = characterArray.shift().toLowerCase();
    if(character == "a"){
        sum +=1;
    }
    else if(character == "e"){
        sum +=2;
    }
    else if(character == "i"){
        sum +=3;
    }
    else if(character == "o"){
        sum +=4;
    }
    else if(character == "u"){
        sum +=5;
    }
   }
    console.log(sum);

}

vowelSum(3,["i","x","u"]);