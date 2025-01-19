(window.webpackJsonp=window.webpackJsonp||[]).push([[93,50],{462:function(t,r,e){"use strict";e(18),e(19),e(22),e(26),e(27);var o=e(9),n=(e(6),e(17),e(202),e(23),e(54),e(7));function c(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}r.a={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({},Object(n.c)("common",["customScripts"])),mounted:function(){var t=this;this.customScripts.forEach((function(i){var r=new RegExp(null==i?void 0:i.route_pattern),e=t.$route.path;if(r.test(e)){if(null!=i&&i.header_script){var script=document.createElement("script");script.textContent=null==i?void 0:i.header_script_code,document.head.appendChild(script)}if(null!=i&&i.body_script){var o=document.createElement("script");o.textContent=null==i?void 0:i.body_script_code,document.body.appendChild(o)}}}))}}},479:function(t,r,e){"use strict";e.r(r);e(124);var o={name:"PasswordField",data:function(){return{password:"",passwordFieldType:"password"}},props:{isInvalid:{type:Boolean,default:!1},value:{type:String}},mixins:[],components:{},computed:{isPasswordTypePassword:function(){return"password"===this.passwordFieldType}},methods:{passwordFieldToggle:function(){this.isPasswordTypePassword?this.passwordFieldType="text":this.passwordFieldType="password"}},mounted:function(){this.password=this.value}},n=e(11),component=Object(n.a)(o,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"icon-input right-icon"},[r("i",{staticClass:"icon lock-icon"}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],class:{invalid:!t.password||t.isInvalid},attrs:{type:t.passwordFieldType,placeholder:t.$t("contact.your",{type:t.$t("login.password")})},domProps:{value:t.password},on:{change:function(r){return t.$emit("change",t.password)},input:function(r){r.target.composing||(t.password=r.target.value.trim())},blur:function(r){return t.$forceUpdate()}}}),t._v(" "),r("i",{staticClass:"icon",class:t.isPasswordTypePassword?"eye-close-icon":"eye-icon",on:{click:t.passwordFieldToggle}})])}),[],!1,null,null,null);r.default=component.exports},560:function(t,r,e){"use strict";e.r(r);e(35),e(18),e(19),e(22),e(6),e(26),e(17),e(27);var o=e(0),n=e(9),c=(e(12),e(205)),l=e(291),d=e(479),m=e(7),v=e(462);function f(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}var w={middleware:["common-middleware","non-logged-in"],layout:"empty",data:function(){return{name:"",code:"",email:"",password:"",confirmPassword:"",formSubmitting:!1,hasFormError:!1,emailVerificationForm:!1,verified:!1,errors:[]}},components:{AjaxButton:l.default,PasswordField:d.default},mixins:[c.a,v.a],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(r){Object(n.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({invalidEmail:function(){return!this.isValidEmail(this.email)},emailValid:function(){return this.email&&!this.invalidEmail},invalidPassword:function(){return!this.isValidLength(this.password)},passwordValid:function(){return this.password&&!this.invalidPassword}},Object(m.c)("language",["langCode"])),methods:{verifyEmail:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var e,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.code){r.next=17;break}return t.formSubmitting=!0,r.prev=2,r.next=5,t.$store.dispatch("user/verify",{params:{code:t.code,email:t.email},lang:t.langCode});case 5:e=r.sent,data=e.data,200===e.status?(t.verified=!0,t.hasFormError=!1,t.errors=[]):t.errors=data.form,r.next=14;break;case 11:return r.prev=11,r.t0=r.catch(2),r.abrupt("return",t.$nuxt.error(r.t0));case 14:t.formSubmitting=!1,r.next=18;break;case 17:t.hasFormError=!0;case 18:case"end":return r.stop()}}),r,null,[[2,11]])})))()},formSubmit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var e,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(t.name&&t.email&&t.password&&t.password===t.confirmPassword)){r.next=17;break}return t.formSubmitting=!0,r.prev=2,r.next=5,t.$store.dispatch("user/registration",{params:{name:t.name,email:t.email,password:t.password},lang:t.langCode});case 5:e=r.sent,data=e.data,200===e.status?(t.hasFormError=!1,t.errors=[],t.emailVerificationForm=!0):t.errors=data.form,r.next=14;break;case 11:return r.prev=11,r.t0=r.catch(2),r.abrupt("return",t.$nuxt.error(r.t0));case 14:t.formSubmitting=!1,r.next=18;break;case 17:t.hasFormError=!0;case 18:case"end":return r.stop()}}),r,null,[[2,11]])})))()}},mounted:function(){}},_=w,h=e(11),component=Object(h.a)(_,(function(){var t=this,r=t._self._c;return r("div",[t.errors.length?r("ul",{staticClass:"error-list mb-15"},[r("li",{staticClass:"mb-10"},[t._v("\n      "+t._s(t.$t("forgotPassword.errorOccurred"))+"\n    ")]),t._v(" "),t._l(t.errors,(function(e,o){return r("li",{key:o},[t._v("\n      "+t._s(e)+"\n    ")])}))],2):t._e(),t._v(" "),t.emailVerificationForm||t.verified?t.emailVerificationForm&&!t.verified?r("form",{on:{submit:function(r){return r.preventDefault(),t.verifyEmail.apply(null,arguments)}}},[r("p",{staticClass:"mb-15"},[t._v("\n      "+t._s(t.$t("register.sentEmail"))+"\n    ")]),t._v(" "),r("div",{staticClass:"input-wrap",class:{invalid:!t.code&&t.hasFormError}},[r("label",[t._v("\n        "+t._s(t.$t("forgotPassword.code"))+"\n      ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",placeholder:t.$t("forgotPassword.codeFrom")},domProps:{value:t.code},on:{input:function(r){r.target.composing||(t.code=r.target.value)}}}),t._v(" "),!t.code&&t.hasFormError?r("span",{staticClass:"error"},[t._v("\n         "+t._s(t.$t("addressPopup.isRequired",{type:t.$t("forgotPassword.code")}))+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"flex right no-space"},[r("ajax-button",{staticClass:"primary-btn plr-20 w-50",attrs:{"fetching-data":t.formSubmitting,"loading-text":t.$t("checkoutRight.submitting")}},[t._v("\n        "+t._s(t.$t("ajaxButton.submit"))+"\n      ")])],1)]):t.emailVerificationForm&&t.verified?r("div",[r("h4",{staticClass:"mb-15 bold"},[t._v("\n      "+t._s(t.$t("contact.success"))+"!!!\n    ")]),t._v(" "),r("p",{staticClass:"mb-15"},[r("b",[t._v(t._s(t.$t("forgotPassword.congratulations")))]),t._v(".\n      "+t._s(t.$t("forgotPassword.verified"))+"\n    ")]),t._v(" "),r("p",{staticClass:"mb-15"},[t._v("\n      "+t._s(t.$t("forgotPassword.youCan"))+"\n      "),r("nuxt-link",{staticClass:"mlr-10 link bold color-primary",attrs:{to:"/login"}},[t._v("\n        "+t._s(t.$t("forgotPassword.signIn"))+"\n      ")]),t._v("\n      "+t._s(t.$t("contact.now"))+".\n    ")],1)]):t._e():r("form",{on:{submit:function(r){return r.preventDefault(),t.formSubmit.apply(null,arguments)}}},[r("div",{staticClass:"input-wrap",class:{invalid:!t.name&&t.hasFormError}},[r("label",[t._v(t._s(t.$t("addressPopup.name")))]),t._v(" "),r("div",{staticClass:"icon-input"},[r("i",{staticClass:"icon user-icon"}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:t.$t("contact.your",{type:t.$t("contact.name")})},domProps:{value:t.name},on:{input:function(r){r.target.composing||(t.name=r.target.value)}}})]),t._v(" "),!t.name&&t.hasFormError?r("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("addressPopup.isRequired",{type:t.$t("addressPopup.name")}))+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-wrap",class:{invalid:!t.emailValid&&t.hasFormError}},[r("label",[t._v(t._s(t.$t("addressPopup.email")))]),t._v(" "),r("div",{staticClass:"icon-input"},[r("i",{staticClass:"icon email-icon"}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:t.$t("contact.your",{type:t.$t("contact.email")})},domProps:{value:t.email},on:{input:function(r){r.target.composing||(t.email=r.target.value)}}})]),t._v(" "),!t.email&&t.hasFormError?r("span",{staticClass:"error"},[t._v("\n         "+t._s(t.$t("addressPopup.isRequired",{type:t.$t("addressPopup.email")}))+"\n      ")]):t.invalidEmail&&t.hasFormError?r("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("contact.invalidEmail"))+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"input-wrap",class:{invalid:!t.passwordValid&&t.hasFormError}},[r("label",[t._v(t._s(t.$t("profile.password")))]),t._v(" "),r("password-field",{attrs:{value:t.password},on:{change:function(r){t.password=r}}}),t._v(" "),!t.password&&t.hasFormError?r("span",{staticClass:"error"},[t._v("\n         "+t._s(t.$t("addressPopup.isRequired",{type:t.$t("profile.password")}))+"\n      ")]):t.invalidPassword&&t.hasFormError?r("span",{staticClass:"error"},[t._v("\n         "+t._s(t.$t("profile.invalidLength"))+"\n      ")]):t._e()],1),t._v(" "),r("div",{staticClass:"input-wrap",class:{invalid:(!t.passwordValid||t.confirmPassword!==t.password)&&t.hasFormError}},[r("label",[t._v("\n        "+t._s(t.$t("profile.confirmPassword"))+"\n      ")]),t._v(" "),r("password-field",{attrs:{value:t.confirmPassword},on:{change:function(r){t.confirmPassword=r}}}),t._v(" "),!t.confirmPassword&&t.hasFormError?r("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("addressPopup.isRequired",{type:t.$t("profile.password")}))+"\n      ")]):t.confirmPassword!==t.password&&t.hasFormError?r("span",{staticClass:"error"},[t._v("\n        "+t._s(t.$t("profile.noMatch"))+"\n      ")]):t._e()],1),t._v(" "),r("div",{staticClass:"flex right no-space"},[r("ajax-button",{staticClass:"primary-btn plr-20 w-50",attrs:{"fetching-data":t.formSubmitting,"loading-text":t.$t("forgotPassword.registering")}},[t._v("\n        "+t._s(t.$t("ajaxButton.submit"))+"\n      ")])],1),t._v(" "),r("div",{staticClass:"mt-20 mt-sm-15 mb-10"},[t._v("\n      "+t._s(t.$t("register.haveAccount"))+"\n      "),r("nuxt-link",{staticClass:"mlr-10 link bold color-primary",attrs:{to:"/login"}},[t._v("\n        "+t._s(t.$t("forgotPassword.signIn"))+"\n      ")])],1)])])}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{PasswordField:e(479).default,AjaxButton:e(291).default})}}]);