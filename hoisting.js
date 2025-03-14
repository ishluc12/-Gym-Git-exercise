console.log(greating())

function greating() {
  var  myName="lucas";
  console.log(`Hi my name is ${myName}`)
}

function sumOfNumbers(s){
  let sum = s.match(/\d/g).map(Number).reduce((a, b) => a + b, 0);
  return sum;
}

console.log(sumOfNumbers('1HSH8923njsjsDAD'))


function check(string){
  let x= string.split('').reverse('').join('');
  if(x==string){
    return true;
  } else{
    return false
  }
  
}

console.log(check("noon"))

let a=[1,2,3,4,4];
function bigNumber(num){
return num.reduce((a,b)=>a>b?a:b);
}

console.log(bigNumber(a))

let vowel="baby john";

function vowelCheck(s) {
  let w = s.match(/[aeiou]/gi); 
  return w ? w.length : 0; 
}
console.log(vowelCheck(vowel))


function double(q){
  return q.map(num=>num*num)
}

console.log(double([1,2,3,4]))

const filterArr=(a,b)=>{
return a.filter(nums=>nums===b);
}

const arr=[1,2,3,4];
console.log(filterArr(arr,3))


function factorial(n){
  return n?n*factorial(n-1):1;
}

console.log(factorial(5))



 

var trip=23;
var trip=45;
console.log(trip)



function findMirror(str1, str2) {
  
  let str = str2.split('').reverse().join('');
  return str1 === str ? true : false;
} 

// Example usage:
const result = findMirror("hello", "olleh-");
console.log(result); // Output: ['olleh', 'dlrow']


