console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if(count == 0){
        count = 1;
    }
    if(count < 0){
        count += 1;
    }
    for (let i = 0; i <= count; i++){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}
printOdds(10);
printOdds(50);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let oldEnough = (`Congrats ${userName} you can drive`);
    let tooYoung = (`Sorry ${userName} but you have to be at least 16`);

    if(age < 16){
        console.log(tooYoung);
    }
    else{
        console.log(oldEnough);
    }
}
checkAge("Marry", 44);
checkAge("Matthew", 16);
checkAge("Joe", 56);

//Exercise 3 
function checkQuadrant(x,y){
    if(x > 0 && y > 0){
        return 'Quadrant 1';
    }else if (x < 0 && y > 0){
        return 'Quadrant 2';
    } else if ( x < 0 && y < 0){
        return 'Quadrant 3';
    } else if (x > 0 && y < 0){
        return 'Quadrant 4';
    } else if (x == 0 && y != 0){
        return 'X Axis';
    } else if (x != 0 && y == 0){
        return 'Y Axis';
    }else {
        return 'Origin';
    }
}
console.log(checkQuadrant(0,3));
console.log(checkQuadrant(-3,0));
console.log(checkQuadrant(0,0));
console.log(checkQuadrant(1,-5));
console.log(checkQuadrant(-5,3));
console.log(checkQuadrant(1,8));
console.log(checkQuadrant(-8,-3));

//Exercise 4 
function validTriangle(a,b,c){
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle (a,b,c){
    let isValid = validTriangle(a,b,c);
    if(isValid){
        if(a == b && b ==c){
            console.log('Equalateral');
        }
        else if (a ==b || b == c || a ==c ){
            console.log('Isosceles');
        }
        else{
            console.log('Not a valid triangle');
        }
    }
}
checkTriangle(1,2,3);
checkTriangle(5,6,8);
checkTriangle(3,2,1);
checkTriangle(3,3,5);
checkTriangle(1,1,2);

//Exercise 5 
function dataUsage(planLimit,day, usage){
    let periodLength = 30;
    let currentAvg = usage/ day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength- day;
    let projectedUsage = remainingDays * currentAvg;
    let statusMsg; 

    console.log(`${day} days used ${remainingDays} days remaining`);
    console.log(`average project used ${projectedAvg} a day`);
    console.log(`Your remaining data is ${remainingData}`);

    if(currentAvg > projectedAvg){
        statusMsg = "Exceeding";
    }
    else if (currentAvg < projectedAvg){
        statusMsg = "Under";
    }
    else{
        statusMsg = 'A1';
    }
    console.log(`${statusMsg}`);

}
dataUsage(50,12,25);
