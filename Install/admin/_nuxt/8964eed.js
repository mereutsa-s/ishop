(window.webpackJsonp=window.webpackJsonp||[]).push([[44,14],{436:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(5),o=r(11);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},m=c,d=r(16),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.errorData?r("ul",{staticClass:"error-list mb-15"},[r("li",{staticClass:"mb-10"},[t._v(t._s(t.$t("error.feo")))]),t._v(" "),t._l(t.errorData,(function(e,n){return r("li",{key:n},[t._v("\n    "+t._s(e)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},439:function(t,e,r){"use strict";r(25),r(37);e.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,allowedExcelExtensions:/(\.xlsx)$/i,passwordLength:6,maxImageSize:1,maxExcelSize:2,maxVideoSize:2,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidExcel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return t.size>1024*e*1024?this.$t("util.fSize",{size:e}):this.allowedExcelExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidImage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.size>1024*e*1024?this.$t("util.fSize",{size:e}):r&&!this.allowedImageExtensions.exec(t.name)?this.$t("util.invFile"):r||this.allowedVideoExtensions.exec(t.name)?null:this.$t("util.invFile")},isValidEmail:function(t){return this.reg.test(t)},isValidLength:function(t){return t&&t.length>=this.passwordLength||!1}}}},726:function(t,e,r){"use strict";r.r(e);r(20),r(19),r(23),r(8),r(27),r(17),r(28);var n=r(1),o=r(5),l=(r(21),r(148)),c=r(439),m=r(48),d=r(436),v=r(80),f=r(11);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var P={name:"SmtpSetting",data:function(){return{gettingStore:!1,updating:!1,loading:!1,hasError:!1,result:{smtpHost:null,smtpPort:null,smtpUsername:null,smtpPassword:null,smtpEncryption:null,mailFrom:null}}},props:{},mixins:[v.a,c.a],components:{AjaxButton:l.default,Spinner:m.default,ErrorFormatter:d.default},computed:{},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({fetchingData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.getRequest({api:"smtpFind"});case 4:(data=e.sent)&&(t.result=data),t.loading=!1,e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",t.$nuxt.error(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},updateData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.result.smtpHost&&t.result.smtpPort&&t.result.smtpUsername&&t.result.smtpPassword&&t.result.smtpEncryption&&t.result.mailFrom)){e.next=15;break}return t.updating=!0,e.prev=2,e.next=5,t.setRequest({params:t.result,api:"smtpAction"});case 5:(data=e.sent)&&(t.result=data),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",t.$nuxt.error(e.t0));case 12:t.updating=!1,e.next=16;break;case 15:t.hasError=!0;case 16:case"end":return e.stop()}}),e,null,[[2,9]])})))()}},Object(f.b)("common",["setRequest","getRequest"])),created:function(){},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchingData();case 2:case"end":return e.stop()}}),e)})))()}},_=P,w=r(16),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{class:{"has-error":t.hasError},on:{submit:function(e){return e.preventDefault(),t.updateData.apply(null,arguments)}}},[t.loading?r("div",{staticClass:"spinner-wrapper"},[r("spinner",{staticClass:"mr-15",attrs:{radius:60,color:"primary"}})],1):t._e(),t._v(" "),r("div",{staticClass:"input-wrapper "},[r("div",{staticClass:"input-wrapper"},[r("label",[t._v("\n        "+t._s(t.$t("dataPage.smtpHost"))+"\n      ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.result.smtpHost,expression:"result.smtpHost"}],class:{invalid:!t.result.smtpHost&&t.hasError},attrs:{type:"text",placeholder:t.$t("dataPage.smtpHost")},domProps:{value:t.result.smtpHost},on:{input:function(e){e.target.composing||t.$set(t.result,"smtpHost",e.target.value)}}}),t._v(" "),!t.result.smtpHost&&t.hasError?r("span",{staticClass:"error"},[t._v("\n       "+t._s(t.$t("category.req",{type:t.$t("dataPage.smtpHost")}))+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"dply-felx inputs"},[r("div",{staticClass:"input-wrapper w-50 pr-7-5"},[r("label",[t._v("\n          "+t._s(t.$t("dataPage.smtpPort"))+"\n        ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.result.smtpPort,expression:"result.smtpPort"}],class:{invalid:!t.result.smtpPort&&t.hasError},attrs:{type:"text",placeholder:t.$t("dataPage.smtpPort")},domProps:{value:t.result.smtpPort},on:{input:function(e){e.target.composing||t.$set(t.result,"smtpPort",e.target.value)}}}),t._v(" "),!t.result.smtpPort&&t.hasError?r("span",{staticClass:"error"},[t._v("\n          "+t._s(t.$t("category.req",{type:t.$t("dataPage.smtpPort")}))+"\n        ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-wrapper w-50 pl-7-5"},[r("label",[t._v("\n          "+t._s(t.$t("dataPage.smtpEnc"))+"\n        ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.result.smtpEncryption,expression:"result.smtpEncryption"}],class:{invalid:!t.result.smtpEncryption&&t.hasError},attrs:{type:"text",placeholder:t.$t("dataPage.smtpEnc")},domProps:{value:t.result.smtpEncryption},on:{input:function(e){e.target.composing||t.$set(t.result,"smtpEncryption",e.target.value)}}}),t._v(" "),!t.result.smtpEncryption&&t.hasError?r("span",{staticClass:"error"},[t._v("\n          "+t._s(t.$t("category.req",{type:t.$t("dataPage.smtpEnc")}))+"\n        ")]):t._e()])]),t._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[t._v("\n        "+t._s(t.$t("dataPage.smtpUser"))+"\n      ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.result.smtpUsername,expression:"result.smtpUsername"}],class:{invalid:!t.result.smtpUsername&&t.hasError},attrs:{type:"text",placeholder:t.$t("dataPage.smtpUser")},domProps:{value:t.result.smtpUsername},on:{input:function(e){e.target.composing||t.$set(t.result,"smtpUsername",e.target.value)}}}),t._v(" "),!t.result.smtpUsername&&t.hasError?r("span",{staticClass:"error"},[t._v("\n       "+t._s(t.$t("category.req",{type:t.$t("dataPage.smtpUser")}))+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[t._v("\n        "+t._s(t.$t("dataPage.smtpPass"))+"\n      ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.result.smtpPassword,expression:"result.smtpPassword"}],class:{invalid:!t.result.smtpPassword&&t.hasError},attrs:{type:"password",placeholder:t.$t("dataPage.smtpPass")},domProps:{value:t.result.smtpPassword},on:{input:function(e){e.target.composing||t.$set(t.result,"smtpPassword",e.target.value)}}}),t._v(" "),!t.result.smtpPassword&&t.hasError?r("span",{staticClass:"error"},[t._v("\n       "+t._s(t.$t("category.req",{type:t.$t("dataPage.smtpPass")}))+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-wrapper"},[r("label",[t._v("\n        "+t._s(t.$t("dataPage.smtpForm"))+"\n      ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.result.mailFrom,expression:"result.mailFrom"}],class:{invalid:!t.result.mailFrom&&t.hasError},attrs:{type:"text",placeholder:t.$t("dataPage.smtpForm")},domProps:{value:t.result.mailFrom},on:{input:function(e){e.target.composing||t.$set(t.result,"mailFrom",e.target.value)}}}),t._v(" "),!t.result.mailFrom&&t.hasError?r("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("category.req",{type:t.$t("dataPage.smtpForm")}))+"\n      ")]):t._e()])]),t._v(" "),r("div",{staticClass:"oflow-hidden"},[t.$can("setting","edit")?r("ajax-button",{staticClass:"primary-btn",attrs:{"fetching-data":t.updating}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Spinner:r(48).default,AjaxButton:r(148).default})}}]);