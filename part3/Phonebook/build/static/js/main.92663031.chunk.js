(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{24:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(17),o=t.n(c),a=(t(24),t(18)),u=t(19),i=t(3),l=t(6),s=t.n(l),b="http://localhost:3001/api/persons",d=function(e){return e.data},j=function(){return s.a.get(b).then(d)},f=function(e){return s.a.post(b,e).then(d)},h=function(e){var n="".concat(b,"/").concat(e.id);return s.a.put(n,e).then(d)},m=function(e){var n="".concat(b,"/").concat(e);return s.a.delete(n)},O=t(0),v=function(e){var n=e.handler;return Object(O.jsx)("div",{children:Object(O.jsx)("input",{onChange:n})})},p=function(e){var n=e.name,t=e.number,r=e.deletionHandler;return Object(O.jsxs)("p",{children:[n," ",t," ",Object(O.jsx)("button",{onClick:function(){return r(n)},children:"delete"})]})},g=function(e){var n=e.entries,t=e.deletionHandler,r=n.map((function(e){return Object(O.jsx)(p,{name:e.name,number:e.number,deletionHandler:t},e.name)}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:"Numbers"}),Object(O.jsx)("div",{children:r})]})},x=function(e){var n=e.name,t=e.number,r=e.submitHandler,c=e.nameChangeHandler,o=e.numberChangeHandler;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:"Add a new contact"}),Object(O.jsxs)("form",{onSubmit:r,children:[Object(O.jsxs)("div",{children:["name: ",Object(O.jsx)("input",{value:n,onChange:c}),"number: ",Object(O.jsx)("input",{value:t,onChange:o})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"submit",children:"add"})})]})]})},k=t(7),w=function(e){var n=e.message,t=e.isError;if(null===n)return null;var r={borderStyle:"solid",borderSize:2,padding:10,fontSize:16},c=t?Object(k.a)(Object(k.a)({},r),{borderColor:"red",backgroundColor:"pink",color:"red"}):Object(k.a)(Object(k.a)({},r),{borderColor:"green",backgroundColor:"lightgreen",color:"green"});return Object(O.jsx)("div",{className:"notfication",style:c,children:n})},y=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)("new name here"),l=Object(i.a)(o,2),s=l[0],b=l[1],d=Object(r.useState)("0"),p=Object(i.a)(d,2),k=p[0],y=p[1],C=Object(r.useState)([]),H=Object(i.a)(C,2),S=H[0],E=H[1],D=Object(r.useState)(null),T=Object(i.a)(D,2),z=T[0],F=T[1],I=Object(r.useState)(!1),J=Object(i.a)(I,2),N=J[0],P=J[1],A=function(){j().then((function(e){c(e),E(e)}))};Object(r.useEffect)(A,[]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Phonebook"}),Object(O.jsx)(w,{message:z,isError:N}),Object(O.jsx)(v,{handler:function(e){var n=e.target.value;if(n){var r=new RegExp("^".concat(n),"i"),c=t.filter((function(e){return e.name.match(r)}));E(c)}else E(t)}}),Object(O.jsx)(x,{name:s,number:k,submitHandler:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));if(n){if(!window.confirm("".concat(s," is already in the phonebook. Do you want to overwrite the existing number?")))return;n.number=k,h(n).then((function(e){var n,r=Object(u.a)(t),o=Object(a.a)(r);try{for(o.s();!(n=o.n()).done;){if(n.value.id===e.id){r.number=e.number;break}}}catch(i){o.e(i)}finally{o.f()}c(r),E(r),F("Phone number for ".concat(s," successfully updated to ").concat(k,".")),P(!1),setTimeout((function(){return F(null)}),5e3)})).catch((function(e){A(),F("Information on ".concat(s," has been deleted from the server")),P(!0)}))}else{f({name:s,number:k}).then((function(e){var n=t.concat(e);c(n),E(n),F("".concat(s," added to phone book with the number ").concat(k)),P(!1),setTimeout((function(){return F(null)}),5e3)})).catch((function(e){console.log(e.response.data)}))}},nameChangeHandler:function(e){return b(e.target.value)},numberChangeHandler:function(e){return y(e.target.value)}}),Object(O.jsx)(g,{entries:S,deletionHandler:function(e){if(window.confirm("Delete ".concat(e," and their number?"))){var n=t.find((function(n){return n.name===e})).id;m(n).then((function(t){var r=S.filter((function(e){return e.id!==n}));c(r),E(r),F("".concat(e," and their number successfully DELETED")),P(!1),setTimeout((function(){return F(null)}),5e3)})).catch((function(e){F("Entry not in phonebook, perhaps already deleted"),P(!0),setTimeout((function(){return F(null)}),5e3)}))}}})]})};o.a.render(Object(O.jsx)(y,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.92663031.chunk.js.map