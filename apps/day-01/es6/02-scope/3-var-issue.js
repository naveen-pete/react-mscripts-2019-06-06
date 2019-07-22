// Issues with ‘var’ declarations
var x = 1;
{
   var x = 2;
}
console.log(x);  // logs 2
