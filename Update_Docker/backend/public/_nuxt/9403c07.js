(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{724:function(t,e,n){"use strict";n.r(e);var o=n(80),r={name:"IyzicoPayment",components:{},data:function(){return{showForm:!1}},props:{paymentData:{type:Object,required:!0}},mixins:[o.a],methods:{cbChanged:function(t){this.showForm=t.target.checked,this.emitData()},emitData:function(){this.$emit("change",this.paymentData)}}},m=n(16),component=Object(m.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"input-wrapper dply-felx start"},[n("label",{staticClass:"mb-0",attrs:{for:"iyzico-payment"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentData.iyzico_payment,expression:"paymentData.iyzico_payment"}],attrs:{type:"checkbox",id:"iyzico-payment"},domProps:{checked:Array.isArray(t.paymentData.iyzico_payment)?t._i(t.paymentData.iyzico_payment,null)>-1:t.paymentData.iyzico_payment},on:{change:[function(e){var n=t.paymentData.iyzico_payment,o=e.target,r=!!o.checked;if(Array.isArray(n)){var m=t._i(n,null);o.checked?m<0&&t.$set(t.paymentData,"iyzico_payment",n.concat([null])):m>-1&&t.$set(t.paymentData,"iyzico_payment",n.slice(0,m).concat(n.slice(m+1)))}else t.$set(t.paymentData,"iyzico_payment",r)},t.cbChanged]}}),t._v("\n      "+t._s(t.$t("dataPage.ip"))+"\n    ")]),t._v(" "),n("button",{staticClass:"toggle-arrow",attrs:{type:"button"},on:{click:function(e){t.showForm=!t.showForm}}},[n("i",{staticClass:"icon black arrow-down"})])]),t._v(" "),t.showForm?n("div",{staticClass:"payment-form-wrap"},[n("div",{staticClass:"input-wrapper"},[n("label",[t._v("\n        "+t._s(t.$t("dataPage.iak"))+"\n      ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentData.ip_api_key,expression:"paymentData.ip_api_key"}],attrs:{type:"text",placeholder:t.$t("dataPage.iak")},domProps:{value:t.paymentData.ip_api_key},on:{input:[function(e){e.target.composing||t.$set(t.paymentData,"ip_api_key",e.target.value)},t.emitData]}})]),t._v(" "),n("div",{staticClass:"input-wrapper"},[n("label",[t._v("\n        "+t._s(t.$t("dataPage.isk"))+"\n      ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentData.ip_secret_key,expression:"paymentData.ip_secret_key"}],attrs:{type:"text",placeholder:t.$t("dataPage.isk")},domProps:{value:t.paymentData.ip_secret_key},on:{input:[function(e){e.target.composing||t.$set(t.paymentData,"ip_secret_key",e.target.value)},t.emitData]}})]),t._v(" "),n("div",{staticClass:"input-wrapper"},[n("label",[t._v("\n        "+t._s(t.$t("dataPage.ibu"))+"\n      ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentData.ip_base_url,expression:"paymentData.ip_base_url"}],attrs:{type:"text",placeholder:t.$t("dataPage.ibu")},domProps:{value:t.paymentData.ip_base_url},on:{input:[function(e){e.target.composing||t.$set(t.paymentData,"ip_base_url",e.target.value)},t.emitData]}})])]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);