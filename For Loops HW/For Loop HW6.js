function grade(student,gradeArray){

    var averageGrade = 0;
    var studentTwos = 0;
    var studentThrees = 0;
    var studentFours = 0;
    var studentFives = 0;
    var topStudent = 0;
    var fail = 0;

    for(i = 0; i < student; i++){
    var grade = gradeArray.shift();
    averageGrade += grade;
    
    if(grade > 0 && grade <= 2.99){
        studentTwos++;
    }else if(grade >= 3 && grade <= 3.99){
        studentThrees++;
    }else if(grade >= 4 && grade <= 4.99){
        studentFours++;
    }else if(grade >= 5){
        topStudent++;
    }
           
    }
    studentFives = (topStudent / student) * 100;
    studentFours = (studentFours / student) * 100;
    studentThrees = (studentThrees / student) * 100;
    fail = (studentTwos / student) * 100;
    average = averageGrade / student;
    
        console.log(`Top Students: ${studentFives.toFixed(2)}%`);
        console.log(`Between 4.00 and 4.99: ${studentFours.toFixed(2)}%`);
        console.log(`Between 3.00 and 3.99: ${studentThrees.toFixed(2)}%`);
        console.log(`Fail: ${fail.toFixed(2)}%`);
        console.log(`Average: ${average.toFixed(2)}`);
        
}

grade(10,[3.0,2.99,5.68,3.01,4,4,6.0,4.50,2.44,5]);
// grade(2,[5.28,1.77]);