function greeting() {
    console.log('Hey There');
}
//prompt 2
function reverse() {
    let reverse2 = prompt("Pick a 2 digit number:");

	reverse2 = reverse2 + "";
    console.log(reverse2.split("").reverse().join(""));
}

//prompt 3
function palindrome(str) {

    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;

    for (var i = 0; i < len/2; i++) {

      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   palindrome("A man, a plan, a canal. Panama");

//prompt 4 
function alphabet_order() {
    let str = prompt("Type a word:");

    console.log(str.split('').sort().join(''));
}

//prompt 5
function lowerCase(str) {
    console.log(str.toLowerCase());
}

//prompt 6
function upperCase(str){
    var str = 'lionel messi'; 
    var string = str.toUpperCase(); 
    document.write(string); 
}

//prompt 7
function findLongestWord(str) {

    var strSplit = str.split(' ');
    var longestWord = 0;

    for(var i = 0; i < strSplit.length; i++){

      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("Welcome to the developmental shop provided by Code Differently");

//prompt 8
function multiply(a, b) {
    console.log(a * b);
}

//prompt 9
function soccer() {
    let soccerArray = ['Barcelona', 'Juventus', 'Messi', 'Ronaldo'];
    console.log(soccerArray);
}

//prompt 10
function repeated(){
    let str = prompt("Type word with 2 characters: ")

    const result = [];
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
  
    if (strArr != null) {
        strArr.forEach((elem) => {
        result.push(elem[0]);
        });
    }
    console.log(result);
}

//prompt 11
function DogAgeCounter() {
    let pups = prompt("How many dogs do you have?");
    let count = 0;

    for(let i = 0; i < pups; i++){
        count++;
        let ageNum = prompt("How old is dog " + count + "?");
        let dogAge = ageNum * 7;
        console.log("Your dog #" + count + " is " + dogAge + " years old in dog years!");
    }
}