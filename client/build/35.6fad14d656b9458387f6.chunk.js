(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"8bc6daf91aa653d1fff7":function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setQueryValue",function(){return C}),a.d(n,"setOneValue",function(){return D}),a.d(n,"clearOne",function(){return U}),a.d(n,"loadAllRequest",function(){return F}),a.d(n,"loadAllSuccess",function(){return I}),a.d(n,"loadAllFailure",function(){return q}),a.d(n,"loadOneRequest",function(){return Q}),a.d(n,"loadOneSuccess",function(){return W}),a.d(n,"loadOneFailure",function(){return V}),a.d(n,"addEditRequest",function(){return H}),a.d(n,"addEditSuccess",function(){return J}),a.d(n,"addEditFailure",function(){return M});var r=a("8af190b70a6bc55c6f1b"),i=(a("8a2d1b95e05b6a321e74"),a("d7dd51e1bf6bfc2c9c3d")),o=a("a28fc3c963a1d4d1a2e5"),l=a("ab4cb61bcb2dc161defb"),c=a("4a683f0a5e64e66a8eb9"),u=a.n(c),d=a("c7fd554010f79f6c0ef8"),s=a.n(d),p=a("2aea235afd5c55b8b19b"),m=a.n(p),f=a("adc20f99e57c573c589c"),b=a("d95b0cf107403b178365"),g=a("7edf83707012a871cdfb"),y="app/AdminTemplateListingPage/CLEAR_ONE",v="app/AdminTemplateListingPage/LOAD_ALL_REQUEST",O="app/AdminTemplateListingPage/LOAD_ONE_REQUEST",L="app/AdminTemplateListingPage/ADD_EDIT_REQUEST",A="app/AdminTemplateListingPage/ADD_EDIT_SUCCESS",h="app/AdminTemplateListingPage/ADD_EDIT_FAILURE",_="app/AdminTemplateListingPage/SET_QUERY_REQUEST",x="app/AdminTemplateListingPage/SET_ONE_VALUE",E={all:[],one:{variables:[],template_name:"",template_key:"",information:"",alternate_text:"",form:"",subject:"",body:""}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return Object(g.a)(e,function(e){switch(t.type){case _:e.query[t.payload.key]=t.payload.value;break;case"app/AdminTemplateListingPage/CLEAR_QUERY":e.query=E.query;break;case x:e.one[t.payload.key]=t.payload.value;break;case"app/AdminTemplateListingPage/LOAD_ALL_SUCCESS":e.all=t.payload.data;break;case"app/AdminTemplateListingPage/LOAD_ONE_SUCCESS":e.one=t.payload.data;break;case y:e.one=E.one}})},T=function(e){return e.adminTemplateListingPage||E},j=function(){return Object(o.a)(T,function(e){return e.one})},S=a("d782b72bc5b680c7122c"),w=a("3aced5b508e7389026da"),R=a("6144be5eac76f277117a"),N=a("6542cd13fd5dd1bcffd4"),P=a("a72b40110d9c31c9b5c5"),C=function(e){return{type:_,payload:e}},D=function(e){return{type:x,payload:e}},U=function(e){return{type:y,payload:e}},F=function(e){return{type:v,payload:e}},I=function(e){return{type:"app/AdminTemplateListingPage/LOAD_ALL_SUCCESS",payload:e}},q=function(e){return{type:"app/AdminTemplateListingPage/LOAD_ALL_FAILURE",payload:e}},Q=function(e){return{type:O,payload:e}},W=function(e){return{type:"app/AdminTemplateListingPage/LOAD_ONE_SUCCESS",payload:e}},V=function(e){return{type:"app/AdminTemplateListingPage/LOAD_ONE_FAILURE",payload:e}},H=function(e){return{type:L,payload:e}},J=function(e){return{type:A,payload:e}},M=function(e){return{type:h,payload:e}},Y=regeneratorRuntime.mark(X),$=regeneratorRuntime.mark(Z),B=regeneratorRuntime.mark(ee),G=regeneratorRuntime.mark(te),K=regeneratorRuntime.mark(ae),z=regeneratorRuntime.mark(ne);function X(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(S.select)(Object(N.d)());case 2:return e=t.sent,t.next=5,Object(S.call)(R.a.get("template",I,q,e));case 5:case"end":return t.stop()}},Y)}function Z(e){var t;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(S.select)(Object(N.d)());case 2:return t=a.sent,a.next=5,Object(S.call)(R.a.get("template/".concat(e.payload),W,V,t));case 5:case"end":return a.stop()}},$)}function ee(){var e,t;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(S.select)(Object(N.d)());case 2:return e=a.sent,a.next=5,Object(S.select)(j());case 5:return t=a.sent,a.next=8,Object(S.fork)(R.a.post("template",J,M,t,e));case 8:return a.next=10,Object(S.take)([w.LOCATION_CHANGE,h]);case 10:case"end":return a.stop()}},B)}function te(e){var t;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t={message:e.payload.msg||"something went wrong",options:{variant:"warning"}},a.next=3,Object(S.put)(Object(P.a)(t));case 3:case"end":return a.stop()}},G)}function ae(e){var t;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t={message:e.payload.msg||"Saved Success",options:{variant:"success"}},a.next=3,Object(S.put)(Object(P.a)(t));case 3:case"end":return a.stop()}},K)}function ne(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.takeLatest)(v,X);case 2:return e.next=4,Object(S.takeLatest)(O,Z);case 4:return e.next=6,Object(S.takeLatest)(L,ee);case 6:return e.next=8,Object(S.takeLatest)(h,te);case 8:return e.next=10,Object(S.takeLatest)(A,ae);case 10:case"end":return e.stop()}},z)}var re,ie=a("d733903be61208652859"),oe=a("5932430beb0c05240602");function le(e,t,a,n){re||(re="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var o in r)void 0===t[o]&&(t[o]=r[o]);else t||(t=r||{});if(1===i)t.children=n;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:re,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"AdminTemplateListingPage",function(){return ge});var ue=le(ie.a,{},void 0,"Email Template Manage"),de=le("label",{className:"block mb-2"},void 0,"Template Name"),se=le("label",{className:"block mb-2"},void 0,"Template Key"),pe=le("option",{value:""},void 0,le("em",{},void 0,"None")),me=le("label",{className:"block mb-2"},void 0,"Informations"),fe=le("label",{className:"block mb-2"},void 0,"Variables"),be=le(m.a,{variant:"contained",color:"primary",type:"submit"},void 0,"Save");function ge(e){var t=e.classes,a=e.loadAllRequest,n=e.loadOneRequest,i=e.addEditRequest,o=e.setOneValue,l=e.all,c=e.one,u=ce(Object(r.useState)(""),2),d=u[0],p=u[1];Object(r.useEffect)(function(){a()},[]);var m=function(e){var t=e.target,a=t.name,n=t.value;o({key:a,value:n})};return le("div",{},void 0,ue,le(oe.a,{},void 0,le("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),d&&(console.log("submit"),i())}},void 0,le("div",{className:"mb-4"},void 0,de,le("input",{readOnly:"rea",id:"template-name",value:c.template_name||"",className:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey",type:"text",onChange:m})),le("div",{className:"mb-4"},void 0,se,le("select",{className:"h-12 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey ",id:"template-key",value:d||"",onChange:function(e){var t=e.target.value;p(t),t&&n(t)}},void 0,pe,l.map(function(e){return le("option",{value:e.template_key},e._id,e.template_key)}))),le("div",{className:"mb-4"},void 0,me,le("input",{className:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey",type:"text",id:"informations",value:c.information||""})),le("div",{className:"mb-4"},void 0,fe,le("select",{multiple:!0,value:c.variables,onChange:function(){return null}},void 0,c.variables.map(function(e){return le("option",{value:e},e,e)}))),le(s.a,{id:"from_email",label:"From",value:c.from||"",className:t.textField,margin:"normal",onChange:m,inputProps:{name:"from"},fullWidth:!0}),le(s.a,{id:"subject_email",label:"Subject",value:c.subject||"",className:t.textField,margin:"normal",onChange:m,inputProps:{name:"subject"},fullWidth:!0}),le(s.a,{id:"alternate_text",label:"Alternate Text",value:c.alternate_text||"",className:t.textField,margin:"normal",onChange:m,inputProps:{name:"alternate_text"},fullWidth:!0}),le("div",{dangerouslySetInnerHTML:{__html:c.body}}),le(s.a,{id:"body_email",label:"Body",value:c.body||"",className:t.textField,margin:"normal",onChange:m,multiline:!0,inputProps:{name:"body"},fullWidth:!0}),be)))}var ye=Object(o.b)({all:Object(o.a)(T,function(e){return e.all}),one:j()}),ve=Object(i.connect)(ye,n),Oe=u()(function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit},button:{margin:e.spacing.unit}}}),Le=Object(b.a)({key:"adminTemplateListingPage",reducer:k}),Ae=Object(f.a)({key:"adminTemplateListingPage",saga:ne});t.default=Object(l.compose)(Oe,Le,Ae,ve)(ge)}}]);