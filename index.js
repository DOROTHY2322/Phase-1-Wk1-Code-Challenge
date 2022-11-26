//generating grades given the scores.
function grading(score){
    let grade;
    if( score > 79){
        grade = 'A';
    }
    else if(score >=60 && score <=79){
        grade = 'B';
    }
    else if(score >=49 && score <= 59){
        grade = 'C';
    }
    else if(score >=40 && score <=49){
        grade = 'D';
    }
    else{
        grade ='E';
    }
    console.log(grade);
    return grade;
}
grading(19)
grading(40)
grading(55)
grading(75)
grading(90)

// speed detector code challenge
function speedDetector(speed){
    
}


