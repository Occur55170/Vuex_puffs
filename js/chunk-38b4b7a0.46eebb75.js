(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38b4b7a0"],{"18fc":function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"search py-5 "},[e("div",{staticClass:"jumbotron jumbotron-fluid jumbotron-bg d-flex align-items-end productListBN"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"display-3 font-weight-bold text-white text-center"},[t._v(t._s(t.msg))])])]),e("div",{staticClass:"searchList pb-2 text-center container"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.orderId,expression:"orderId"}],attrs:{type:"text",placeholder:"請輸入訂單編號"},domProps:{value:t.orderId},on:{input:function(s){s.target.composing||(t.orderId=s.target.value)}}}),e("a",{attrs:{href:""},on:{click:function(s){return s.preventDefault(),t.searchOrder()}}},[t._v("查詢")])]),e("div",{staticClass:"orderData"},[e("h2",{staticClass:"font-weight-bold"},[t._v("訂單資訊")]),e("div",{staticClass:"con"},[e("p",[e("span",{staticClass:"font-weight-bold"},[t._v("編號:")]),t._v(" "+t._s(t.order.id))]),e("p",[e("span",{staticClass:"font-weight-bold"},[t._v("訂單時間:")]),t._v(" "+t._s(t._f("dateDue")(t.order.paid_date)))]),e("p",[e("span",{staticClass:"font-weight-bold"},[t._v("訂單金額:")]),t._v(" "+t._s(t._f("corrency")(t.order.total)))]),e("p",[e("span",{staticClass:"font-weight-bold"},[t._v("付款狀態: ")]),t.order.is_paid?e("span",[t._v("已付款")]):t._e(),t.order.is_paid?t._e():e("span",[t._v("尚未付款")])]),e("hr"),e("p",[e("span",{staticClass:"font-weight-bold"},[t._v("訂購姓名:")]),t._v(" "+t._s(t.order.user.name))]),e("p",[e("span",{staticClass:"font-weight-bold"},[t._v("訂購電話:")]),t._v(" "+t._s(t.order.user.tel))]),e("p",[e("span",{staticClass:"font-weight-bold"},[t._v("訂購地址:")]),t._v(" "+t._s(t.order.user.address))]),e("p",[e("span",{staticClass:"font-weight-bold"},[t._v("訂購信箱:")]),t._v(" "+t._s(t.order.user.email))])]),e("h2",{staticClass:"font-weight-bold"},[t._v("訂購產品")]),e("div",{staticClass:"con"},[e("table",[t._m(0),e("tbody",t._l(t.order.products,(function(s){return e("tr",{key:s.id},[e("td",{staticClass:"title"},[t._v(t._s(s.product.title))]),e("td",{staticClass:"price"},[t._v(t._s(t._f("corrency")(s.product.price)))]),e("td",{staticClass:"qty"},[t._v(t._s(s.qty)+" "+t._s(s.product.unit))]),e("td",{staticClass:"total"},[t._v(t._s(t._f("corrency")(s.final_total)))]),e("div",[t._v("\r\n                  "+t._s(s.product.coupon)+"\r\n              ")])])})),0)])])]),t.order.user.name?t._e():e("div",{staticClass:"my-5 py-5"})])])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("td",[t._v("產品名稱")]),e("td",[t._v("單價")]),e("td",[t._v("數量")]),e("td",[t._v("小計")])])])}],o=e("1157"),d=e.n(o),i={data:function(){return{msg:"查詢訂單狀態",orderId:"",order:{user:{}}}},methods:{searchOrder:function(){var t=this,s="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/order/").concat(this.orderId);t.$http.get(s).then((function(s){s.data.success&&(t.order=s.data.order,d()(".orderData").show())}))}},created:function(){this.$emit("closeNavList")}},n=i,c=(e("dcbc4"),e("2877")),_=Object(c["a"])(n,r,a,!1,null,"4ba0dd08",null);s["default"]=_.exports},dcbc4:function(t,s,e){"use strict";e("e40f")},e40f:function(t,s,e){}}]);
//# sourceMappingURL=chunk-38b4b7a0.46eebb75.js.map