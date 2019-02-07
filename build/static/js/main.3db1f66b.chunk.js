(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},26:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),c=a(32),s=a(34),i=a(33),m=a(2),u=a(3),h=a(5),b=a(4),d=a(6),p=a(9),E=a(10),f=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("nav",null,r.a.createElement("a",{href:"/",className:"icon-bars"},r.a.createElement(p.a,{icon:E.b})),r.a.createElement("a",{href:"/",className:"icon-login"},r.a.createElement(p.a,{icon:E.e}))),r.a.createElement("h1",{className:"hdg hdg-1 hdg-main"},"Little Free Library"),r.a.createElement("div",{className:"menu"},r.a.createElement("span",null,r.a.createElement("a",{href:"/"},r.a.createElement(p.a,{icon:E.c}),"Add a book")),r.a.createElement("hr",null),r.a.createElement("span",null,r.a.createElement("a",{href:"/"},r.a.createElement(p.a,{icon:E.d}),"Find a little free library"))))}}]),t}(n.Component),k=a(12),y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(k.a)(Object(k.a)(a))),a.state={books:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=document.getElementById("forminput").value;fetch("http://localhost:3001/allBooks").then(function(e){return e.json()}).then(function(e){var n=e.filter(function(e){return e.title.toLowerCase()===a.toLowerCase()});t.props.sendResultsToHome(n),t.setState({books:n})})}},{key:"render",value:function(){return r.a.createElement("form",{className:"search",id:"searchform",onSubmit:this.handleSubmit},r.a.createElement("span",null,"Books close by"),r.a.createElement("button",{type:"submit"},"near 55102")," ",r.a.createElement("input",{id:"forminput",type:"text",placeholder:"search a book title, author or publisher"}))}}]),t}(n.Component),g=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{href:"http://localhost:3000/bookdetails/".concat(this.props.id)},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"/images/"+this.props.genre+".svg",alt:"book genre icon"}),r.a.createElement("h2",null,this.props.title," ",r.a.createElement("span",null,"by ",this.props.author)),r.a.createElement("h3",null,this.props.libraryName&&r.a.createElement(p.a,{icon:E.d})," ",r.a.createElement("address",null,this.props.libraryName))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={books:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card_holder"},this.props.resultsFromHome.map(function(e){return r.a.createElement(g,{genre:e.genres&&e.genres[0],title:e.title.length>40?e.title.substring(0,40)+"...":e.title,author:e.author,libraryName:e.library.libraryName,id:e._id})}))}}]),t}(n.Component),j=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"search-area-page"},r.a.createElement("h4",{className:"search-area"},"Search area"),r.a.createElement("span",{className:"select-area"},r.a.createElement("span",null,"within"),r.a.createElement("select",null,r.a.createElement("option",{selected:!0,value:"2"},"2 miles"),r.a.createElement("option",{value:"5"},"5 miles"),r.a.createElement("option",{value:"10"},"10 miles"),r.a.createElement("option",{value:"20"},"20 miles")),r.a.createElement("span",null,"of"),r.a.createElement("select",null,r.a.createElement("option",{selected:!0,value:"55101"},"55101"),r.a.createElement("option",{value:"55107"},"55107"),r.a.createElement("option",{value:"55146"},"55146"),r.a.createElement("option",{value:"20"},"55103"))),r.a.createElement("br",null),r.a.createElement("button",{className:"done-button"},"Done"))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).filteredResults=function(e){a.setState({books:e}),console.log(a.state.books)},a.state={books:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3001/allBooks").then(function(e){return e.json()}).then(function(t){e.setState({books:t})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(y,{sendResultsToHome:this.filteredResults}),r.a.createElement(v,{resultsFromHome:this.state.books}),r.a.createElement(j,null))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={book:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href.split("/"),a=t[t.length-1];fetch("http://localhost:3001/bookDetail/".concat(a)).then(function(e){return e.json()}).then(function(t){e.setState({book:t})})}},{key:"goToGoogle",value:function(){window.open("https://www.google.com/maps/dir/Glen+Nelson+Center,+Wabasha+Street+North+%23500,+Saint+Paul,+MN/The+Buttered+Tin,+7th+Street+East,+Saint+Paul,+MN/@44.9485887,-93.0949047,16z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x87f7d5e4f681971b:0x9a085adfbe7ccf95!2m2!1d-93.0941778!2d44.9461828!1m5!1m1!1s0x87f7d5506765dcf3:0xe663f9063ed3d018!2m2!1d-93.0888711!2d44.9510235","_blank")}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",{className:"book-detail-page"},r.a.createElement(p.a,{icon:E.a}),r.a.createElement("img",{className:"book-detail-main-image",src:this.state.book.genres?"/images/"+this.state.book.genres[0]+".svg":"/images/fiction.svg",alt:"book genre icon"}),r.a.createElement("span",{className:"book-title"},r.a.createElement("h2",null,this.state.book.title),r.a.createElement("h4",null,"By ",this.state.book.author)),r.a.createElement("h3",{className:"description"},"Find it here:"),r.a.createElement("div",{className:"address-border"},r.a.createElement("img",{className:"book-detail-library-image",alt:"",src:this.state.book.library&&this.state.book.library.photo}),r.a.createElement("div",{className:"library-address"},r.a.createElement("h3",null,this.state.book.library&&this.state.book.library.libraryName),r.a.createElement("a",{href:this.state.book.library&&"http://localhost:3000/librarydetails/".concat(this.state.book.library._id)},r.a.createElement(p.a,{icon:E.d}),r.a.createElement("span",null,this.state.book.library&&" "+this.state.book.library.location.address.split(", ")[0],r.a.createElement("br",null),this.state.book.library&&this.state.book.library.location.address.split(", ")[1])))),r.a.createElement("span",null,r.a.createElement("button",{className:"get-directions",onClick:this.goToGoogle},"Get Directions")),r.a.createElement("span",null,r.a.createElement("button",{className:"check-out"},"Check out this book")))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={library:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href.split("/"),a=t[t.length-1];console.log(a),fetch("http://localhost:3001/findLibrary/".concat(a)).then(function(e){return e.json()}).then(function(t){e.setState({library:t})})}},{key:"goToGoogle",value:function(){window.open("https://www.google.com/maps/dir/Glen+Nelson+Center,+Wabasha+Street+North+%23500,+Saint+Paul,+MN/The+Buttered+Tin,+7th+Street+East,+Saint+Paul,+MN/@44.9485887,-93.0949047,16z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x87f7d5e4f681971b:0x9a085adfbe7ccf95!2m2!1d-93.0941778!2d44.9461828!1m5!1m1!1s0x87f7d5506765dcf3:0xe663f9063ed3d018!2m2!1d-93.0888711!2d44.9510235","_blank")}},{key:"render",value:function(){return r.a.createElement("div",{className:"book-detail-page"},r.a.createElement(p.a,{icon:E.a}),r.a.createElement("img",{className:"book-detail-main-image",alt:"",src:this.state.library&&this.state.library.photo}),r.a.createElement("span",{className:"align-address"},r.a.createElement("h2",{className:"description"},"Address"),r.a.createElement("a",{href:"/"},this.state.library.location&&this.state.library.location.address.replace(",",""))),r.a.createElement("span",{className:"align-steward"},r.a.createElement("h2",{className:"description"},"Steward"),r.a.createElement("span",null,"".concat(this.state.library.steward&&this.state.library.steward.firstName," ").concat(this.state.library.steward&&this.state.library.steward.lastName))),r.a.createElement("span",null,r.a.createElement("button",{className:"get-directions",onClick:this.goToGoogle},"Get Directions")),r.a.createElement("h2",null,"Available Books"),r.a.createElement("div",{className:"card_holder"},this.state.library.books&&this.state.library.books.map(function(e){return r.a.createElement(g,{title:e.title.length>40?e.title.substring(0,40)+"...":e.title,author:e.author,genre:e.genres[0],id:e._id})})))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null))}}]),t}(n.Component),x=(a(26),function(){return r.a.createElement(c.a,null,r.a.createElement(s.a,null,r.a.createElement(i.a,{exact:!0,path:"/",component:O}),r.a.createElement(i.a,{exact:!0,path:"/bookdetails/:id",component:w}),r.a.createElement(i.a,{exact:!0,path:"/librarydetails/:id",component:C})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.3db1f66b.chunk.js.map