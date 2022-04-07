(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c11d6"],{4554:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"row mt-4"},t._l(t.products,(function(a){return s("div",{key:a.id,staticClass:"col-md-4 mb-4"},[s("div",{staticClass:"card border-0 shadow-sm"},[s("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),s("div",{staticClass:"card-body"},[s("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(a.category))]),s("h5",{staticClass:"card-title"},[s("a",{staticClass:"text-dark h3",attrs:{href:"#"}},[t._v(t._s(a.title))])]),s("p",{staticClass:"card-text h5 mb-4"},[t._v(t._s(a.content))]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[s("del",{staticClass:"h6"},[t._v("原價 "+t._s(t._f("corrency")(a.origin_price))+" 元")])]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[s("div",{staticClass:"h4"},[t._v("現在只要 "+t._s(t._f("corrency")(a.price))+" 元")])])]),s("div",{staticClass:"card-footer d-flex"},[s("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(s){return t.productMore(a.id)}}},[t.status.loadingItem===a.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n            查看更多\n          ")]),s("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(s){return t.addCart(a.id)}}},[t.status.loadingCart===a.id?s("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n            加到購物車\n          ")])])])])})),0),s("div",{staticClass:"modal fade",attrs:{id:"singleMode",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.singleProduct.title))]),t._m(0)]),s("div",{staticClass:"modal-body"},[s("img",{staticClass:"img-fluid",attrs:{src:t.singleProduct.imageUrl,alt:""}}),s("blockquote",{staticClass:"blockquote"},[s("p",[t._v(t._s(t.singleProduct.content))]),s("footer",{staticClass:"blockquote-footer text-right"},[t._v(t._s(t.singleProduct.description))])]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[s("del",{staticClass:"h6"},[t._v("原價 "+t._s(t._f("corrency")(t.singleProduct.origin_price))+" 元")]),s("div",{staticClass:"h5"},[t._v("現在只要 "+t._s(t._f("corrency")(t.singleProduct.price))+" 元")])]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.singleProduct.qty,expression:"singleProduct.qty"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.singleProduct,"qty",a.target.multiple?s:s[0])}}},t._l(10,(function(a){return s("option",{key:a,domProps:{value:a}},[t._v("\n              選購 "+t._s(a)+" "+t._s(t.singleProduct.unit)+"\n            ")])})),0),s("div",{staticClass:"modal-footer"},[s("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v("\n              小計"),s("strong",[t._v(t._s(t._f("corrency")(t.singleProduct.qty*t.singleProduct.price)))])])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.addCart(t.singleProduct.id,t.singleProduct.qty)}}},[s("i",{staticClass:"fas fa-shopping-cart"}),t._v("加入購物車")])])])])]),s("div",{staticClass:"my-5 row justify-content-center"},[s("div",{staticClass:"col-md-6"},[s("table",{staticClass:"table"},[t._m(1),s("tbody",t._l(t.cart.carts,(function(a){return s("tr",{key:a.id},[s("td",{staticClass:"align-middle"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.removeCart(a.id)}}},[s("i",{staticClass:"far fa-trash-alt"})])]),s("td",{staticClass:"align-middle"},[t._v("\n                "+t._s(a.product.title)+"\n                "),t.cart.total!=t.cart.final_total?s("div",{staticClass:"text-success"},[t._v("已套用優惠券")]):t._e()]),s("td",{staticClass:"align-middle"},[t._v(t._s(a.qty)+"/"+t._s(a.product.unit))]),s("td",{staticClass:"align-middle text-center"},[t._v(t._s(t._f("corrency")(a.final_total)))])])})),0),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),s("td",{staticClass:"text-center"},[t._v(t._s(t._f("corrency")(t.cart.total)))])]),t.cart.total!=t.cart.final_total?s("tr",[s("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),s("td",{staticClass:"text-center text-success"},[t._v(t._s(t._f("corrency")(t.cart.final_total)))])]):t._e()])]),s("div",{staticClass:"input-group mb-3 input-group-sm"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.cartCode,expression:"cartCode"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.cartCode},on:{input:function(a){a.target.composing||(t.cartCode=a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.useCoupon}},[t._v("套用優惠碼")]),s("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:t.cancelCoupon}},[t._v("取消優惠碼")])])])])]),s("div",{staticClass:"my-5 row justify-content-center"},[s("validation-observer",{staticClass:"col-md-6",scopedSlots:t._u([{key:"default",fn:function(a){var e=a.invalid;return[s("form",{on:{submit:function(a){return a.preventDefault(),t.createOrder.apply(null,arguments)}}},[s("div",{staticClass:"my-3"},[s("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes;return[s("label",{attrs:{for:"email"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:o,attrs:{id:"email",type:"email",name:"信箱",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(a){a.target.composing||t.$set(t.form.user,"email",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"my-3"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes;return[s("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:o,attrs:{type:"text",name:"姓名",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(a){a.target.composing||t.$set(t.form.user,"name",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"my-3"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes;return[s("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:o,attrs:{type:"tel",name:"電話",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(a){a.target.composing||t.$set(t.form.user,"tel",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"my-3"},[s("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors,o=a.classes;return[s("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:o,attrs:{type:"text",name:"地址",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(a){a.target.composing||t.$set(t.form.user,"address",a.target.value)}}}),s("span",{staticClass:"invalid-feedback"},[t._v(t._s(e[0]))])]}}],null,!0)})],1),s("div",{staticClass:"my-3"},[s("label",{attrs:{for:"comment"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{disabled:e}},[t._v("送出訂單")])])])]}}])})],1)],1)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("th"),s("th",[t._v("品名")]),s("th",[t._v("數量")]),s("th",{staticClass:"text-center"},[t._v("單價")])])}],r=s("1157"),i=s.n(r),n={name:"customerOrder",data:function(){return{products:{},singleProduct:{},cart:{},isLoading:!1,cartCode:"",status:{loadingItem:"",loadingCart:""},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getProducts:function(){var t=this;t.isLoading=!0;var a="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/products/all");t.$http.get(a).then((function(a){t.products=a.data.products,t.isLoading=!1}))},productMore:function(t){var a=this,s="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/product/").concat(t);a.status.loadingItem=t,a.$http.get(s).then((function(t){i()("#singleMode").modal("show"),a.singleProduct=t.data.product,a.singleProduct.qty=1,a.status.loadingItem=""}))},addCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this;s.isLoading=!0,s.status.loadingCart=t;var e={product_id:t,qty:a},o="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/cart");s.$http.post(o,{data:e}).then((function(t){t.data.success&&(i()("#singleMode").modal("hide"),s.status.loadingCart="",s.getCart(),s.$bus.$emit("message:push",t.data.message,"success"))}))},getCart:function(){var t=this,a="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/cart");t.$http.get(a).then((function(a){a.data.success&&(t.cart=a.data.data,t.isLoading=!1)}))},removeCart:function(t){var a=this;a.isLoading=!0;var s="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/cart/").concat(t);a.$http.delete(s).then((function(t){a.getCart(),a.$bus.$emit("message:push",t.data.message,"success")}))},useCoupon:function(){var t=this;t.isLoading=!0;var a={code:t.cartCode},s="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/coupon");t.$http.post(s,{data:a}).then((function(a){a.data.success&&(t.cart.final_total=a.data.data.final_total,t.$bus.$emit("message:push",a.data.message,"success")),t.isLoading=!1}))},cancelCoupon:function(){var t=this;t.isLoading=!0;var a={code:"cancel"},s="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/coupon");t.$http.post(s,{data:a}).then((function(a){console.log(a.data),a.data.success&&(t.cart.final_total=a.data.data.final_total,t.$bus.$emit("message:push","已經取消優惠卷","success")),t.isLoading=!1}))},createOrder:function(){var t=this,a="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/order");t.isLoading=!0,t.$http.post(a,{data:t.form}).then((function(a){console.log(a.data),a.data.success&&(console.log(a.data.orderId),t.$router.push("/adminCheckout/".concat(a.data.orderId)))}))}},created:function(){this.getProducts(),this.getCart()}},c=n,l=s("2877"),d=Object(l["a"])(c,e,o,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0c11d6.77b8bbfd.js.map