(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"988d":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"flex bg-white"},[s("div",{staticClass:"full-width"},[s("div",{staticClass:"q-pt-sm q-pl-sm q-pr-sm q-gutter-sm"},[s("q-bar",{staticClass:"bg-grey-4 text-grey-7 text-bold",staticStyle:{height:"47px"},attrs:{dense:""}},[s("q-icon",{staticClass:"q-pr-md",staticStyle:{"padding-left":"27px"},attrs:{size:"sm",name:"gavel"}}),s("div",[e._v("Gestão de Contratos")]),s("q-space"),s("q-icon",{attrs:{name:"near_me"}})],1),s("div",{},[1==e.loadx?s("div",{staticClass:"q-pa-md text-center"},[s("q-spinner-tail",{attrs:{size:"xl",color:"info"}})],1):s("q-table",{staticClass:"no-border-radius",attrs:{title:"",data:e.data,columns:e.columns,"row-key":"designacao","selected-rows-label":e.getSelectedString,"rows-per-page-label":"Mostrar","no-results-label":"Nenhum dado encontrado!","no-data-label":"...",headerClasses:"text-red",filter:e.filter},scopedSlots:e._u([{key:"top-left",fn:function(){return[s("q-btn",{staticClass:"q-mr-xs",attrs:{size:"sm",color:"info",icon:"line_style"}}),s("q-btn",{attrs:{size:"sm",color:"green-8",icon:"format_clear"},on:{click:function(t){e.filter=""}}})]},proxy:!0},{key:"top-right",fn:function(){return[s("q-input",{staticClass:"q-pa-md",staticStyle:{width:"500px"},attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Pesquisar"},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"search"}}),s("q-btn",{attrs:{color:"green-8",icon:"label_off"},on:{click:function(t){e.filter=""}}}),s("q-btn",{attrs:{label:"Adicionar",color:"info",icon:"add_circle"},on:{click:function(t){return e.showEmpresa()}}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[s("q-tr",{attrs:{props:t}},[s("q-td",{staticClass:"text-bold text-grey-8 text-body2"},[s("q-btn-dropdown",{staticClass:"no-border-radius",attrs:{size:"xs",icon:"vertical_split",color:"info",label:""}},[s("div",{staticClass:"row no-wrap q-pa-md"},[s("div",{staticClass:"column"},[s("div",{staticClass:"text-subtitle1 text-bold text-grey-7 q-mb-md"},[e._v("\n                        Operações\n                      ")]),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-mb-xs",attrs:{icon:"history",color:"green-8",label:"Detalhes",push:"",size:"sm"}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-mb-xs",attrs:{icon:"bookmarks",color:"purple-8",label:"Adicionar Máquina",push:"",size:"sm"}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-mb-xs",attrs:{icon:"edit",color:"blue-8",label:"Alterar",push:"",size:"sm"},on:{click:function(s){return e.showEmpresaEdit(t.row)}}})],1)])])],1),e._l(t.cols,(function(a){return s("q-td",{key:a.name,staticClass:"text-bold",attrs:{props:t}},[e._v(e._s(a.value))])}))],2)]}}])})],1),s("q-dialog",{attrs:{persistent:"","transition-show":"flip-down","transition-hide":"flip-up"},model:{value:e.btnAddEmpresa,callback:function(t){e.btnAddEmpresa=t},expression:"btnAddEmpresa"}},[s("q-card",{staticClass:"bg-white text-grey-8 no-border-radius",staticStyle:{width:"700px","max-width":"80vw"}},[s("q-bar",{staticClass:"bg-info text-white"},[s("q-space"),s("q-btn",{attrs:{dense:"",flat:"",icon:"close"}},[s("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"content-class":"bg-white text-info"}},[e._v("Fechar")])],1)],1),s("q-card-section",[s("div",{staticClass:"text-h6"},[s("div",[s("q-icon",{attrs:{size:"xl",name:"add"}}),e._v("Adicionar Empresa")],1)])]),s("q-card-section",[s("q-form",{staticClass:"form-group",on:{submit:function(t){return e.addEmpresa(e.empresa)}}},[s("div",{staticClass:"row q-pb-md"},[s("div",{staticClass:"row col-md-12"},[s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",autofocus:"",label:"Nome da Empresa",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Empresa Inválida"}]},model:{value:e.empresa.nome,callback:function(t){e.$set(e.empresa,"nome",t)},expression:"empresa.nome"}})],1),s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"NIF.",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"NIF: Inválido"}]},model:{value:e.empresa.nif,callback:function(t){e.$set(e.empresa,"nif",t)},expression:"empresa.nif"}})],1)]),s("div",{staticClass:"row col-md-12"},[s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"Província",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Província Inválida"}]},model:{value:e.empresa.provincia,callback:function(t){e.$set(e.empresa,"provincia",t)},expression:"empresa.provincia"}})],1),s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"Município",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Município Inválido"}]},model:{value:e.empresa.municipio,callback:function(t){e.$set(e.empresa,"municipio",t)},expression:"empresa.municipio"}})],1)]),s("div",{staticClass:"row col-md-12"},[s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"Sócio",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Sócio Inválido"}]},model:{value:e.empresa.socio,callback:function(t){e.$set(e.empresa,"socio",t)},expression:"empresa.socio"}})],1),s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"Gerente",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Gerente Inválido"}]},model:{value:e.empresa.gerente,callback:function(t){e.$set(e.empresa,"gerente",t)},expression:"empresa.gerente"}})],1)]),s("div",{staticClass:"row col-md-12"},[s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"Gerente(Tel.1)",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Gerente(Tel.1) Inválido"}]},model:{value:e.empresa.gerenteTel1,callback:function(t){e.$set(e.empresa,"gerenteTel1",t)},expression:"empresa.gerenteTel1"}})],1),s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"Gerente(Tel.2)",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Gerente(Tel.2) Inválido"}]},model:{value:e.empresa.gerenteTel2,callback:function(t){e.$set(e.empresa,"gerenteTel2",t)},expression:"empresa.gerenteTel2"}})],1)])]),s("div",{staticClass:"row"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ml-md",attrs:{color:"red","icon-right":"cancel",label:"Cancelar"},on:{click:function(t){e.btnAddEmpresa=!1}}}),null!=e.empresa.gerenteTel1?s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ml-md",attrs:{color:"info",type:"submit","icon-right":"send",label:"Confirmar"}}):e._e()],1)])],1)],1)],1),s("q-dialog",{attrs:{persistent:"","transition-show":"flip-down","transition-hide":"flip-up"},model:{value:e.btnEditEmpresa,callback:function(t){e.btnEditEmpresa=t},expression:"btnEditEmpresa"}},[s("q-card",{staticClass:"bg-white text-grey-8 no-border-radius",staticStyle:{width:"700px","max-width":"80vw"}},[s("q-bar",{staticClass:"bg-info text-white"},[s("q-space"),s("q-btn",{attrs:{dense:"",flat:"",icon:"close"}},[s("q-tooltip",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"content-class":"bg-white text-info"},on:{click:function(t){return e.showEmpresa()}}},[e._v("Fechar")])],1)],1),s("q-card-section",[s("div",{staticClass:"text-h6"},[s("div",[s("q-icon",{attrs:{size:"xl",name:"edit"}}),e._v("Alterar Empresa")],1)])]),s("q-card-section",[s("q-form",{staticClass:"form-group",on:{submit:function(t){return e.addEmpresa(e.empresa)}}},[s("div",{staticClass:"row q-pb-md"},[s("div",{staticClass:"row col-md-12"},[s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",autofocus:"",label:"Nome da Empresa",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Empresa Inválida"}]},model:{value:e.empresa.nome,callback:function(t){e.$set(e.empresa,"nome",t)},expression:"empresa.nome"}})],1),s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"NIF.",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"NIF: Inválido"}]},model:{value:e.empresa.nif,callback:function(t){e.$set(e.empresa,"nif",t)},expression:"empresa.nif"}})],1)]),s("div",{staticClass:"row col-md-12"},[s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"Província",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Província Inválida"}]},model:{value:e.empresa.provincia,callback:function(t){e.$set(e.empresa,"provincia",t)},expression:"empresa.provincia"}})],1),s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"Município",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Município Inválido"}]},model:{value:e.empresa.municipio,callback:function(t){e.$set(e.empresa,"municipio",t)},expression:"empresa.municipio"}})],1)]),s("div",{staticClass:"row col-md-12"},[s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"Sócio",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Sócio Inválido"}]},model:{value:e.empresa.socio,callback:function(t){e.$set(e.empresa,"socio",t)},expression:"empresa.socio"}})],1),s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"Gerente",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Gerente Inválido"}]},model:{value:e.empresa.gerente,callback:function(t){e.$set(e.empresa,"gerente",t)},expression:"empresa.gerente"}})],1)]),s("div",{staticClass:"row col-md-12"},[s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"Gerente(Tel.1)",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Gerente(Tel.1) Inválido"}]},model:{value:e.empresa.gerenteTel1,callback:function(t){e.$set(e.empresa,"gerenteTel1",t)},expression:"empresa.gerenteTel1"}})],1),s("div",{staticClass:"col-md-6 q-pr-xs"},[s("q-input",{attrs:{color:"blue-9",label:"Gerente(Tel.2)",filled:"","lazy-rules":"",required:"",rules:[function(e){return e&&e.length>0||"Gerente(Tel.2) Inválido"}]},model:{value:e.empresa.gerenteTel2,callback:function(t){e.$set(e.empresa,"gerenteTel2",t)},expression:"empresa.gerenteTel2"}})],1)])]),s("div",{staticClass:"row"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ml-md",attrs:{color:"red","icon-right":"cancel",label:"Cancelar"},on:{click:function(t){e.btnEditEmpresa=!1}}}),null!=e.empresa.gerenteTel1?s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ml-md",attrs:{color:"light-blue",type:"submit","icon-right":"send",label:"Confirmar"}}):e._e()],1)])],1)],1)],1)],1)])])},r=[],i=s("967e"),n=s.n(i),l=(s("96cf"),s("fa84")),o=s.n(l),c=(s("b383"),s("cf57")),d=(s("e669"),s("6bed")),u=s("d272"),p={data:function(){var e=this;return{loadx:!1,empresa:{id:null,isActivo:!0},btnAddEmpresa:!1,btnEditEmpresa:!1,filter:"",columns:[{align:"left",label:"Operações",sortable:!0},{name:"descricao",required:!0,label:"Empresa",align:"left",field:function(t){return e.getNull(t.nome)},format:function(e){return"".concat(e)},sortable:!0},{name:"nif",required:!0,label:"NIF.",align:"left",field:function(t){return e.getNull(t.nif)},format:function(e){return"".concat(e)},sortable:!0},{name:"municipio",required:!0,label:"Província/Município",align:"left",field:function(t){return e.getNull(t.municipio?t.municipio.provincia.descricao:"")+" / "+e.getNull(t.municipio?t.municipio.descricao:"")},format:function(e){return"".concat(e)},sortable:!0},{name:"gerente",required:!0,label:"Gerente",align:"left",field:function(t){return e.getNull(t.gerente?t.gerente.nomeCompleto:"")},format:function(e){return"".concat(e)},sortable:!0},{name:"gerenteemail",required:!0,label:"E-mail *Gerente",align:"left",field:function(t){return e.getNull(t.gerente?t.gerente.email:"")},format:function(e){return"".concat(e)},sortable:!0},{name:"gerenteTel1",required:!0,label:"Contactos *Gerente",align:"left",field:function(t){return e.getNull(t.gerente?t.gerente.contacto1+" | "+t.gerente.contacto2+" | "+t.gerente.contacto3:"")},format:function(e){return"".concat(e)},sortable:!0}],data:[]}},created:function(){this.fasSignal=u["b"],this.fasWifi=u["c"],this.fasBatteryFull=u["a"]},mounted:function(){this.listar()},methods:{getNull:function(e){return null==e||""==e?"------":e},addEmpresa:function(e){if(""!=e.descricao&&""!=e.codigo){e.id=this.data.length+1,this.lmsg("info","Operação realizada com sucesso!","info"),console.log("Maq: ",e);var t={id:e.id+1,nome:e.nome,nif:e.nif,provincia:e.provincia,municipio:e.municipio,socio:e.socio,gerente:e.gerente,gerenteTel1:e.gerenteTel1,gerenteTel2:e.gerenteTel2,isActivo:!0};this.data.push(t),this.btnAddEmpresa=!1,this.btnEditEmpresa=!1}else this.lmsg("orange","Preencha todos os campos","orange")},showEmpresa:function(){this.btnAddEmpresa=!this.btnAddEmpresa,this.empresa={},this.btnEditEmpresa=!1},showEmpresaEdit:function(e){this.btnEditEmpresa=!this.btnAddEmpresa,this.empresa.descricao="",this.empresa.codigo="",1==this.btnEditEmpresa&&(this.empresa={id:e.id,nome:e.nome,nif:e.nif,provincia:e.provincia,municipio:e.municipio,socio:e.socio,gerente:e.gerente,gerenteTel1:e.gerenteTel1,gerenteTel2:e.gerenteTel2,isActivo:e.isActivo})},lmsg:function(e,t,s){var a=this,r=("undefined"!==typeof c["a"]?c["a"]:Quasar.components.QSpinnerGears,"undefined"!==typeof d["a"]?d["a"]:Quasar.components.QSpinnerComment);this.timer=setTimeout((function(){a.$q.loading.show({spinner:r,spinnerColor:s,messageColor:"white",backgroundColor:e,message:t}),a.timer=setTimeout((function(){a.$q.loading.hide(),a.timer=void 0}),1e3)}),100)},getSelectedString:function(){return 0===this.selected.length?"":"".concat(this.selected.length," linha").concat(this.selected.length>1?"s":""," selecionada").concat(this.selected.length>1?"s":""," de ").concat(this.data.length," Registro").concat(this.data.length>1?"s":"")},listar:function(){var e=o()(n.a.mark((function e(){var t,s=this;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.filter="","undefined"!==typeof d["a"]?d["a"]:Quasar.components.QSpinnerComment,e.prev=2,this.loadx=!0,e.next=6,this.$store.dispatch("maquinas/listEmpresas");case 6:t=e.sent,null!=t.data?this.timer=setTimeout((function(){s.timer=setTimeout((function(){s.$q.loading.hide(),s.timer=void 0,s.data=t.data,s.lista=t.data,s.loadx=!1}),1e3)}),0):this.lmsg("red","ups! Ocorreu um erro internamente","red"),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),this.lmsgx("red-9",e.t0,"red-9");case 13:case"end":return e.stop()}}),e,this,[[2,10]])})));function t(){return e.apply(this,arguments)}return t}()}},m=p,f=s("2877"),b=s("eebe"),g=s.n(b),v=s("9989"),q=s("d847"),h=s("0016"),x=s("2c91"),C=s("007d"),w=s("eaac"),y=s("9c40"),E=s("27f9"),T=s("bd08"),k=s("db86"),z=s("f20b"),N=s("9564"),Q=s("58a8"),I=s("24e8"),S=s("f09f"),$=s("05c0"),_=s("a370"),A=s("0378"),G=s("7f67"),F=Object(f["a"])(m,a,r,!1,null,"0c76c9a2",null);t["default"]=F.exports;g()(F,"components",{QPage:v["a"],QBar:q["a"],QIcon:h["a"],QSpace:x["a"],QSpinnerTail:C["a"],QTable:w["a"],QBtn:y["a"],QInput:E["a"],QTr:T["a"],QTd:k["a"],QBtnDropdown:z["a"],QToggle:N["a"],QBadge:Q["a"],QDialog:I["a"],QCard:S["a"],QTooltip:$["a"],QCardSection:_["a"],QForm:A["a"]}),g()(F,"directives",{ClosePopup:G["a"]})}}]);