(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{472:function(t,e,r){"use strict";r(201),r(23),r(82);e.a={data:function(){return{orderByType:"",orderBy:"",page:0,search:null}},methods:{settingParam:function(data){this.orderByType=(null==data?void 0:data.orderByType)||"desc",this.orderBy=(null==data?void 0:data.orderBy)||"created_at",this.page=Number(null==data?void 0:data.page)||1,this.search=(null==data?void 0:data.q)||null},settingRouteParam:function(){this.orderByType=this.$route.query.orderByType||"desc",this.orderBy=this.$route.query.orderBy||"created_at",this.page=Number(this.$route.query.page)||1,this.search=this.$route.query.q||null}}}},538:function(t,e,r){"use strict";r.r(e);r(18),r(19),r(22),r(6),r(26),r(17),r(27);var o=r(0),n=r(9),c=(r(12),r(24)),l=r(472),d=r(158);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"SortBy",data:function(){return{filterPopup:!0,sortingOptions:{featured:{title:this.$t("featured.featured")},price_low_to_high:{title:this.$t("listingLayout.priceLowToHigh")},price_high_to_low:{title:this.$t("listingLayout.priceHighToLow")},avg_customer_review:{title:this.$t("listingLayout.avgCustomerReview")}},sortby:this.$route.query.sortby||""}},mixins:[c.a,l.a],watch:{},props:{},components:{Dropdown:d.default},computed:{filteredCount:function(){var t=0;return this.shippingFromRoute&&t++,this.ratingFromRoute&&t++,this.minPriceFromRoute&&t++,this.maxPriceFromRoute&&t++,t},isXsDevice:function(){return window.innerWidth<=576}},methods:{openFilter:function(){this.filterPopup=!0,document.body.classList.add("no-scroll")},closeFilter:function(){this.filterPopup=!1,document.body.classList.remove("no-scroll")},selectedSorting:function(data){if(this.sortby){var t=Object.assign({},this.$route.query);t=y(y({},t),{sortby:data.key}),this.$emit("fetching-data",t)}this.sortby=data.key},clearSortby:function(){this.sortby="featured"}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isXsDevice&&(t.filterPopup=!1);case 1:case"end":return e.stop()}}),e)})))()}},m=r(11),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex gap-10"},[e("span",{staticClass:"hide-sm"},[t._v("\n    "+t._s(t.$t("listingLayout.sortBy"))+"\n  ")]),t._v(" "),e("client-only",[e("dropdown",{staticClass:"sort-dropdown",attrs:{options:t.sortingOptions,"selected-key":t.sortby},on:{clicked:t.selectedSorting}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Dropdown:r(158).default})}}]);