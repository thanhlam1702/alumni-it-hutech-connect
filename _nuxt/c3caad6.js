(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1249:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNOTg1LjY2LDkyLjgzQzkwNi42Nyw3Miw4MjMuNzgsMzEsNzQzLjg0LDE0LjE5Yy04Mi4yNi0xNy4zNC0xNjguMDYtMTYuMzMtMjUwLjQ1LjM5LTU3Ljg0LDExLjczLTExNCwzMS4wNy0xNzIsNDEuODZBNjAwLjIxLDYwMC4yMSwwLDAsMSwwLDI3LjM1VjEyMEgxMjAwVjk1LjhDMTEzMi4xOSwxMTguOTIsMTA1NS43MSwxMTEuMzEsOTg1LjY2LDkyLjgzWiIgY2xhc3M9InNoYXBlLWZpbGwiIGZpbGw9IiMwQzI0NjEiIGZpbGwtb3BhY2l0eT0iMSI+PC9wYXRoPjwvc3ZnPg=="},1264:function(e,t,r){var content=r(1294);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(122).default)("7557931a",content,!0,{sourceMap:!1})},1293:function(e,t,r){"use strict";var o=r(1264);r.n(o).a},1294:function(e,t,r){(t=r(121)(!1)).push([e.i,"#components-form-demo-normal-login .login-form{max-width:300px}#components-form-demo-normal-login .login-form-forgot{float:right}#components-form-demo-normal-login .login-form-button{width:100%}",""]),e.exports=t},1342:function(e,t,r){"use strict";r.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bg__login"},[t("img",{staticClass:"bg__login-img",attrs:{src:r(1249),alt:"Alumni IT Hutech"}})])}],n=(r(40),r(67),r(36),r(16)),l={layout:"auth",middleware:"auth",auth:"guest",data:function(){var e=this;return{form:{name:null,email:null,password:null,confirm:null},rules:{name:{required:!0,message:"Vui lòng nhập tài khoản hoặc MSSV!"},email:[{type:"email",message:"Định dạng email không chính xác!"},{required:!0,message:"Vui lòng nhập email!"}],password:[{validator:function(t,r,o){null===e.form.confirm&&""===e.form.confirm||(null===/^(?=.*\d)(?=.*[a-zA-Z]).{6,25}$/.exec(e.form.password)&&o(new Error("Mật khẩu gồm chữ, số và lớn hơn 6 ký tự!")),e.$refs.ruleForm.validateField("confirm")),o()},trigger:"change"},{required:!0,message:"Vui lòng nhập mật khẩu!"}],confirm:[{validator:function(t,r,o){r!==e.form.password?o(new Error("Mật khẩu không trùng khớp!")):o()},trigger:"change"},{required:!0,message:"Vui lòng nhập lại mật khẩu!"}]}}},methods:{onSubmit:function(){this.$refs.ruleForm.validate((function(e){}))},onRegister:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,data={name:e.form.name,email:e.form.email,password:e.form.password},t.next=4,e.$axios.$post("http://localhost:3000/api/auth/register",data);case 4:t.sent.success&&(e.$auth.loginWith("local",{data:{name:e.form.name,password:e.form.password}}),e.$router.push("/")),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},head:function(){return{title:"Đăng ký"}}},m=(r(1293),r(20)),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"main-wrapper auth"},[r("div",{staticClass:"login__main-wrapper"},[r("div",{staticClass:"form__control"},[r("h3",[e._v("Đăng Ký")]),e._v(" "),r("a-form-model",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules}},[r("a-form-model-item",{ref:"name",attrs:{label:"Tài khoản / MSSV",prop:"name"}},[r("a-input",{attrs:{placeholder:"Nhập tài khoản / MSSV","allow-clear":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}},[r("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),e._v(" "),r("a-form-model-item",{ref:"email",attrs:{label:"Email",prop:"email"}},[r("a-input",{attrs:{placeholder:"example@email.com","allow-clear":""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}},[r("a-icon",{attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1),e._v(" "),r("a-form-model-item",{attrs:{label:"Mật khẩu",prop:"password","has-feedback":""}},[r("a-input",{attrs:{placeholder:"Gồm chữ, số và lớn hơn 6 ký tự",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}},[r("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),e._v(" "),r("a-form-model-item",{attrs:{label:"Nhập lại mật khẩu",prop:"confirm","has-feedback":""}},[r("a-input",{attrs:{placeholder:"Nhập lại mật khẩu",type:"password"},model:{value:e.form.confirm,callback:function(t){e.$set(e.form,"confirm",t)},expression:"form.confirm"}},[r("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),e._v(" "),r("a-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.onRegister}},[e._v("\n          Đăng ký\n        ")]),e._v(" "),r("a-form-model-item",[r("div",{staticClass:"or__register"},[e._v("\n            Hoặc "),r("nuxt-link",{attrs:{to:"/login"}},[e._v("Đăng nhập ngay!")])],1)])],1)],1)]),e._v(" "),e._m(0)])}),o,!1,null,null,null);t.default=component.exports}}]);