(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(t,n,e){t.exports=e("2f39")},"2f39":function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"getListUsers",(function(){return _})),e.d(r,"getUserLogged",(function(){return j})),e.d(r,"getErrors",(function(){return H}));var i={};e.r(i),e.d(i,"setListUsers",(function(){return D})),e.d(i,"setUserLogged",(function(){return V})),e.d(i,"resetListUsers",(function(){return $})),e.d(i,"setErrors",(function(){return J}));var o={};e.r(o),e.d(o,"login",(function(){return K})),e.d(o,"userLogged",(function(){return W})),e.d(o,"changePassword",(function(){return X}));var u={};e.r(u),e.d(u,"getListUsers",(function(){return tt})),e.d(u,"getUserLogged",(function(){return nt})),e.d(u,"getErrors",(function(){return et}));var s={};e.r(s),e.d(s,"setListUsers",(function(){return rt})),e.d(s,"setUserLogged",(function(){return it})),e.d(s,"resetListUsers",(function(){return ot})),e.d(s,"setErrors",(function(){return ut}));var c={};e.r(c),e.d(c,"list",(function(){return st})),e.d(c,"add",(function(){return ct})),e.d(c,"up",(function(){return at})),e.d(c,"enableUser",(function(){return ft})),e.d(c,"desactivar",(function(){return pt})),e.d(c,"reiniciarPalavraPasse",(function(){return lt})),e.d(c,"changePassword",(function(){return dt})),e.d(c,"roles",(function(){return mt})),e.d(c,"niveis",(function(){return gt})),e.d(c,"upUserRoles",(function(){return ht}));var a={};e.r(a),e.d(a,"getListUsers",(function(){return Ut})),e.d(a,"getUserLogged",(function(){return kt})),e.d(a,"getErrors",(function(){return Lt}));var f={};e.r(f),e.d(f,"setListUsers",(function(){return wt})),e.d(f,"setUserLogged",(function(){return At})),e.d(f,"resetListUsers",(function(){return Pt})),e.d(f,"setErrors",(function(){return xt}));var p={};e.r(p),e.d(p,"empresaCount",(function(){return yt})),e.d(p,"countTickets",(function(){return Ct})),e.d(p,"countInqueritos",(function(){return Et})),e.d(p,"ticketsByHorasArea",(function(){return St})),e.d(p,"ticketsByArea",(function(){return qt})),e.d(p,"ticketsByPessoa",(function(){return Bt})),e.d(p,"listFuncionariosLogistica",(function(){return Tt})),e.d(p,"atribuirTicket",(function(){return zt})),e.d(p,"list",(function(){return Rt})),e.d(p,"alterarTicket",(function(){return Ft})),e.d(p,"email",(function(){return It})),e.d(p,"listFilter",(function(){return Ot})),e.d(p,"listFilterDetalhe",(function(){return _t})),e.d(p,"listAreaOp",(function(){return jt})),e.d(p,"listAreaResp",(function(){return Ht})),e.d(p,"listDestino",(function(){return Dt})),e.d(p,"addRecusa",(function(){return Vt})),e.d(p,"add",(function(){return $t})),e.d(p,"up",(function(){return Jt})),e.d(p,"enableRecusa",(function(){return Mt}));var l={};e.r(l),e.d(l,"getListUsers",(function(){return Gt})),e.d(l,"getUserLogged",(function(){return Kt})),e.d(l,"getErrors",(function(){return Wt}));var d={};e.r(d),e.d(d,"setListUsers",(function(){return Xt})),e.d(d,"setUserLogged",(function(){return Yt})),e.d(d,"resetListUsers",(function(){return Zt})),e.d(d,"setErrors",(function(){return tn}));var m={};e.r(m),e.d(m,"list",(function(){return nn})),e.d(m,"add",(function(){return en})),e.d(m,"up",(function(){return rn})),e.d(m,"listEmpresas",(function(){return on}));var g=e("967e"),h=e.n(g),b=(e("a481"),e("96cf"),e("fa84")),v=e.n(b),U=(e("5c7d"),e("7d6e"),e("e54f"),e("985d"),e("31cd"),e("2b0e")),k=e("1f91"),L=e("42d2"),w=e("b05d"),A=e("18d6"),P=e("a639"),x=e("436b"),y=e("2a19"),C=e("b12a"),E=e("f508");U["a"].use(w["a"],{config:{},lang:k["a"],iconSet:L["a"],plugins:{LocalStorage:A["a"],SessionStorage:P["a"],Dialog:x["a"],Notify:y["a"],AppFullscreen:C["a"],Loading:E["a"]}});var S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"q-app"}},[e("router-view")],1)},q=[],B={name:"App"},T=B,z=e("2877"),R=Object(z["a"])(T,S,q,!1,null,null,null),F=R.exports,I=e("2f62"),O=function(){return{listUsers:[],userLogged:[],errors:[]}};function _(t){return t.listUsers}function j(t){return t.userLogged}function H(t){return t.errors}function D(t,n){t.listUsers.push(n)}function V(t,n){t.userLogged.push(n)}function $(t,n){t.listUsers=[]}function J(t,n){t.errors.unshift(n)}var M=e("bc3a"),Q=e.n(M),N=function(){var t=localStorage.getItem("Authorization");return Q.a.create({baseURL:"https://teste.app.ucall.co.ao:9195",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type, Authorization","Access-Control-Allow-Methods":"*",Authorization:"Bearer ".concat(t)}})},G=function(){var t=localStorage.getItem("Authorization");return Q.a.create({baseURL:"https://teste.app.ucall.co.ao:9195",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type, Authorization","Access-Control-Allow-Methods":"*",Authorization:"Bearer ".concat(t)}})};function K(t,n){t.commit;return N().post("/token",n)}function W(t){t.commit;return G().get("/api/user/getUserLogado")}function X(t,n){t.commit;return G().post("/api/user/alterarSenhaUser",n)}var Y={namespaced:!0,getters:r,mutations:i,actions:o,state:O},Z=function(){return{listUsers:[],userLogged:[],errors:[]}};function tt(t){return t.listUsers}function nt(t){return t.userLogged}function et(t){return t.errors}function rt(t,n){t.listUsers.push(n)}function it(t,n){t.userLogged.push(n)}function ot(t,n){t.listUsers=[]}function ut(t,n){t.errors.unshift(n)}function st(t){t.commit;return N().get("/api/user/users")}function ct(t,n){t.commit;return G().post("/api/user/user",n)}function at(t,n){t.commit;return G().put("/api/user/user",n)}function ft(t,n){t.commit;return G().post("/api/user/enableUser",n)}function pt(t,n){t.commit;return N().post("/api/user/desativarUser/".concat(n))}function lt(t,n){t.commit;return G().post("/api/user/reiniciarSenhaUser",n)}function dt(t,n){t.commit;return G().post("/api/user/alterarSenhaUser",n)}function mt(t){t.commit;return N().get("/api/user/permissoes")}function gt(t){t.commit;return N().get("/api/user/roles")}function ht(t,n){t.commit;return G().put("/api/user/modificarPermissoes",n)}var bt={namespaced:!0,getters:u,mutations:s,actions:c,state:Z},vt=function(){return{listUsers:[],userLogged:[],errors:[]}};function Ut(t){return t.listUsers}function kt(t){return t.userLogged}function Lt(t){return t.errors}function wt(t,n){t.listUsers.push(n)}function At(t,n){t.userLogged.push(n)}function Pt(t,n){t.listUsers=[]}function xt(t,n){t.errors.unshift(n)}function yt(t){t.commit;return N().get("/api/empresa/count")}function Ct(t,n){t.commit;return G().post("/api/ticket/countTickets",n)}function Et(t){t.commit;return N().get("/api/ticket/countInqueritos")}function St(t){t.commit;return N().get("/api/ticket/ticketsByHorasArea")}function qt(t){t.commit;return N().get("/api/ticket/ticketsByArea")}function Bt(t){t.commit;return G().get("/api/ticket/ticketsByPessoa")}function Tt(t){t.commit;return N().get("/api/ticket/funcionariosLogistica")}function zt(t,n){t.commit;return G().post("/api/ticket/atribuirTicket",n)}function Rt(t){t.commit;return N().get("/api/ticket/ticketsLogistica")}function Ft(t,n){t.commit;return G().post("/api/ticket/changeStatus",n)}function It(t,n){t.commit;return G().post("/api/ticket/enviarEmail",n)}function Ot(t,n){t.commit;return G().post("/api/ticket/ticketsLogisticaFilter",n)}function _t(t,n){t.commit;return N().get("/api/ticket/ticketsLogistica/".concat(n))}function jt(t){t.commit;return N().get("/api/ticket/areasOperacoes")}function Ht(t){t.commit;return N().get("/api/ticket/areasLogistica")}function Dt(t){t.commit;return N().get("/api/ticket/destinos")}function Vt(t,n){t.commit;return G().put("/api/venda/recusa",n)}function $t(t,n){t.commit;return G().post("/api/produto/recusa",n)}function Jt(t,n){t.commit;return G().put("/api/produto/recusa",n)}function Mt(t,n){t.commit;return G().put("/api/produto/enableRecusa/".concat(n))}var Qt={namespaced:!0,getters:a,mutations:f,actions:p,state:vt},Nt=function(){return{listUsers:[],userLogged:[],errors:[]}};function Gt(t){return t.listUsers}function Kt(t){return t.userLogged}function Wt(t){return t.errors}function Xt(t,n){t.listUsers.push(n)}function Yt(t,n){t.userLogged.push(n)}function Zt(t,n){t.listUsers=[]}function tn(t,n){t.errors.unshift(n)}function nn(t){t.commit;return N().get("/api/empresa/maquinas")}function en(t,n){t.commit;return G().post("/api/empresa/maquinas",n)}function rn(t,n){t.commit;return G().put("/api/empresa/maquinas",n)}function on(t){t.commit;return N().get("/api/empresa/empresas")}var un={namespaced:!0,getters:l,mutations:d,actions:m,state:Nt};U["a"].use(I["a"]);var sn=function(){var t=new I["a"].Store({modules:{login:Y,users:bt,maquinas:un,grafico:Qt},strict:!1});return t},cn=e("8c4f"),an=[{path:"/",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"0d9a"))},children:[{path:"",component:function(){return Promise.all([e.e(0),e.e(12)]).then(e.bind(null,"aeab"))}}]},{path:"/",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"713b"))},children:[{path:"/gerir_utilizadores",component:function(){return Promise.all([e.e(0),e.e(16)]).then(e.bind(null,"6412"))}},{path:"/gerir_maquinas",component:function(){return Promise.all([e.e(0),e.e(15)]).then(e.bind(null,"b031"))}},{path:"/gerir_empresas",component:function(){return Promise.all([e.e(0),e.e(14)]).then(e.bind(null,"988d"))}}]},{path:"/dashboard",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"713b"))},children:[{path:"",component:function(){return Promise.all([e.e(0),e.e(9)]).then(e.bind(null,"db00"))}},{path:"/users",component:function(){return Promise.all([e.e(0),e.e(7)]).then(e.bind(null,"5720"))}},{path:"/profile",component:function(){return Promise.all([e.e(0),e.e(13)]).then(e.bind(null,"6b7b"))}}]},{path:"/license",component:function(){return Promise.all([e.e(0),e.e(6)]).then(e.bind(null,"4632"))},children:[{path:"",component:function(){return Promise.all([e.e(0),e.e(11)]).then(e.bind(null,"5616"))}}]},{path:"/QuestaoInquerito",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"59f1"))},children:[{path:"",component:function(){return Promise.all([e.e(0),e.e(10)]).then(e.bind(null,"ea57"))}}]}];an.push({path:"*",component:function(){return Promise.all([e.e(0),e.e(8)]).then(e.bind(null,"e51e"))}});var fn=an;U["a"].use(cn["a"]);var pn=function(){var t=new cn["a"]({mode:"history",scrollBehavior:function(){return{x:0,y:0}},routes:fn,base:""});return t},ln=function(){return dn.apply(this,arguments)};function dn(){return dn=v()(h.a.mark((function t(){var n,e,r;return h.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("function"!==typeof sn){t.next=6;break}return t.next=3,sn({Vue:U["a"]});case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=sn;case 7:if(n=t.t0,"function"!==typeof pn){t.next=14;break}return t.next=11,pn({Vue:U["a"],store:n});case 11:t.t1=t.sent,t.next=15;break;case 14:t.t1=pn;case 15:return e=t.t1,n.$router=e,r={el:"#q-app",router:e,store:n,render:function(t){return t(F)}},t.abrupt("return",{app:r,store:n,router:e});case 19:case"end":return t.stop()}}),t)}))),dn.apply(this,arguments)}var mn=e("a925"),gn={failed:"Action failed",success:"Action was successful"},hn={"en-us":gn};U["a"].use(mn["a"]);var bn=new mn["a"]({locale:"en-us",fallbackLocale:"en-us",messages:hn}),vn=function(t){var n=t.app;n.i18n=bn};function Un(){return kn.apply(this,arguments)}function kn(){return kn=v()(h.a.mark((function t(){var n,e,r,i,o,u,s,c,a;return h.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ln();case 2:n=t.sent,e=n.app,r=n.store,i=n.router,o=!0,u=function(t){o=!1,window.location.href=t},s=window.location.href.replace(window.location.origin,""),c=[vn,void 0],a=0;case 11:if(!(!0===o&&a<c.length)){t.next=29;break}if("function"===typeof c[a]){t.next=14;break}return t.abrupt("continue",26);case 14:return t.prev=14,t.next=17,c[a]({app:e,router:i,store:r,Vue:U["a"],ssrContext:null,redirect:u,urlPath:s});case 17:t.next=26;break;case 19:if(t.prev=19,t.t0=t["catch"](14),!t.t0||!t.t0.url){t.next=24;break}return window.location.href=t.t0.url,t.abrupt("return");case 24:return console.error("[Quasar] boot error:",t.t0),t.abrupt("return");case 26:a++,t.next=11;break;case 29:if(!1!==o){t.next=31;break}return t.abrupt("return");case 31:new U["a"](e);case 32:case"end":return t.stop()}}),t,null,[[14,19]])}))),kn.apply(this,arguments)}U["a"].prototype.$axios=Q.a,Un()},"31cd":function(t,n,e){}},[[0,3,0]]]);