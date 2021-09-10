(this["webpackJsonpzip-code-search"]=this["webpackJsonpzip-code-search"]||[]).push([[0],{32:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(5),s=n.n(o),a=n(3),i=n(12),d=n.n(i),u=n(17),l=n(18),h=n(19),p=n(6),j=n(23),b=n(22),f=(n(32),n.p+"static/media/logo.00eb89bd.jpg"),O=n(13),C=n.n(O),m="HANDLE_ZIP_CODE_INPUT",v="ZIP_CODE_REQUEST",x="ZIP_CODE_RECEIVE",g="ZIP_CODE_FAILURE",y=function(){return{type:v}},z=function(e){var t=e.sourse,n=e.code,r=e.address,c=e.district,o=e.city,s=e.state,a=e.status;return{type:x,sourse:t,code:n,address:r,district:c,city:o,state:s,status:a}},M=function(e){return function(t){return t(y()),function(e){return fetch("https://viacep.com.br/ws/".concat(e,"/json/")).then((function(e){return e.json()})).then((function(e){var t=e.cep,n=e.logradouro,r=e.bairro,c=e.localidade,o=e.uf;return e.erro?{sourse:"https://viacep.com.br",status:"Not-found"}:{sourse:"https://viacep.com.br",code:t,address:n,district:r,city:c,state:o,status:"OK"}}))}(e).then((function(e){return t(z(e))})).catch((function(){return t(y()),function(e){return fetch("https://ws.apicep.com/busca-cep/api/cep/".concat(e,".json")).then((function(e){return e.json()})).then((function(e){var t=e.code,n=e.address,r=e.district,c=e.city,o=e.state;return e.ok?{sourse:"https://apicep.com/api-de-consulta/",code:t,address:n,district:r,city:c,state:o,status:"OK"}:{sourse:"https://apicep.com/api-de-consulta/",status:"Not-found"}}))}(e).then((function(e){return t(z(e))})).catch((function(){return t(y()),function(e){return fetch("https://api.findcep.com/v1/cep/".concat(e,".json")).then((function(e){return e.json()})).then((function(e){var t=e.cep,n=e.logradouro,r=e.bairro,c=e.cidade,o=e.uf;return 404===e.status_code?{sourse:"https://www.findcep.com/",status:"Not-found"}:{sourse:"https://www.findcep.com/",code:t,address:n,district:r,city:c,state:o,status:"OK"}}))}(e).then((function(e){return t(z(e))})).catch((function(){return t({type:g})}))}))}))}},E=n(1),w=Object(a.b)((function(e){return{ZipCodeData:e.zipCodeDataReducer}}))((function(e){var t=e.ZipCodeData,n=e.handleCloseModal;return Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{children:"CEP n\xe3o encontrado. Verifique se digitou corretamente e tente outra vez."}),Object(E.jsxs)("div",{className:"zip-code-footer",children:[Object(E.jsx)("a",{href:t.sourse,target:"_blank",rel:"noreferrer",children:"Fonte"}),Object(E.jsx)("button",{type:"button",onClick:n,children:"Sair"})]})]})})),D=Object(a.b)((function(e){return{ZipCodeData:e.zipCodeDataReducer}}))((function(e){var t=e.ZipCodeData,n=e.handleCloseModal;return"Not-found"===t.status?Object(E.jsx)(w,{handleCloseModal:n}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("h1",{className:"zip-code-title",children:["CEP: ",t.code]}),Object(E.jsxs)("p",{children:[Object(E.jsx)("strong",{children:"Rua:"})," ",t.address]}),Object(E.jsxs)("p",{children:[Object(E.jsx)("strong",{children:"Bairro:"})," ",t.district]}),Object(E.jsxs)("p",{children:[Object(E.jsx)("strong",{children:"Cidade/UF:"})," ","".concat(t.city,"/").concat(t.state)]}),Object(E.jsxs)("div",{className:"zip-code-footer",children:[Object(E.jsx)("a",{href:t.sourse,target:"_blank",rel:"noreferrer",children:"Fonte"}),Object(E.jsx)("button",{type:"button",onClick:n,children:"Sair"})]})]})})),k=function(e){var t=e.handleCloseModal;return Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{children:"Servidores fora do ar! Infelizmente n\xe3o conseguimos encontrar a informa\xe7\xe3o do seu CEP. Por favor tente novamente, mais tarde."}),Object(E.jsx)("div",{className:"zip-code-footer",children:Object(E.jsx)("button",{type:"button",onClick:t,children:"Sair"})})]})};C.a.setAppElement("#root");var N=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={showModal:!1},e.handleOpenModal=e.handleOpenModal.bind(Object(p.a)(e)),e.handleCloseModal=e.handleCloseModal.bind(Object(p.a)(e)),e}return Object(h.a)(n,[{key:"handleOpenModal",value:function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.requestZipCodeData,r=t.zipCode,e.next=3,n(r);case 3:this.setState({showModal:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){var e=this,t=this.state.showModal,n=this.props,r=n.handleInput,c=n.zipCodeMask,o=n.ZipCodeData;return Object(E.jsxs)("main",{children:[Object(E.jsx)("img",{src:f,alt:"Logo Site"}),Object(E.jsx)("h1",{children:"Encontre seu CEP"}),Object(E.jsxs)("form",{className:"zipCode-form",children:[Object(E.jsx)("label",{htmlFor:"zipCode-input",children:Object(E.jsx)("input",{id:"zipCode-input",name:"zipCode-input",onChange:r,placeholder:"Digite seu CEP",maxLength:"9",type:"text",value:c})}),Object(E.jsx)("button",{type:"button",onClick:function(){return e.handleOpenModal()},children:"Pesquisar"}),Object(E.jsx)(C.a,{isOpen:t,className:"modal-box",onRequestClose:this.handleCloseModal,contentLabel:"Example Modal",children:Object(E.jsx)("div",{className:"modal-box-info",children:o.failure?Object(E.jsx)(k,{handleCloseModal:this.handleCloseModal}):Object(E.jsx)(D,{handleCloseModal:this.handleCloseModal})})})]})]})}}]),n}(c.a.Component),R=Object(a.b)((function(e){return{zipCodeMask:e.formReducer.zipCode,zipCode:e.formReducer.zipCode.replace("-",""),ZipCodeData:e.zipCodeDataReducer}}),(function(e){return{handleInput:function(t){var n=t.target;return e(function(e){var t=e.value;return{type:m,zipCode:t.replace(/^(\d{5})(\d)/,"$1-$2")}}(n))},requestZipCodeData:function(t){return e(M(t))}}}))(N);var P=function(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)(R,{})})},Z=n(4),_=n(20),I=n(21),F=n(2),S={zipCode:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(F.a)(Object(F.a)({},e),{},{zipCode:t.zipCode});default:return e}},L={sourse:"",code:"",address:"",district:"",city:"",state:"",status:"not-request",isFetching:!1,failure:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(F.a)(Object(F.a)({},e),{},{isFetching:!0});case x:return Object(F.a)(Object(F.a)({},e),{},{sourse:t.sourse,code:t.code,address:t.address,district:t.district,city:t.city,state:t.state,status:t.status,isFetching:!1});case g:return Object(F.a)(Object(F.a)({},e),{},{isFetching:!1,failure:!0});default:return e}},U=Object(Z.combineReducers)({formReducer:q,zipCodeDataReducer:A}),K=Object(Z.createStore)(U,Object(_.composeWithDevTools)(Object(Z.applyMiddleware)(I.a)));s.a.render(Object(E.jsx)(a.a,{store:K,children:Object(E.jsx)(P,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.3f2dae00.chunk.js.map