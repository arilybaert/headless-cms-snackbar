(this.webpackJsonpsnackbar=this.webpackJsonpsnackbar||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),r=c(30),o=c.n(r),i=(c(38),c(39),c(40),function(){return Object(a.jsx)("div",{className:"row o-header",children:Object(a.jsx)("div",{className:"a-site-title col-12",children:"Ari's Snackbar"})})}),l=c(4),m=c(9),d=c.n(m),j=c(2),u=function(){var e,t=Object(j.f)(),c=Object(s.useState)(),n=Object(l.a)(c,2),r=n[0],o=n[1],i=Object(s.useState)(),m=Object(l.a)(i,2),u=m[0],b=m[1],h=Object(s.useState)("0"),O=Object(l.a)(h,2),p=O[0],x=O[1],f=Object(s.useState)([]),v=Object(l.a)(f,2),g=v[0],N=v[1],w=function(){var e=0;Object.values(g).map((function(t){var c=parseFloat(t.amount)*parseFloat(t.price);return e+=c})),console.log(g),x(e)};Object(s.useEffect)(w,[g]),Object(s.useEffect)((function(){d.a.get("http://www.arilybaert.com/wp-json/wp/v2/burger",C).then((function(e){b(e.data)})).catch(console.log)}),[]);var y=function(t,c){console.log(c);var a=(e=g).findIndex((function(e){return e.id===c}));console.log(a),t?e[a].amount+=1:e[a].amount-=1,e[a].amount<0?e[a].amount=0:w()},C={mode:"no-cors",method:"GET",headers:{Authorization:"Bearer ".concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xODguMTY2Ljg4LjE2MyIsImlhdCI6MTYwNDIyODUwMSwibmJmIjoxNjA0MjI4NTAxLCJleHAiOjE2MDQ4MzMzMDEsImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.5M8C9kdW1squtLJFCXnL81NsxCVEzMRTbufXL45sS5g")}};return Object(a.jsx)("div",{className:"row o-main-content",children:Object(a.jsx)("div",{className:"col-12 o-main",children:Object(a.jsxs)("div",{className:"m-main",children:[r&&Object(a.jsxs)("div",{className:"o-layover",children:[Object(a.jsx)("div",{className:"row ",children:Object(a.jsx)("h3",{className:"o-cart-title",children:"Burgers"})}),g&&g.map((function(e,t){return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-4",children:e.name}),Object(a.jsx)("div",{className:"col-4",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){return y(!1,e.id)},children:"-"}),Object(a.jsx)("span",{children:e.amount}),Object(a.jsx)("button",{onClick:function(){return y(!0,e.id)},children:"+"})]})}),Object(a.jsxs)("div",{className:"col-2",children:["$",e.price]})]},t)}))]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)("ul",{className:"m-menu-items",children:Object(a.jsx)("li",{children:"Burgers"})})})}),Object(a.jsx)("div",{className:"row o-cards",children:u&&u.map((function(t,c){return Object(a.jsx)("div",{className:"col-12 col-sm-6 col-md-4 o-menuItem-card",children:Object(a.jsxs)("div",{className:"m-menuItem-card",children:[Object(a.jsx)("img",{src:t.acf.image.url,alt:"burger",title:"menu item",className:"a-menuItem-picture"}),Object(a.jsx)("div",{className:"m-menuItem-price",children:Object(a.jsxs)("span",{className:"a-menuItem-price",children:["$",t.acf.price]})}),Object(a.jsxs)("h3",{className:"a-menuItem-title",children:[t.title.rendered," ",Object(a.jsx)("br",{}),"XL"]}),Object(a.jsx)("button",{href:"/",className:"a-menuItem-action",onClick:function(){return function(t){var c=(e=g).findIndex((function(e){return e.id===t.id}));if(c>=0)e[c].amount+=1;else{var a={id:t.id,name:t.title.rendered,amount:1,price:t.acf.price};e.push(a)}N(e),localStorage.setItem("cart",JSON.stringify(e)),w()}(t)},children:"BUY"})]})},c)}))}),Object(a.jsx)("div",{className:"o-cart",children:Object(a.jsxs)("div",{className:"m-cart",children:[Object(a.jsxs)("button",{className:"a-main-priceBtn",onClick:function(){return o(!r)},children:["$",p]}),Object(a.jsx)("button",{className:"a-main-nextBtn",onClick:function(){t.push("/login")},children:"next"})]})})]})})})},b=c(12),h=c(10),O=c(15),p=c.n(O),x=c(20),f=function(){var e=Object(s.useState)(!0),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(j.f)(),o={mode:"no-cors",method:"POST",headers:{}},i=Object(s.useState)({username:"",email:"",password:"",address:"",address_2:"",city:"",zip:""}),m=Object(l.a)(i,2),u=m[0],O=m[1],f=function(){var e=Object(x.a)(p.a.mark((function e(){var t,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:u.username,email:u.email,password:u.password},e.next=3,d.a.post("http://www.arilybaert.com/wp-json/wp/v2/users/register",t,o).then((function(e){localStorage.setItem("username",e.data.user_display_name)})).catch((function(e){console.log(e.message),console.log("cant create account")}));case 3:return c={username:u.username,password:u.password},e.next=6,d.a.post("http://www.arilybaert.com/wp-json/jwt-auth/v1/token",c,o).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("username",e.data.user_display_name)})).catch((function(e){console.log(e.message)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(u),e.next=4,f();case 4:r.push("/confirmation");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.target.value;O(Object(h.a)(Object(h.a)({},u),{},Object(b.a)({},e.target.name,t)))};return Object(a.jsx)("div",{className:"row o-main-content",children:Object(a.jsx)("div",{className:"col-12 o-main",children:Object(a.jsx)("div",{className:"m-main m-confirmation",children:c&&Object(a.jsxs)("form",{onSubmit:v,children:[Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsxs)("div",{className:"form-group col-md-6",children:[Object(a.jsx)("label",{htmlFor:"Name",children:"Username"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"Username",name:"username",placeholder:"Chuck",value:u.username,onChange:g})]}),Object(a.jsxs)("div",{className:"form-group col-md-6",children:[Object(a.jsx)("label",{htmlFor:"Email",children:"Email"}),Object(a.jsx)("input",{type:"email",className:"form-control",id:"Email",name:"email",placeholder:"Berry",value:u.email,onChange:g})]})]}),Object(a.jsx)("div",{className:"form-row",children:Object(a.jsxs)("div",{className:"form-group col-md-12",children:[Object(a.jsx)("label",{htmlFor:"Password",children:"Password"}),Object(a.jsx)("input",{type:"password",className:"form-control",id:"Password",name:"password",placeholder:"secret",value:u.password,onChange:g})]})}),Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsxs)("div",{className:"form-group col-md-6",children:[Object(a.jsx)("label",{htmlFor:"inputAddress",children:"Adres"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"inputAddress",name:"address",placeholder:"1234 Main St",value:u.address,onChange:g})]}),Object(a.jsxs)("div",{className:"form-group col-md-6",children:[Object(a.jsx)("label",{htmlFor:"inputAddress2",children:"Adres vervolg"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"inputAddress2",name:"address_2",placeholder:"Apartment, studio, or floor",value:u.address_2,onChange:g})]})]}),Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsxs)("div",{className:"form-group col-md-6",children:[Object(a.jsx)("label",{htmlFor:"inputCity",children:"Stad"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"inputCity",name:"city",placeholder:"Beverly Hills",value:u.city,onChange:g})]}),Object(a.jsxs)("div",{className:"form-group col-md-6",children:[Object(a.jsx)("label",{htmlFor:"inputZip",children:"Postcode"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"inputZip",name:"zip",placeholder:"90210",value:u.zip,onChange:g})]})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary a-orderBtn",onClick:function(){return n(c)},children:"Bestel"})]})})})})},v=c(11),g=function(){var e=Object(s.useState)(!0),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)({email:"",password:""}),o=Object(l.a)(r,2),i=o[0],m=o[1],u=Object(j.f)(),O={mode:"no-cors",method:"POST",headers:{}};Object(s.useEffect)((function(){console.log(i)}),[i]);var p=function(e){var t=e.target.value;m(Object(h.a)(Object(h.a)({},i),{},Object(b.a)({},e.target.name,t)))};return Object(a.jsx)("div",{className:"row o-main-content",children:Object(a.jsx)("div",{className:"col-12 o-main",children:Object(a.jsxs)("div",{className:"m-main m-confirmation",children:[c&&Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:i.email,password:i.password};d.a.post("http://www.arilybaert.com/wp-json/jwt-auth/v1/token",t,O).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("username",e.data.user_display_name),u.push("/confirmation")})).catch((function(e){console.log(e),console.log("email or pass incorrect")}))},children:[Object(a.jsxs)("div",{className:"form-row",children:[Object(a.jsxs)("div",{className:"form-group col-md-6",children:[Object(a.jsx)("label",{htmlFor:"Email",children:"Email"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"Email",name:"email",placeholder:"fre@cms.be",value:i.email,onChange:p})]}),Object(a.jsxs)("div",{className:"form-group col-md-6",children:[Object(a.jsx)("label",{htmlFor:"Password",children:"Password"}),Object(a.jsx)("input",{type:"password",className:"form-control",id:"Password",name:"password",placeholder:"maga2020",value:i.password,onChange:p})]})]}),Object(a.jsx)("div",{className:"form-row",children:Object(a.jsx)("div",{className:"form-group col-md-12",children:Object(a.jsx)(v.b,{to:"/form",children:"No account? Make one here!"})})}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary a-orderBtn",onClick:function(){return n(c)},children:"Bestel"})]}),!c&&Object(a.jsxs)("p",{className:"a-order-confirmation",children:["Thanks for ordering! ",Object(a.jsx)("br",{}),"This is your order ID: snackbar123"]})]})})})},N=c(32),w=c.n(N),y=function(){var e=Object(s.useState)(!0),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(),o=Object(l.a)(r,2),i=o[0],m=o[1],j=localStorage.getItem("token"),u=w()(),O={mode:"no-cors",method:"POST",headers:{Authorization:"Bearer ".concat(j)}},p=[];Object(s.useEffect)((function(){for(var e=new Date,t=e.getHours(),c=e.getMinutes();t<20;)t+=1,(c+=10)>60&&(c-=60),p.push("".concat(t,":").concat(c<10?"0":"").concat(c));m(p)}),[]);var x=Object(s.useState)({time:p[0]}),f=Object(l.a)(x,2),g=f[0],N=f[1];Object(s.useEffect)((function(){console.log(g)}),[g]);var y=function(){var e=[];JSON.parse(localStorage.getItem("cart")).map((function(t){return e.push(t.id),"test"})),function(e){d.a.post("http://www.arilybaert.com/wp-json/wp/v2/purchase",e,O).then((function(e){console.log(e),"Created"===e.statusText&&n(!c)})).catch((function(e){console.log(e),console.log("email or pass incorrect")}))}({title:"Bestelling: ".concat(u),content:"",fields:{adress:"Vleugstraat 12",delivery_time:g.time,content:e},status:"publish"})};return Object(a.jsx)("div",{className:"row o-main-content",children:Object(a.jsx)("div",{className:"col-12 o-main",children:Object(a.jsxs)("div",{className:"m-main m-confirmation",children:[c&&Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y()},children:[Object(a.jsx)("div",{className:"form-row",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"exampleFormControlSelect1",children:"When would you like to pick your order up?"}),Object(a.jsx)("select",{className:"form-control",id:"time",value:g.time,name:"time",onChange:function(e){var t=e.target.value;N(Object(h.a)(Object(h.a)({},g),{},Object(b.a)({},e.target.name,t)))},children:i&&i.map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},t)}))})]})}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary a-orderBtn",onClick:function(){return n(c)},children:"Bestel"})]}),!c&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:"a-order-confirmation",children:["Thanks for ordering! ",Object(a.jsx)("br",{}),"This is your order ID: ",u,Object(a.jsx)("br",{})," Your order will be ready at ",g.time]}),Object(a.jsx)(v.b,{to:"/",children:"go home"})]})]})})})};var C=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(v.a,{children:Object(a.jsx)(j.c,{children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)(i,{}),Object(a.jsx)(j.a,{path:"/",exact:!0,children:Object(a.jsx)(u,{})}),Object(a.jsx)(j.a,{path:"/login",exact:!0,children:Object(a.jsx)(g,{})}),Object(a.jsx)(j.a,{path:"/form",exact:!0,children:Object(a.jsx)(f,{})}),Object(a.jsx)(j.a,{path:"/Confirmation",exact:!0,children:Object(a.jsx)(y,{})})]})})})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),S()}},[[64,1,2]]]);
//# sourceMappingURL=main.52ecf8b7.chunk.js.map