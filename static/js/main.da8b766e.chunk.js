(this.webpackJsonpusers_app=this.webpackJsonpusers_app||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(17),i=n.n(r),a=(n(24),n(7)),o=n(2),u=n(10),j=n(13),l=n.n(j),d=n(18),h=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://gorest.co.in/public/v1/users");case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("error in method get all users"+e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),b=h,f=(n(26),n(27),n(1)),x=function(e){var t=e.onClick,n=e.text;return Object(f.jsx)("button",{className:"button",onClick:t,children:n})},O=function(e){var t=e.users,n=e.statusStyle;return n="active"===t.status?"active":"inactive",Object(f.jsx)("div",{children:Object(f.jsxs)("ul",{children:["Name: ",t.name,Object(f.jsxs)("li",{className:n,children:["User status:",t.status]}),Object(f.jsx)(a.b,{to:"/UserData/".concat(t.id),children:Object(f.jsx)(x,{text:"Get More Information"})})]})})},v=function(){var e=Object(c.useState)(),t=Object(u.a)(e,2),n=t[0],s=t[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"header-Home-Page",children:" Users App "}),Object(f.jsx)("div",{className:"search-Button",children:Object(f.jsx)(x,{onClick:function(){b().then((function(e){return e.json()})).then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))},text:"User list"})}),null===n||void 0===n?void 0:n.map((function(e,t){return Object(f.jsx)("div",{children:Object(f.jsx)(O,{className:undefined,users:e})},t)}))]})},p=(n(34),function(){var e=Object(c.useState)(),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(o.f)().id;return Object(c.useEffect)((function(){b().then((function(e){return e.json()})).then((function(e){console.log(e.data);var t=e.data.find((function(e){return e.id===parseInt(r)}));s(t),console.log(t)})).catch((function(e){return console.log(e)}))}),[]),Object(f.jsxs)("div",{className:"user-card-main",children:[Object(f.jsx)("h1",{children:"User Data"}),Object(f.jsxs)("h2",{children:["Name:",null===n||void 0===n?void 0:n.name]}),Object(f.jsxs)("h2",{children:["Email:",null===n||void 0===n?void 0:n.email]}),Object(f.jsxs)("h2",{children:["Gender:",null===n||void 0===n?void 0:n.gender]}),Object(f.jsx)(a.b,{to:"/Users-Task",children:Object(f.jsx)(x,{text:"Back to home"})})]})}),m=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/Users-Task",component:v}),Object(f.jsx)(o.a,{path:"/UserData/:id",component:p})]})})};n(35);var g=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(a.a,{children:Object(f.jsx)(m,{})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),k()}},[[36,1,2]]]);
//# sourceMappingURL=main.da8b766e.chunk.js.map