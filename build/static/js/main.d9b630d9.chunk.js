(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(23),r=a.n(c),l=(a(30),a(9)),o=a(10),i=a(12),j=a(11),m=a(2),b=(a(31),a(7)),d=a(0),u=function(e){Object(i.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsxs)(b.b,{className:"nav-link",to:"/",children:["Home ",Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{className:"nav-link",to:"/about",children:"About"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{className:"nav-link",to:"/contact",children:"Contact"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{className:"nav-link",to:"/signup",children:"Registration"})})]})})]})})}}]),a}(n.Component),h=u,p=function(e){Object(i.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h1",{children:"Home"})})}}]),a}(n.Component),O=p,x=a(8),v=a.n(x),f=a(14),g=function(){var e=Object(m.e)(),t=function(){var t=Object(f.a)(v.a.mark((function t(){var a,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/about",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"});case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,console.log(n.status),401!==n.status&&n||(window.alert("Please Log In!"),e.push("/login")),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("i am error"+t.t0),e.push("/login");case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){t(),console.log("hi i am useeffect hook")})),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Welcome"}),Object(d.jsx)("div",{children:"Welcome to Kgec About page"})]})},N=function(e){Object(i.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Welcome"}),Object(d.jsx)("div",{children:"Welcome to Kgec contact Us"})]})}}]),a}(n.Component),w=N,y=a(15),k=a(16),C=a(18);function P(){var e,t,a=Object(m.e)(),s=Object(n.useState)({email:"",password:""}),c=Object(C.a)(s,2),r=c[0],l=c[1],o=function(a){e=a.target.name,t=a.target.value,l(Object(k.a)(Object(k.a)({},r),{},Object(y.a)({},e,t)))},i=function(){var e=Object(f.a)(v.a.mark((function e(t){var n,s,c,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.email,s=r.password,e.next=4,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:s})});case 4:return c=e.sent,e.next=7,c.json();case 7:400!==(l=e.sent).status&&l?(window.alert(l.message),a.push("/")):window.alert(l.message);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("form",{method:"POST",children:[Object(d.jsxs)("div",{className:"mb-3 my-3 row",children:[Object(d.jsx)("label",{htmlFor:"staticEmail",className:"col-sm-2 col-form-label",children:"Email"}),Object(d.jsx)("div",{className:"col-sm-10",children:Object(d.jsx)("input",{type:"text",className:"form-control-plaintext",name:"email",value:r.email,onChange:o,id:"staticEmail",placeholder:"email@example.com"})})]}),Object(d.jsxs)("div",{className:"mb-3 my-3 row",children:[Object(d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:"Password"}),Object(d.jsx)("div",{className:"col-sm-10",children:Object(d.jsx)("input",{type:"password",name:"password",value:r.password,onChange:o,className:"form-control",id:"inputPassword2"})})]})]}),Object(d.jsx)("button",{onClick:i,className:"btn btn-primary my3",children:"Submit"})]})})}function F(){var e,t,a=Object(m.e)(),s=Object(n.useState)({name:"",email:"",phone:"",work:"",password:"",cpassword:""}),c=Object(C.a)(s,2),r=c[0],l=c[1],o=function(a){e=a.target.name,t=a.target.value,l(Object(k.a)(Object(k.a)({},r),{},Object(y.a)({},e,t)))},i=function(){var e=Object(f.a)(v.a.mark((function e(t){var n,s,c,l,o,i,j,m;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.name,s=r.email,c=r.phone,l=r.work,o=r.password,i=r.cpassword,e.next=4,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:s,phone:c,work:l,password:o,cpassword:i})});case 4:return j=e.sent,e.next=7,j.json();case 7:422!==(m=e.sent).status&&m?window.alert(m.message):(window.alert(m.message),a.push("/login"));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{method:"POST",children:[Object(d.jsxs)("div",{className:"mb-3 my-3",children:[Object(d.jsx)("label",{htmlFor:"Name",className:"form-label",children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name",className:"form-control",id:"userName",value:r.name,onChange:o,placeholder:"Enter Your Name Here"})]}),Object(d.jsxs)("div",{className:"mb-3 my-3",children:[Object(d.jsx)("label",{htmlFor:"Email",className:"form-label",children:"Email address"}),Object(d.jsx)("input",{type:"email",name:"email",className:"form-control",id:"userEmail",value:r.email,onChange:o,placeholder:"Enter Your Email "})]}),Object(d.jsxs)("div",{className:"mb-3 my-3",children:[Object(d.jsx)("label",{htmlFor:"Phone",className:"form-label",children:"Phone"}),Object(d.jsx)("input",{type:"text",name:"phone",className:"form-control",id:"userPhone",value:r.phone,onChange:o,placeholder:"Enter Your Phone Number "})]}),Object(d.jsxs)("div",{className:"mb-3 my-3",children:[Object(d.jsx)("label",{htmlFor:"Work",className:"form-label",children:"Work"}),Object(d.jsx)("input",{type:"text",name:"work",className:"form-control",id:"userWork",value:r.work,onChange:o,placeholder:"Enter Your Work Hare"})]}),Object(d.jsxs)("div",{className:"mb-3 row",children:[Object(d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:"Password"}),Object(d.jsx)("div",{className:"col-sm-10",children:Object(d.jsx)("input",{type:"password",name:"password",className:"form-control",id:"inputPassword1",value:r.password,onChange:o})}),Object(d.jsxs)("div",{className:"mb-3 row",children:[Object(d.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:"Confirm Password"}),Object(d.jsx)("div",{className:"col-sm-10",children:Object(d.jsx)("input",{type:"password",name:"cpassword",className:"form-control",id:"inputPassword",value:r.cpassword,onChange:o})}),Object(d.jsx)("button",{onClick:i,className:"btn btn-primary my-3",children:"Submit"})]})]})]})})})}a(39);var S=function(e){Object(i.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(m.a,{exact:!0,path:"/",children:Object(d.jsx)(O,{})}),Object(d.jsx)(m.a,{path:"/about",children:Object(d.jsx)(g,{})}),Object(d.jsx)(m.a,{path:"/contact",children:Object(d.jsx)(w,{})}),Object(d.jsx)(m.a,{path:"/login",children:Object(d.jsx)(P,{})}),Object(d.jsx)(m.a,{path:"/signup",children:Object(d.jsx)(F,{})})]})}}]),a}(n.Component),E=S,T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,41)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(b.a,{children:Object(d.jsx)(E,{})})}),document.getElementById("root")),T()}},[[40,1,2]]]);
//# sourceMappingURL=main.d9b630d9.chunk.js.map