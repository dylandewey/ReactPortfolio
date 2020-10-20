(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{51:function(e,n,t){e.exports=t(95)},56:function(e,n,t){},95:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(44),c=t.n(l),o=(t(56),t(50)),i=t(21),u=t(13),m=t(22),s=t(8),d=t(9);function p(){var e=Object(s.a)(["\n  @media (max-width: 640px) {\n    display: none;\n  }\n"]);return p=function(){return e},e}var f=Object(d.a)(m.SideNav)(p()),b=[{name:"Me",path:"/"},{name:"Projects",path:"/projects"},{name:"Work",path:"/work"},{name:"Education",path:"/education"}],E=function(){var e=Object(u.f)();return r.a.createElement(f,{isFixedNav:!0,expanded:!0,isChildOfHeader:!1,"aria-label":"Side navigation"},r.a.createElement(m.SideNavItems,null,b.map((function(n){return r.a.createElement(m.SideNavLink,{isActive:"/"===e.pathname&&"/"===n.path||e.pathname===n.path,element:i.b,to:n.path,key:n.name},n.name)}))))},v=t(2);function h(){var e=Object(s.a)(["\n  display: flex;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-weight: bold;\n  align-items: center;\n  margin-top: 1rem;\n  border: 2px solid #2ecc40;\n  background-color: rgba(46, 204, 64, 0.3);\n  transition: background-color 250ms ease;\n  &:hover {\n    background-color: #2ecc40;\n  }\n  svg {\n    fill: white;\n    margin-left: 8px;\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(s.a)(["\n  width: 200px;\n  margin-right: 1rem;\n  border-radius: 2px;\n"]);return g=function(){return e},e}function j(){var e=Object(s.a)(["\n  display: flex;\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n"]);return j=function(){return e},e}function y(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 640px) {\n    display: ",";\n    flex-direction: column;\n  }\n"]);return y=function(){return e},e}var O=d.a.div(y(),(function(e){return e.isHome?"flex":"none"})),w=d.a.div(j()),k=d.a.img(g()),x=d.a.a(h()),I=function(e){var n=e.user,t=Object(u.f)();return r.a.createElement(O,{isHome:"/"===t.pathname},r.a.createElement(w,null,r.a.createElement(k,{src:n.basics.picture}),r.a.createElement("div",null,r.a.createElement("h2",null,n.basics.name),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://gitconnected.com/".concat(n.basics.username),target:"_blank",rel:"noreferrer noopener"},"@",n.basics.username)),r.a.createElement("p",null,n.basics.label),r.a.createElement("p",null,"Coding in ",n.basics.region),r.a.createElement("p",null,n.basics.yearsOfExperience," years of experience as a developer"),r.a.createElement("p",null,n.basics.headline),r.a.createElement("p",null,"Blog:"," ",r.a.createElement("a",{href:n.basics.blog,target:"_blank",rel:"noreferrer noopener"},n.basics.blog)))),r.a.createElement("div",null,r.a.createElement(x,{href:"https://gitconnected.com/".concat(n.basics.username,"/resume"),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"View Resum\xe9"),r.a.createElement(v.c,null))))},P=t(6),S=t(3),W=t(5),D=t(4),H=t(49),M=t.n(H);function N(){var e=Object(s.a)(["\n  width: 100%;\n  justify-content: center;\n"]);return N=function(){return e},e}function _(){var e=Object(s.a)(["\n  width: 25%;\n"]);return _=function(){return e},e}function B(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  z-index: 1;\n"]);return B=function(){return e},e}function C(){var e=Object(s.a)(["\n  height: 48px;\n"]);return C=function(){return e},e}function F(){var e=Object(s.a)(["\n  display: none;\n  @media (max-width: 640px) {\n    display: block;\n  }\n"]);return F=function(){return e},e}var J=d.a.div(F()),z=d.a.div(C()),A=d.a.div(B()),L=Object(d.a)(i.b)(_()),R=Object(d.a)(M.a)(N()),T=function(){return r.a.createElement(J,null,r.a.createElement(z,null),r.a.createElement(A,null,r.a.createElement(L,{to:"/"},r.a.createElement(R,{hasIconOnly:!0,renderIcon:P.Fd,iconDescription:"Me",tooltipPosition:"bottom"})),r.a.createElement(L,{to:"/projects"},r.a.createElement(R,{hasIconOnly:!0,renderIcon:S.db,iconDescription:"Projects",tooltipPosition:"bottom"})),r.a.createElement(L,{to:"/work"},r.a.createElement(R,{hasIconOnly:!0,renderIcon:W.Hd,iconDescription:"Work",tooltipPosition:"bottom"})),r.a.createElement(L,{to:"/education"},r.a.createElement(R,{hasIconOnly:!0,renderIcon:D.Jd,iconDescription:"Education",tooltipPosition:"bottom"}))))};function V(){var e=Object(s.a)(["\n  min-height: 100vh;\n  @media (max-width: 640px) {\n    margin-left: 0 !important;\n  }\n"]);return V=function(){return e},e}var $=Object(d.a)(m.Content)(V()),q=function(e){var n=e.user,t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(E,null),r.a.createElement($,null,r.a.createElement(I,{user:n}),r.a.createElement("div",null,t)))},G=t(19);function K(){var e=Object(s.a)(["\n  display: inline-block;\n  margin-right: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 1rem;\n  background-color: ",";\n  color: ",";\n  border-radius: 2px;\n  font-weight: bold;\n"]);return K=function(){return e},e}function Q(){var e=Object(s.a)(["\n  white-space: pre-wrap;\n"]);return Q=function(){return e},e}function U(){var e=Object(s.a)(["\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n"]);return U=function(){return e},e}var X=d.a.h3(U()),Y=d.a.p(Q()),Z=d.a.span(K(),G.a[20],G.a[70]);function ee(){var e=Object(s.a)(["\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  display: inline-block;\n  font-size: 18px;\n"]);return ee=function(){return e},e}var ne=d.a.li(ee()),te=function(e){var n=e.user;return r.a.createElement(q,{user:n},r.a.createElement("div",null,r.a.createElement(X,null,"About Me"),r.a.createElement(Y,null,n.basics.summary)),r.a.createElement("div",null,r.a.createElement(X,null,"Skills"),r.a.createElement("div",null,n.skills.map((function(e){return r.a.createElement(Z,{key:e.name},e.name)})))),r.a.createElement("div",null,r.a.createElement(X,null,"Profiles"),r.a.createElement("ul",null,n.basics.profiles.map((function(e,n){return r.a.createElement(ne,{key:e.network},0!==n&&" | ",r.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},e.network))})))))},ae=t(35);function re(){var e=Object(s.a)(["\n  margin-top: 1.2rem;\n"]);return re=function(){return e},e}function le(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return le=function(){return e},e}function ce(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return ce=function(){return e},e}var oe=d.a.li(ce(),G.b),ie=d.a.h4(le()),ue=d.a.div(re()),me=function(e){var n=e.user;return r.a.createElement(q,{user:n},r.a.createElement("div",null,r.a.createElement(X,null,"Projects"),r.a.createElement("ul",null,n.projects.map((function(e,n){return r.a.createElement(oe,{key:n},r.a.createElement(ie,null,e.name),r.a.createElement("p",null,e.summary),r.a.createElement(ue,null,[].concat(Object(ae.a)(e.languages),Object(ae.a)(e.libraries)).map((function(e,n){return r.a.createElement(Z,{key:n},e)}))))})))))};function se(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return se=function(){return e},e}function de(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return de=function(){return e},e}function pe(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return pe=function(){return e},e}var fe=d.a.li(pe(),G.b),be=d.a.h4(de()),Ee=d.a.p(se()),ve=function(e){var n=e.user;return r.a.createElement(q,{user:n},r.a.createElement("div",null,r.a.createElement(X,null,"Work"),r.a.createElement("ul",null,n.work.map((function(e,n){return r.a.createElement(fe,{key:n},r.a.createElement(be,null,e.position),r.a.createElement("div",null,r.a.createElement(Ee,null,e.company)," ",r.a.createElement("span",null,e.location),r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(Y,null,e.summary))})))))};function he(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return he=function(){return e},e}function ge(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return ge=function(){return e},e}function je(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return je=function(){return e},e}var ye=d.a.li(je(),G.b),Oe=d.a.h4(ge()),we=d.a.p(he()),ke=function(e){var n=e.user;return r.a.createElement(q,{user:n},r.a.createElement("div",null,r.a.createElement(X,null,"Education"),r.a.createElement("ul",null,n.education.map((function(e,n){return r.a.createElement(ye,{key:n},r.a.createElement(Oe,null,e.position),r.a.createElement("div",null,r.a.createElement(we,null,e.studyType,", ",e.area)," ",r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(Y,null,e.description.replace("\n\n","\n")))})))))},xe=function(e){var n=e.user;return r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(te,{user:n})),r.a.createElement(u.a,{path:"/projects"},r.a.createElement(me,{user:n})),r.a.createElement(u.a,{path:"/work"},r.a.createElement(ve,{user:n})),r.a.createElement(u.a,{path:"/education"},r.a.createElement(ke,{user:n}))))};var Ie=function(){var e=Object(a.useState)(null),n=Object(o.a)(e,2),t=n[0],l=n[1];return Object(a.useEffect)((function(){fetch("https://gitconnected.com/v1/portfolio/dylandewey").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),t?r.a.createElement(xe,{user:t}):r.a.createElement("div",null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.5e74f946.chunk.js.map