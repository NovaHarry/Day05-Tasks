// A. Print Odd numbers in an Array using Anonymous function :

var Odd = function ()
{
  let A = [1,2,3,4,5,6,7,8,9,10];
  
  for(let i = 0; i < A.length; i++)
  {
  if(A[i] % 2 ==1)
  {
    console.log(A[i]);
  }
  }
}
Odd();

// Output:

// 1 3 5 7 9




//B. Convert all the string to title caps in an array using Anonymous function :


var TitleCaps = function ()
{
let A = ["Convert all the string to title caps in an array" ];

let str = A[0].split(" ");

for (var i = 0; i < str.length; i++) 
{
str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
console.log(str.join(' '));
}
TitleCaps();


// Output:

// Convert All The String To Title Caps In An Array



// C. Sum of all numbers in an Array using Anonymous function :


var add = function ()
{
  let A = [1,2,3,4,5,6,7,8,9,10];
  let sum = 0;
  for(let i = 0; i < A.length; i++)
  {
    sum = sum + A[i];
  }
  console.log(sum);
}
add();

// Output:

// 55

// D. Return all prime numbers in an array using Anonymous function :


var Primenum = function ()
{
let A = [1,2,3,4,5,6,7,8,9,10];
let ct = 0;

for(let i = 0; i < A.length; i++)
{
  for(let j =1; j <= A[i]; j++)
  {
    if(A[i] % j ==0)
    {
      ct++;
    }
  }
  if(ct == 2)
  {
    console.log(A[i]);
  }
  ct=0;
}
}
Primenum();

// Output:

// 2 3 5 7


//E. Return all the palidromes in an array using Anonymous function :



var Palindrome = function ()
{
let A = ["121", "hai", "radar", "guvi", "level", "rotor", "reviver", "madam", "1221", "welcome"];
let B = "";
let rev = [];
for (var i = 0; i < A.length; i++) 
{
  B = A[i].split("").reverse().join("");
  rev.push(B);
  if(A[i] == rev[i])
  {
    console.log(A[i]);
  }
}
}
Palindrome();

// Output:

// 121 radar level rotor reviver madam 1221



//F. Return Median of two sorted arrays of the same size using Anonymous function :



var Median = function ()
{
let A = [1,3,2,4];
let B = [5,6,7,8];
let sum = 0;
let len = A.length + B.length;
let array = A.concat(B);
array.sort((a, b) => a - b);
let temp = 0;

if(len % 2 == 0)
{
  sum = array[array.length/2-1];
  temp = sum;
  array.reverse();
  sum = array[array.length/2-1] +temp;
  console.log(sum/2);
}
else
{
  sum = Math.ceil(array.length/2);
  console.log(array[sum-1]);
}
}
Median();

// Output :

// 4.5



//G. Remove duplicate elements from an array using Anonymous function :


var Duplicates = function ()
{
let A = [1,2,3,2,1,4,5,6,5];
let B = [...new Set(A)];
console.log(B);
}

Duplicates();

// Output:

// 1, 2, 3, 4, 5, 6


// H. Rotate an array by K times using Anonymous function :

var Rotation = function ()
{
let A = [1,2,3,4,5,6,7 ];
let k = 3;

for(let i = A.length-k; i < A.length ; i++)
{
  console.log(A[i]);
}
for(let i = 0; i < A.length-k; i++)
{
  console.log(A[i]);
}
}
Rotation();

// Output:

// 5 6 7 1 2 3 4


// A1. Print Odd numbers in an Array using IIFE :

(function () 
{
let A = [1,2,3,4,5,6,7,8,9,10];
  
  for(let i = 0; i < A.length; i++)
  {
  if(A[i] % 2 ==1)
  {
    console.log(A[i]);
  }
  }
})();

// Output:

// 1 3 5 7 9

//B1. Convert all the string to title caps in an array using IIFE :

(function () 
{
let A = ["Convert all the string to title caps in an array" ];

let str = A[0].split(" ");

for (var i = 0; i < str.length; i++) 
{
str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}
console.log(str.join(' '));
})();

// Output:

// Convert All The String To Title Caps In An Array


// C1. Sum of all numbers in an Array using IIFE :

(function () 
{
let A = [1,2,3,4,5,6,7,8,9,10];
  let sum = 0;
  for(let i = 0; i < A.length; i++)
  {
    sum = sum + A[i];
  }
  console.log(sum);
})();

// Output:

// 55

// D1. Return all prime numbers in an array using IIFE :

(function () 
{
let A = [1,2,3,4,5,6,7,8,9,10];
let ct = 0;

for(let i = 0; i < A.length; i++)
{
  for(let j =1; j <= A[i]; j++)
  {
    if(A[i] % j ==0)
    {
      ct++;
    }
  }
  if(ct == 2)
  {
    console.log(A[i]);
  }
  ct=0;
}
})();

// Output:

// 2 3 5 7

//E1. Return all the palidromes in an array using IIFE :

(function ()
{
let A = ["121", "hai", "radar", "guvi", "level", "rotor", "reviver", "madam", "1221", "welcome"];
let B = "";
let rev = [];
for (var i = 0; i < A.length; i++) 
{
  B = A[i].split("").reverse().join("");
  rev.push(B);
  if(A[i] == rev[i])
  {
    console.log(A[i]);
  }
}
})();

// Output:

// 121 radar level rotor reviver madam 1221


//F1. Return Median of two sorted arrays of the same size using IIFE :

(function ()
{
let A = [1,3,2,4];
let B = [5,6,7,8];
let sum = 0;
let len = A.length + B.length;
let array = A.concat(B);
array.sort((a, b) => a - b);
let temp = 0;

if(len % 2 == 0)
{
  sum = array[array.length/2-1];
  temp = sum;
  array.reverse();
  sum = array[array.length/2-1] +temp;
  console.log(sum/2);
}
else
{
  sum = Math.ceil(array.length/2);
  console.log(array[sum-1]);
}
})();

// Output :

// 4.5

//G1. Remove duplicate elements from an array using IIFE :

(function ()
{
let A = [1,2,3,2,1,4,5,6,5];
let B = [...new Set(A)];
console.log(B);
})();

// Output:

// 1, 2, 3, 4, 5, 6

// H1. Rotate an array by K times using IIFE :

(function ()
{
let A = [1,2,3,4,5,6,7 ];
let k = 3;

for(let i = A.length-k; i < A.length ; i++)
{
  console.log(A[i]);
}
for(let i = 0; i < A.length-k; i++)
{
  console.log(A[i]);
}
})();

// Output:

// 5 6 7 1 2 3 4

// A2. Print Odd numbers in an Array using Arrow function :

var Odd = (A) =>{
  for(let i = 0; i < A.length; i++)
  {
  if(A[i] % 2 ==1)
  {
    console.log(A[i]);
  }
  }
}
Odd([1,2,3,4,5,6,7,8,9,10]);

// Output:

// 1 3 5 7 9

//B2. Convert all the string to title caps in an array using Arrow function :

var TitleCaps = (A,str) =>{
  str = A[0].split(" ");
  
  for (var i = 0; i < str.length; i++) 
  {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(' '));
  }
  TitleCaps(["Convert all the string to title caps in an array" ]);


// Output:

// Convert All The String To Title Caps In An Array


// C2. Sum of all numbers in an Array using Arrow function :


var add = (A,sum) =>
{
  sum = 0;
  for(let i = 0; i < A.length; i++)
  {
    sum = sum + A[i];
  }
  console.log(sum);
}
add([1,2,3,4,5,6,7,8,9,10]);

// Output:

// 55

// D2. Return all prime numbers in an array using Arrow function :


var Primenum = (A,ct) =>
{
  ct = 0;

for(let i = 0; i < A.length; i++)
{
  for(let j =1; j <= A[i]; j++)
  {
    if(A[i] % j ==0)
    {
      ct++;
    }
  }
  if(ct == 2)
  {
    console.log(A[i]);
  }
  ct=0;
}
}
Primenum([1,2,3,4,5,6,7,8,9,10]);

// Output:

// 2 3 5 7

//E2. Return all the palidromes in an array using Arrow function :



var Palindrome =(A,B,rev) =>
{
  rev=[];
for (var i = 0; i < A.length; i++) 
{
  B = A[i].split("").reverse().join("");
  rev.push(B);
  if(A[i] == rev[i])
  {
    console.log(A[i]);
  }
}
}
Palindrome(["121", "hai", "radar", "guvi", "level", "rotor", "reviver", "madam", "1221", "welcome"]);

// Output:

// 121 radar level rotor reviver madam 1221
