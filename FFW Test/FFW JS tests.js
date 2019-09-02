// 1-st question
console.log(my_variable);
var my_variable = 1;

// Result is undefined , because identificator is declared after(means undeclared). So it reads identificator which is not declared yet.
// If we change like this.

var my_variable = 1;
console.log(my_variable);

// then result will be 1
// Rule is called Reference Error
// This rule will warn when it encounters a reference to an identifier that has not yet been declared.


// 2-nd question


let url = new URL("https://my-ffw-example.com/dir/subdir/file.html#hash");

// this Return 
// { hash:"#hash", host:"my-ffw-example.com", hostname:"my-ffw-example.com", 
// href:"http://my-ffw-example.com/dir/subdir/file.html#hash", origin:"http://my-ffw-example.com", 
// password:"", pathname:"/dir/subdir/file.html", 
// port:"", protocol:"http:", search: "", username: "" }


// 3-rd question

const data = {
	names: ['A', 'B', 'C'],
	enrolled: true,
	marksss: {
		'A' : [1,1,1],
		'B' : [2,2,2],
		'C' : [3,3,3],
	}
};
let names = data.names
console.log(names);

let enrolled = data.enrolled
function empty(enrolled)
{
  if(this.enrolled = !this.enrolled)
  { 
    return false; 
  }
}
console.log(empty());

let marks = data.marksss;
console.log(marks);

// 4-th question



// 5-th question

// i know 3 types

$(".articles .node");
$(".articles div");
$("div.node");