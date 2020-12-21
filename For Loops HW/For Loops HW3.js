function hospital(days,patientsArray){

    var doctors = 7;
    var treatedPatients = 0;
    var untreatedPatients = 0;
    var counter = 0;

    for(i = 0; i < days; i++){
   var patient = patientsArray.shift();
    counter++;
    
    if((counter % 3 == 0) && (untreatedPatients > treatedPatients)){
        doctors++;
    }
        if(patient <= doctors){
            treatedPatients += patient;
        }else if(patient > doctors){
            treatedPatients += doctors;
            untreatedPatients += patient - doctors;
    }
    }
        console.log(`Treated patients: ${treatedPatients}.`);
        console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospital(4,[7,27,9,1]);