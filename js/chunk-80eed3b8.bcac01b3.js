(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80eed3b8"],{"0ac1":function(e,t,c){"use strict";c.r(t);c("b0c0");var o=c("7a23"),n={class:"container mt-5 p-0"},r=Object(o["createElementVNode"])("h2",{class:"text-center mb-5 fw-bold"},"購物車",-1),s={class:"check-step row g-0 align-items-center text-center"},a=Object(o["createElementVNode"])("div",{class:"col"},[Object(o["createElementVNode"])("span",{class:"fs-7"},"1"),Object(o["createElementVNode"])("p",{class:"m-3 text-soft"},"確認訂單"),Object(o["createElementVNode"])("div",{class:"step-bar-none"})],-1),l={class:"col"},d=Object(o["createElementVNode"])("span",{class:"fs-7"},"2",-1),i=Object(o["createElementVNode"])("p",{class:"m-3 text-soft"},"建立訂單",-1),b={key:0,class:"step-bar"},m={key:1,class:"step-bar-none"},u={class:"col"},j=Object(o["createElementVNode"])("span",{class:"fs-7"},"3",-1),p=Object(o["createElementVNode"])("p",{class:"m-3 text-soft"},"完成訂單",-1),O={key:0,class:"step-bar-none"},f={key:1,class:"step-bar"},E={key:0,class:"container text-center mt-5 mb-5"},N={class:"card text-center"},V=Object(o["createElementVNode"])("div",{class:"card-header bg-soft text-white"}," 完成訂單，感謝您的購買與支持 ",-1),y={class:"card-body"},g={class:"row d-flex justify-content-start align-items-start text-start px-0 px-md-10 m-0"},v=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"購買日期",-1),k={class:"col-sm-9"},h=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"訂單編號",-1),x={class:"col-sm-9"},B={class:"m-0",id:"coupon_save"},S=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"Email",-1),C={class:"col-sm-9"},D=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"收件人姓名",-1),w={class:"col-sm-9"},_=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"收件人電話",-1),$={class:"col-sm-9"},T=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"收件人地址",-1),I={class:"col-sm-9"},L=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"購買項目",-1),q={class:"col-sm-9"},F=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"總金額",-1),J={class:"col-sm-9"},A=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"付款狀態",-1),M={class:"col-sm-9"},X={key:0,class:"text-danger"},z={key:1,class:"text-success"},G={class:"d-flex align-items-end justify-content-between mt-5"},H=Object(o["createTextVNode"])("回首頁"),K=Object(o["createTextVNode"])("繼續購物"),P={key:1,class:"container text-center mt-5 mb-5"},Q={class:"card text-center"},R={class:"card-header bg-soft text-white"},U={class:"card-body"},W={class:"row d-flex justify-content-start align-items-start text-start px-0 px-md-10 m-0"},Y=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"購買日期",-1),Z={class:"col-sm-9"},ee=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"訂單編號",-1),te={class:"col-sm-9"},ce={class:"m-0",id:"coupon_save"},oe=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"Email",-1),ne={class:"col-sm-9"},re=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"收件人姓名",-1),se={class:"col-sm-9"},ae=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"收件人電話",-1),le={class:"col-sm-9"},de=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"收件人地址",-1),ie={class:"col-sm-9"},be=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"購買項目",-1),me={class:"col-sm-9"},ue=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"總金額",-1),je={class:"col-sm-9"},pe=Object(o["createElementVNode"])("dt",{class:"col-sm-3"},"付款狀態",-1),Oe={class:"col-sm-9"},fe={key:0,class:"text-danger"},Ee={key:1,class:"text-success"},Ne={class:"d-flex align-items-end justify-content-between mt-5"},Ve=Object(o["createTextVNode"])("繼續購物"),ye={key:0};function ge(e,t,c,ge,ve,ke){var he=Object(o["resolveComponent"])("Loading"),xe=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(he,{active:ve.isLoading},null,8,["active"]),Object(o["createElementVNode"])("div",n,[r,Object(o["createElementVNode"])("div",s,[a,Object(o["createElementVNode"])("div",l,[d,i,ve.order.is_paid?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",m)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",b))]),Object(o["createElementVNode"])("div",u,[j,p,ve.order.is_paid?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",f)):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",O))])])]),ve.order.is_paid?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",E,[Object(o["createElementVNode"])("div",N,[V,Object(o["createElementVNode"])("div",y,[Object(o["createElementVNode"])("dl",g,[v,Object(o["createElementVNode"])("dd",k,Object(o["toDisplayString"])(e.$filters.date(ve.order.create_at)),1),h,Object(o["createElementVNode"])("dd",x,[Object(o["createElementVNode"])("p",B,Object(o["toDisplayString"])(ve.order.id),1),Object(o["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(){return ke.copyCouponCode&&ke.copyCouponCode.apply(ke,arguments)}),class:"btn btn-outline-soft ms-3 btn-sm",id:"coupon_btn"},"複製訂單編號")]),S,Object(o["createElementVNode"])("dd",C,Object(o["toDisplayString"])(ve.order.user.email),1),D,Object(o["createElementVNode"])("dd",w,Object(o["toDisplayString"])(ve.order.user.name),1),_,Object(o["createElementVNode"])("dd",$,Object(o["toDisplayString"])(ve.order.user.tel),1),T,Object(o["createElementVNode"])("dd",I,Object(o["toDisplayString"])(ve.order.user.address),1),L,Object(o["createElementVNode"])("dd",q,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(ve.order.products,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:t.id},[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(t.product.title),1),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(t.qty)+Object(o["toDisplayString"])(t.product.unit),1),Object(o["createElementVNode"])("span",null," NT$ "+Object(o["toDisplayString"])(e.$filters.currency(t.final_total)),1)])})),128))]),F,Object(o["createElementVNode"])("dd",J,"NT$ "+Object(o["toDisplayString"])(e.$filters.currency(ve.order.total)),1),A,Object(o["createElementVNode"])("dd",M,[ve.order.is_paid?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",z,"付款完成")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",X,"尚未付款"))])]),Object(o["createElementVNode"])("div",G,[Object(o["createVNode"])(xe,{class:"btn btn-outline-soft",to:"/products"},{default:Object(o["withCtx"])((function(){return[H]})),_:1}),Object(o["createVNode"])(xe,{class:"btn btn-soft",to:"/products"},{default:Object(o["withCtx"])((function(){return[K]})),_:1})])])])])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",P,[Object(o["createElementVNode"])("div",Q,[Object(o["createElementVNode"])("div",R," 已建立訂單："+Object(o["toDisplayString"])(ve.order.id),1),Object(o["createElementVNode"])("div",U,[Object(o["createElementVNode"])("dl",W,[Y,Object(o["createElementVNode"])("dd",Z,Object(o["toDisplayString"])(e.$filters.date(ve.order.create_at)),1),ee,Object(o["createElementVNode"])("dd",te,[Object(o["createElementVNode"])("p",ce,Object(o["toDisplayString"])(ve.order.id),1),Object(o["createElementVNode"])("button",{onClick:t[1]||(t[1]=function(){return ke.copyCouponCode&&ke.copyCouponCode.apply(ke,arguments)}),class:"btn btn-outline-soft ms-3 btn-sm",id:"coupon_btn"},"複製訂單編號")]),oe,Object(o["createElementVNode"])("dd",ne,Object(o["toDisplayString"])(ve.order.user.email),1),re,Object(o["createElementVNode"])("dd",se,Object(o["toDisplayString"])(ve.order.user.name),1),ae,Object(o["createElementVNode"])("dd",le,Object(o["toDisplayString"])(ve.order.user.tel),1),de,Object(o["createElementVNode"])("dd",ie,Object(o["toDisplayString"])(ve.order.user.address),1),be,Object(o["createElementVNode"])("dd",me,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(ve.order.products,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:t.id},[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(t.product.title),1),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(t.qty)+Object(o["toDisplayString"])(t.product.unit),1),Object(o["createElementVNode"])("span",null," NT$ "+Object(o["toDisplayString"])(e.$filters.currency(t.final_total)),1)])})),128))]),ue,Object(o["createElementVNode"])("dd",je,"NT$ "+Object(o["toDisplayString"])(e.$filters.currency(ve.order.total)),1),pe,Object(o["createElementVNode"])("dd",Oe,[ve.order.is_paid?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",Ee,"付款完成")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",fe,"尚未付款"))])]),Object(o["createElementVNode"])("div",Ne,[Object(o["createVNode"])(xe,{class:"btn btn-outline-soft",to:"/products"},{default:Object(o["withCtx"])((function(){return[Ve]})),_:1}),!1===ve.order.is_paid?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",ye,[Object(o["createElementVNode"])("button",{class:"btn btn-soft",onClick:t[2]||(t[2]=function(){return ke.payOrder&&ke.payOrder.apply(ke,arguments)})},"確認付款去")])):Object(o["createCommentVNode"])("",!0)])])])]))],64)}c("99af");var ve=c("cfb9"),ke={data:function(){return{order:{user:{}},orderId:"",isLoading:!1}},methods:{getCarts:function(){var e=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/cart")).then((function(t){e.isLoading=!1,console.log("購物車：",t),e.cartData=t.data.data}))},getOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/order/").concat(this.orderId);this.$http.get(t).then((function(t){t.data.success&&(e.order=t.data.order,console.log(e.order))}))},payOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/pay/").concat(this.orderId);this.$http.post(t).then((function(t){console.log(t),t.data.success&&(e.order.is_paid=!0,console.log(e.order.is_paid),e.getOrder(),e.getCarts(),ve["a"].emit("update-cart"))}))},copyCouponCode:function(){var e=function(e){return document.querySelector(e)};e("#coupon_btn").addEventListener("click",(function(){navigator.clipboard.writeText(e("#coupon_save").textContent),console.log("複製成功")}))}},mounted:function(){this.copyCouponCode(),ve["a"].emit("queryOrder",this.orderId),this.orderId=this.$route.params.orderId,console.log(this.orderId),this.getOrder()},updated:function(){this.copyCouponCode()}},he=(c("1825"),c("6b0d")),xe=c.n(he);const Be=xe()(ke,[["render",ge]]);t["default"]=Be},1825:function(e,t,c){"use strict";c("80d5")},"1dde":function(e,t,c){var o=c("d039"),n=c("b622"),r=c("2d00"),s=n("species");e.exports=function(e){return r>=51||!o((function(){var t=[],c=t.constructor={};return c[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"80d5":function(e,t,c){},8418:function(e,t,c){"use strict";var o=c("a04b"),n=c("9bf2"),r=c("5c6c");e.exports=function(e,t,c){var s=o(t);s in e?n.f(e,s,r(0,c)):e[s]=c}},"99af":function(e,t,c){"use strict";var o=c("23e7"),n=c("da84"),r=c("d039"),s=c("e8b5"),a=c("861d"),l=c("7b0b"),d=c("07fa"),i=c("8418"),b=c("65f0"),m=c("1dde"),u=c("b622"),j=c("2d00"),p=u("isConcatSpreadable"),O=9007199254740991,f="Maximum allowed index exceeded",E=n.TypeError,N=j>=51||!r((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),V=m("concat"),y=function(e){if(!a(e))return!1;var t=e[p];return void 0!==t?!!t:s(e)},g=!N||!V;o({target:"Array",proto:!0,forced:g},{concat:function(e){var t,c,o,n,r,s=l(this),a=b(s,0),m=0;for(t=-1,o=arguments.length;t<o;t++)if(r=-1===t?s:arguments[t],y(r)){if(n=d(r),m+n>O)throw E(f);for(c=0;c<n;c++,m++)c in r&&i(a,m,r[c])}else{if(m>=O)throw E(f);i(a,m++,r)}return a.length=m,a}})},b0c0:function(e,t,c){var o=c("83ab"),n=c("5e77").EXISTS,r=c("e330"),s=c("9bf2").f,a=Function.prototype,l=r(a.toString),d=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,i=r(d.exec),b="name";o&&!n&&s(a,b,{configurable:!0,get:function(){try{return i(d,l(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-80eed3b8.bcac01b3.js.map