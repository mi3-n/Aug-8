var myChild = 'Alexis'
var gender = 'male'

if(gender == 'male'){
    console.log(myChild + ' is my son');
}else{
    console.log(myChild + ' is my daughter');
}

// var prof = 'instructor'
// var prof = 'doctor'
var prof = 'musician'

if(prof === 'instructor'){
    console.log(prof + ' teaches students');
}else if(prof === 'doctor'){
    console.log(prof + ' treats people');
}else if(prof === 'engineer'){
    console.log(prof + ' fixes A/C');
}else{
    console.log('professions do not match');
}

//Logical AND
if(5 === 5 && 4 === 4){
    console.log('condition && is true');
}else{
    console.log('condition && is false');
}

//Logical OR
if(5 === 4 || 3 === 4){
    console.log('condition || is true');
}else{
    console.log('condition || is false');
}

//Logical NOT
if(!false){
    console.log('condition ! is true');
}else{
    console.log('condition ! is false');
}