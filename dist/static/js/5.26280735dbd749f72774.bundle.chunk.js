(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{216:function(e,t,n){e.exports={login:"_2KVH_Io_eq5RMKwZiMZYu0",login__form:"vTQUTdTSbpwLaovc89aor",login__form__field:"_3FJxf6XtywSQPxgf5fBkII"}},242:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(240),r=n(216),l=n.n(r),o=function(e){var t=e.children;return c.a.createElement("div",{className:l.a.login},c.a.createElement("div",{className:l.a.login__form},t))},u=n(119),s=function(e){var t=e.label,n=Object(u.a)(e,["label"]);return c.a.createElement("div",{className:l.a.login__form__field},c.a.createElement("label",null,t),c.a.createElement("input",Object.assign({type:"text"},n)))},f=n(214),m=n(83);function b(e){var t=Object(a.useState)(e||""),n=Object(f.a)(t,2),c=n[0],i=n[1];return{value:c,onChange:function(e){i(e.target.value)}}}var d=n(84),v=n(19);t.default=Object(v.f)(function(e){var t=e.history,n=b(),r=b(),l=function(e){var t=Object(a.useState)(!1),n=Object(f.a)(t,2),c=n[0],i=n[1];return{isProcessing:c,onClick:function(){i(!0),setTimeout(function(){i(!1),m.a.authenticate(function(){return e.push("/")})},2e3)}}}(t),u=Object(d.b)(["common"]).t;return m.a.isAuthenticated?c.a.createElement(v.a,{to:{pathname:"/"}}):(Object(a.useEffect)(function(){var e=document.getElementById("ip-username");e&&e.focus()},[]),c.a.createElement(o,null,c.a.createElement("h1",null,"HELLO"),Object(a.useMemo)(function(){return c.a.createElement(s,Object.assign({id:"ip-username",label:u("username")},n))},[n.value]),Object(a.useMemo)(function(){return c.a.createElement(s,Object.assign({label:u("password")},r))},[r.value]),c.a.createElement(i.a,{disabled:l.isProcessing,variant:"contained",fullWidth:!0,onClick:l.onClick},"Login")))})}}]);