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


let obj = new ParseUrl("https://my-ffw-example.com/dir/subdir/file.html#hash");

alert(obj.hash);
alert(obj.hostname);
alert(obj.pathname);

// this Return 
// { hash:"#hash", host:"my-ffw-example.com", hostname:"my-ffw-example.com", 
// href:"https://my-ffw-example.com/dir/subdir/file.html#hash", origin:"https://my-ffw-example.com", 
// password:"", pathname:"/dir/subdir/file.html", 
// port:"", protocol:"http:", search: "", username: "" }


// 3-rd question

const data = {
	names: ['A', 'B', 'C'],
	enrolled: "",
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
  if(enrolled = !enrolled)
  { 
    return false; 
  } else {
    if(enrolled == enrolled)
    return true;
  }
}
console.log(empty(false));
console.log(empty(true));
console.log(empty());

let marks = data.marksss;
console.log(marks);

// 4-th question
let functionality = {
  isActive: false,
  checkTriggered:function() {
		// some code
  },
  clickListener: function(event) {
    event.preventDefault();
    this.isActive = !this.isActive;
    this.checkTriggered();
  },
  addListeners: function() {
    document
    .querySelectorAll(selectors: 'a')
    .addEventListener(this.clickListener);
  }
};
functionality.addListeners();


// 5-th question

// i know 2 types

$(".articles .node");
$(".articles div");
// $("div.node"); -- this one select all .node classes

// 6-th question

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))

// Output
{
  username: '',
  email: '',
  userId: ''
}
/*
<div class="user">
	<h3 class="user-name">{username}</h3>
	<div class="user-email">{email}</div>
	<div class="user-email">{userId}</div>
</div>


*/

// 7-th question

// componentWillMount
// componentWillReceiveProps
// componentWillUpdate
// Because of this, we will be adding an “UNSAFE_” prefix to these lifecycles.
// sometimes it is needed a little more control over how and when your component is updating.

// 8-th question

// button 1(First) is not correct because it does not bound to this class, 
// the correct form is for button 2(Second) <button onClick={this.handler1}>Second</button> or in case this.handler1 = this.handler1.bind(this), 
// so <button onclick="(this.handler1)" is for html, not for react,
// also it returns undefined,
// this.handler2 = this.handler1.bind(this) is not correct it must be like this for example
// this.handler1 = this.handler1.bind(this)

/* 
button 3(third) is not correct
for correct form we can put
	this.handler4 = this.handler4.bind(this)
	<button onClick={this.handler4}>Third</button>

<button onClick={this.handler3}>Fourth</button>
We are using arrow functions because they bind automatically to the context
*/