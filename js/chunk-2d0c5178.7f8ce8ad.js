(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5178"],{"3e2b":function(e,t,c){"use strict";c.r(t);c("a4d3"),c("e01a"),c("caad"),c("2532");var o=c("7a23"),n={class:"container"},a={class:"row"},r={class:"col-3 mt-4"},i={class:"form-floating"},s=Object(o["createElementVNode"])("label",{class:"text-secondary",for:"search"},"查詢商品",-1),l={class:"list-group rounded-0"},d=["onClick"],u={class:"col-9"},b={class:"row mt-4"},g={class:"col mb-4"},p={class:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"},m={class:"card h-100 rounded-0"},h=["onClick"],j={class:"card-body"},O={class:"badge bg-secondary text-light mb-2"},y={class:"card-title"},v={class:"h6 text-secondary"},k={key:0,class:"h5 list-inline-item"},f={key:1,class:"h6 list-inline-item text-secondary mt-4"},N={key:2,class:"h5 text-danger mb-3"},E={class:"d-grid gap-2 col-12 mx-auto"},V=["disabled","onClick"],C={key:0,class:"spinner-border text-danger spinner-border-sm",role:"status"},B=Object(o["createElementVNode"])("span",{class:"visually-hidden"},"Loading...",-1),S=[B],x=Object(o["createTextVNode"])(" 加到購物車 "),F=["onClick"],w=["onClick"],P={class:"card h-100 rounded-0"},_=["onClick"],$={class:"card-body"},D={class:"badge bg-secondary text-light mb-2"},L={class:"card-title"},I={class:"h6 text-secondary"},M={key:0,class:"h5 list-inline-item"},z={key:1,class:"h6 list-inline-item text-secondary mt-4"},T={key:2,class:"h5 text-danger mb-3"},U={class:"d-grid gap-2 col-12 mx-auto"},J=["disabled","onClick"],q={key:0,class:"spinner-border text-danger spinner-border-sm",role:"status"},A=Object(o["createElementVNode"])("span",{class:"visually-hidden"},"Loading...",-1),G=[A],H=Object(o["createTextVNode"])(" 加到購物車 "),K=["onClick"],Q=["onClick"];function R(e,t,c,B,A,R){var W=this,X=Object(o["resolveComponent"])("Loading"),Y=Object(o["resolveComponent"])("Pagination");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(X,{active:A.isLoading},null,8,["active"]),Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",i,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control mb-3",id:"search",placeholder:"Search","onUpdate:modelValue":t[0]||(t[0]=function(e){return A.cacheSearch=e})},null,512),[[o["vModelText"],A.cacheSearch,void 0,{lazy:!0}]]),s]),Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("a",{href:"#",class:"list-group-item list-group-item-action",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(e){A.selectCategory="",W.$route.params.selectCategory=""}),["prevent"]))},"全部 "),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(A.categories,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{href:"#",key:e,class:"list-group-item list-group-item-action",onClick:Object(o["withModifiers"])((function(t){return A.selectCategory=e}),["prevent"])},Object(o["toDisplayString"])(e),9,d)})),128))])]),Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("div",g,[Object(o["createElementVNode"])("div",p,[A.cacheSearch?(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],{key:0},Object(o["renderList"])(R.filterSearch,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"col",key:t.id},[Object(o["createElementVNode"])("div",m,[Object(o["createElementVNode"])("a",{href:"#",class:"rounded-0",onClick:Object(o["withModifiers"])((function(e){return R.getProduct(t.id)}),["prevent"])},[Object(o["createElementVNode"])("div",{style:Object(o["normalizeStyle"])([{height:"300px","background-size":"cover","background-position":"center"},{backgroundImage:"url(".concat(t.imageUrl,")")}])},null,4)],8,h),Object(o["createElementVNode"])("div",j,[Object(o["createElementVNode"])("span",O,Object(o["toDisplayString"])(t.category),1),Object(o["createElementVNode"])("h5",y,Object(o["toDisplayString"])(t.title),1),Object(o["createElementVNode"])("h6",v,Object(o["toDisplayString"])(t.description),1),t.price?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",k,Object(o["toDisplayString"])(t.origin_price)+" 元 ",1)),t.price?(Object(o["openBlock"])(),Object(o["createElementBlock"])("del",f,"原價 NT$ "+Object(o["toDisplayString"])(e.$filters.currency(t.origin_price))+" 元",1)):Object(o["createCommentVNode"])("",!0),t.price?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",N," NT$ "+Object(o["toDisplayString"])(e.$filters.currency(t.price))+" 元 ",1)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",E,[Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary rounded-0 border",disabled:W.status.loadingItem===t.id,onClick:function(e){return R.addCart(t.id)}},[W.status.loadingItem===t.id?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",C,S)):Object(o["createCommentVNode"])("",!0),x],8,V),Object(o["createElementVNode"])("button",{type:"button",onClick:function(e){return R.addMyFavorite(t)},class:Object(o["normalizeClass"])([{active:A.myFavorite.includes(t.id)},"btn d-block btn-outline-secondary rounded-0 border"])}," 加到我的最愛 ",10,F),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary rounded-0 border",onClick:function(e){return R.getProduct(t.id)}}," 查看更多 ",8,w)])])])])})),128)):(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],{key:1},Object(o["renderList"])(R.filterProducts,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"col",key:t.id},[Object(o["createElementVNode"])("div",P,[Object(o["createElementVNode"])("a",{href:"#",class:"rounded-0",onClick:Object(o["withModifiers"])((function(e){return R.getProduct(t.id)}),["prevent"])},[Object(o["createElementVNode"])("div",{style:Object(o["normalizeStyle"])([{height:"300px","background-size":"cover","background-position":"center"},{backgroundImage:"url(".concat(t.imageUrl,")")}])},null,4)],8,_),Object(o["createElementVNode"])("div",$,[Object(o["createElementVNode"])("span",D,Object(o["toDisplayString"])(t.category),1),Object(o["createElementVNode"])("h5",L,Object(o["toDisplayString"])(t.title),1),Object(o["createElementVNode"])("h6",I,Object(o["toDisplayString"])(t.description),1),t.price?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",M,Object(o["toDisplayString"])(t.origin_price)+" 元 ",1)),t.price?(Object(o["openBlock"])(),Object(o["createElementBlock"])("del",z,"原價 NT$ "+Object(o["toDisplayString"])(e.$filters.currency(t.origin_price))+" 元",1)):Object(o["createCommentVNode"])("",!0),t.price?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",T," NT$ "+Object(o["toDisplayString"])(e.$filters.currency(t.price))+" 元 ",1)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("div",U,[Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary rounded-0 border",disabled:W.status.loadingItem===t.id,onClick:function(e){return R.addCart(t.id)}},[W.status.loadingItem===t.id?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",q,G)):Object(o["createCommentVNode"])("",!0),H],8,J),Object(o["createElementVNode"])("button",{type:"button",onClick:function(e){return R.addMyFavorite(t)},class:Object(o["normalizeClass"])([{active:A.myFavorite.includes(t.id)},"btn d-block btn-outline-secondary rounded-0 border"])}," 加到我的最愛 ",10,K),Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary rounded-0 border",onClick:function(e){return R.getProduct(t.id)}}," 查看更多 ",8,Q)])])])])})),128))])]),Object(o["createVNode"])(Y,{pages:A.pagination,onUpdatePage:R.getProducts},null,8,["pages","onUpdatePage"])])])])])],64)}var W=c("2909"),X=(c("e9c4"),c("a434"),c("99af"),c("fb6a"),c("d3b7"),c("6062"),c("3ca3"),c("ddb0"),c("159b"),c("4de4"),c("ac1f"),c("466d"),c("cfb9")),Y=c("1799"),Z={save:function(e){var t=JSON.stringify(e);localStorage.setItem("hexFavorite",t)},get:function(){return JSON.parse(localStorage.getItem("hexFavorite"))}},ee={data:function(){return{cacheSearch:"",isLoading:!1,products:[],product:{},pagination:"",status:{loadingItem:""},categories:[],selectCategory:"",myFavorite:Z.get()||[]}},components:{Pagination:Y["a"]},provide:function(){return{emitter:X["a"]}},methods:{addMyFavorite:function(e){console.log("addMyFavorite"),this.myFavorite.includes(e.id)?this.myFavorite.splice(this.myFavorite.indexOf(e.id),1):this.myFavorite.push(e.id),console.log(this.myFavorite)},getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/products/all");this.$http.get(c).then((function(c){if(c.data.success){e.products=c.data.products,console.log("取得全部",e.products),e.getCategories(),console.log("取得分類",e.selectCategory);var o=e.$route.params.selectCategory;o&&(e.selectCategory=o),""!==e.selectCategory?e.pagination={}:e.setPagination(t),e.isLoading=!1}else e.isLoading=!1})).catch((function(t){e.$httpMessageState(t,"連線錯誤"),e.isLoading=!1}))},setPagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=12;this.pagination={total_pages:Math.ceil(this.products.length/t),current_page:e,has_pre:1!==e,has_next:!1,category:null},this.pagination.current_page>=this.pagination.total_pages?(this.pagination.current_page=this.pagination.total_pages,this.pagination.has_next=!1):this.pagination.has_next=!0;var c=this.pagination.current_page*t-t,o=this.pagination.current_page*t;this.products=this.products.slice(c,o)},getCategories:function(){var e=new Set;this.products.forEach((function(t){e.add(t.category)})),this.categories=Object(W["a"])(e)},getProduct:function(e){this.$router.push("/product/".concat(e))},addCart:function(e){var t=this,c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/cart");this.status.loadingItem=e;var o={product_id:e,qty:1};this.$http.post(c,{data:o}).then((function(e){t.status.loadingItem="",console.log(e),X["a"].emit("update-cart")}))}},watch:{selectCategory:function(e,t){""!==e&&""!==t||this.getProducts()},cacheSearch:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/products/all");this.$http.get(t).then((function(t){e.products=t.data.products}))},myFavorite:{handler:function(){Z.save(this.myFavorite)},deep:!0}},computed:{filterProducts:function(){var e=this;return this.products.filter((function(t){return t.category.match(e.selectCategory)}))},filterSearch:function(){var e=this;return this.products.filter((function(t){return t.title.match(e.cacheSearch)}))}},mounted:function(){this.getProducts()}},te=c("6b0d"),ce=c.n(te);const oe=ce()(ee,[["render",R]]);t["default"]=oe}}]);
//# sourceMappingURL=chunk-2d0c5178.7f8ce8ad.js.map