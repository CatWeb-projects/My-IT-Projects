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

function parse_URL(url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function () {
            var ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                len = seg.length,
                i = 0,
                s;
            for (; i < len; i++) {
                if (!seg[i]) {
                    continue;
                }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
}

console.log(parse_URL('https://my-ffw-example.com/dir/subdir/file.html#hash'));

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

document.write(user.jason); // Output: user
document.write(user.jason.name); // Output: name
document.write(user.jason.e_mail); // Output: e_mail

// 7-th question

// componentWillMount
// componentWillReceiveProps
// componentWillUpdate
// Because of this, we will be adding an “UNSAFE_” prefix to these lifecycles

// 8-th question

// button 1 is equal to button 4 and button 2 with 3
// When we click button 1 , it calls alert(this.text) wich is 'This is an example text' will appear as alert.
// handler  is equal with handler 3 so => button 1 = button 4
// When we click button 2 handler 1 returns handler 2 , so => button 2 = button 3 