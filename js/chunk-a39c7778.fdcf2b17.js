(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a39c7778"],{"6e64":function(t,s,a){"use strict";a("82cc")},"82cc":function(t,s,a){},a4ed:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"pay"},[a("h1",{staticClass:"text-center mb-3 text-secondary font-weight-bold"},[t._v("結帳成功")]),a("p",{staticClass:"instruct"},[t._v("來店時需出示證件，確認身分後即可取餐")]),a("table",{staticClass:"table table-sm"},[t._m(0),a("tbody",[t._l(t.order.products,(function(s,e){return a("tr",{key:e},[a("td",{staticClass:"align-middle"},[a("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:s.product.imageUrl,alt:s.product.title}})]),a("td",{staticClass:"align-middle"},[t._v(t._s(s.product.title))]),a("td",{staticClass:"align-middle"},[t._v(t._s(s.qty)+" "+t._s(s.product.unit))]),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("corrency")(s.final_total)))])])})),t._m(1),a("tr",[a("td",{staticClass:"text-right h4",attrs:{colspan:"3"}},[t._v("總計")]),a("td",{staticClass:"text-right h4"},[a("strong",[t._v(t._s(t._f("corrency")(t.order.total+60)))])])])],2)]),a("hr"),a("div",{staticClass:"coustomer"},[a("h2",{staticClass:"text-left mt-5 font-weight-bold"},[t._v("買家資料")]),a("p",[a("span",[t._v("訂單編號:")]),a("span",[t._v(t._s(t.orderId))])]),a("p",[a("span",[t._v("姓名:")]),a("span",[t._v(t._s(t.order.user.name))])]),a("p",[a("span",[t._v("Email:")]),a("span",[t._v(t._s(t.order.user.email))])]),a("p",[a("span",[t._v("電話:")]),a("span",[t._v(t._s(t.order.user.tel))])]),a("p",[a("span",[t._v("地址:")]),a("span",[t._v(t._s(t.order.user.address))])]),a("p",[a("span",[t._v("時間:")]),a("span",[t._v(t._s(t._f("dateDue")(t.order.create_at)))])])]),a("div",{staticClass:"text-center h2 mt-3"},[a("router-link",{staticClass:"btn btn-outline-secondary",attrs:{to:"/ProductList/all"}},[t._v("返回產品列表頁")])],1)])])},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{staticClass:"col-2"}),a("th",{staticClass:"col-6"},[t._v("商品名稱")]),a("th",{staticClass:"col-2"},[t._v("數量")]),a("th",{staticClass:"col-2"},[t._v("小計")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("運費")]),a("td",{staticClass:"text-right"},[a("strong",[t._v("$60")])])])}],c={data:function(){return{orderId:"",order:{user:{}}}},methods:{getOrder:function(){var t=this;t.$emit("LoadingModel",!0);var s="".concat(Object({NODE_ENV:"production",VUE_APP_CLI_UI_URL:"",BASE_URL:"/Vuex_puffs/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",VUE_APP_CLI_UI_URL:"",BASE_URL:"/Vuex_puffs/"}).VUE_APP_CUSTOMPATH,"/pay/").concat(t.orderId);t.$http.post(s).then((function(s){console.log(s.data),s.data.success&&(t.$emit("getcart"),t.searchOrder())}))},searchOrder:function(){var t=this,s="".concat(Object({NODE_ENV:"production",VUE_APP_CLI_UI_URL:"",BASE_URL:"/Vuex_puffs/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",VUE_APP_CLI_UI_URL:"",BASE_URL:"/Vuex_puffs/"}).VUE_APP_CUSTOMPATH,"/order/").concat(t.orderId);t.$http.get(s).then((function(s){console.log(s.data),s.data.success&&(t.order=s.data.order,t.$emit("LoadingModel",!1))}))}},created:function(){this.orderId=this.$route.params.id,this.getOrder()}},n=c,i=(a("6e64"),a("2877")),o=Object(i["a"])(n,e,r,!1,null,"42b029a9",null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-a39c7778.fdcf2b17.js.map