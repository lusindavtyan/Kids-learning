  //  NUMBERS
var generateArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var i;
var temp;
var mySec = 0;
var t;

// time counting
function countSec(){

    mySec++;
    t = setTimeout(countSec, 1000);
    document.getElementById("seconds").innerHTML = mySec;
}

//fill in all cells with random numbers
function fillCells(){

    countSec();
    for(i = 0; i < 50; i++){

     var x = parseInt(0+ Math.random() * 25);
     var y = parseInt(0+ Math.random() * 25);

     temp = generateArray[x];
     generateArray[x] = generateArray[y];
     generateArray[y] = temp;

 }
    for(i = 1; i < 26; i++){

    document.getElementById("cell" + i).innerHTML = generateArray[i - 1];  
 } 

}
    var generateNewArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    var incorrectValue = 0; 
    var m = 0;

//decide right or wrong sequence
function arrangeNumbers(myNum){

    if(generateNewArray[m] == document.getElementById(myNum).innerHTML){

    document.getElementById(myNum).style.color = "green"; 
    m++;
 }
    else {

    document.getElementById(myNum).style.color = "red"; 
    incorrectValue++
 }
    document.getElementById("btn").innerHTML = incorrectValue;   
}
// times spent on challenge
function stopSeconds(){
    clearTimeout(t);
    mySec = 0; 
}


// LETTERS

var generateArrayLetters = ["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var i;
var temp;
var mySec = 0;
var t;

// time counting
function countSec(){
    mySec++;
    t = setTimeout(countSec, 1000);
    document.getElementById("seconds").innerHTML = mySec;
}
//fill in all cells with random letters
function fillCellsLetters (){

countSec();
for(i = 0; i < 50; i++){

     var x = parseInt(0+ Math.random() * 25);
     var y = parseInt(0+ Math.random() * 25);

     temp = generateArrayLetters [x];
     generateArrayLetters [x] = generateArrayLetters [y];
     generateArrayLetters [y] = temp;
 } 

for(i = 1; i < 26; i++){

    document.getElementById("cell" + i).innerHTML = generateArrayLetters [i - 1];  
 } 

}
    var generateNewArrayLetters = ["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var incorrectValue = 0; 
    var m = 0;

//decide right or wrong sequence
function arrangeLetters(myLetters){

    if(generateNewArrayLetters[m] == document.getElementById(myLetters).innerHTML){

    document.getElementById(myLetters).style.color = "green"; 
    m++;
 }
       else{

    document.getElementById(myLetters).style.color = "red"; 
    incorrectValue++
 }
    document.getElementById("btn").innerHTML = " " + incorrectValue;   
}
// times spent on challenge
function stopSeconds(){
    
    clearTimeout(t);
    mySec = 0;
}