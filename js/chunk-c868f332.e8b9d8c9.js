(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c868f332"],{1799:function(e,t,c){"use strict";var o=c("7a23"),l={key:0,"aria-label":"Page navigation"},a={class:"pagination justify-content-end"},n={key:0,class:"page-item"},r=["onClick"],i={class:"page-item"};function d(e,t,c,d,s,u){return c.pages.total_pages>1?(Object(o["openBlock"])(),Object(o["createElementBlock"])("nav",l,[Object(o["createElementVNode"])("ul",a,[c.pages.has_pre?(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",n,[Object(o["createElementVNode"])("a",{class:"page-link bi bi-caret-left-fill",href:"#",onClick:t[0]||(t[0]=Object(o["withModifiers"])((function(e){return u.updatePage(c.pages.current_page-1)}),["prevent"]))})])):Object(o["createCommentVNode"])("",!0),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(c.pages.total_pages,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e,class:Object(o["normalizeClass"])(["page-item",{active:c.pages.current_page===e}])},[Object(o["createElementVNode"])("a",{class:"page-link",href:"#",onClick:Object(o["withModifiers"])((function(t){return u.updatePage(e)}),["prevent"])},Object(o["toDisplayString"])(e),9,r)],2)})),128)),Object(o["createElementVNode"])("li",i,[c.pages.has_next?(Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{key:0,class:"page-link bi bi-caret-right-fill",href:"#",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(e){return u.updatePage(c.pages.current_page+1)}),["prevent"]))})):Object(o["createCommentVNode"])("",!0)])])])):Object(o["createCommentVNode"])("",!0)}var s={props:["pages"],emits:["update-page"],template:"#pagination-template",methods:{updatePage:function(e){this.pages.current_page!==e&&this.$emit("update-page",e)}}},u=c("6b0d"),m=c.n(u);const p=m()(s,[["render",d]]);t["a"]=p},e01a:function(e,t,c){"use strict";var o=c("23e7"),l=c("83ab"),a=c("da84"),n=c("e330"),r=c("1a2d"),i=c("1626"),d=c("3a9b"),s=c("577e"),u=c("9bf2").f,m=c("e893"),p=a.Symbol,b=p&&p.prototype;if(l&&i(p)&&(!("description"in b)||void 0!==p().description)){var j={},O=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),t=d(b,this)?new p(e):void 0===e?p():p(e);return""===e&&(j[t]=!0),t};m(O,p),O.prototype=b,b.constructor=O;var f="Symbol(test)"==String(p("test")),h=n(b.toString),g=n(b.valueOf),v=/^Symbol\((.*)\)[^)]+$/,E=n("".replace),V=n("".slice);u(b,"description",{configurable:!0,get:function(){var e=g(this),t=h(e);if(r(j,e))return"";var c=f?V(t,7,-1):E(t,v,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:O})}},e6dc:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),l={class:"text-end mt-4"},a={class:"table mt-4"},n=Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",{width:"120"},"分類"),Object(o["createElementVNode"])("th",null,"產品名稱"),Object(o["createElementVNode"])("th",{width:"120"},"原價"),Object(o["createElementVNode"])("th",{width:"120"},"售價"),Object(o["createElementVNode"])("th",{width:"100"},"是否上架"),Object(o["createElementVNode"])("th",{width:"120"},"編輯")])],-1),r={class:"text-right"},i={class:"text-right"},d={key:0,class:"badge bg-success"},s={key:1,class:"badge bg-secondary"},u={class:"btn-group"},m=["onClick"],p=["onClick"];function b(e,t,c,b,j,O){var f=Object(o["resolveComponent"])("Loading"),h=Object(o["resolveComponent"])("Pagination"),g=Object(o["resolveComponent"])("ProductModal"),v=Object(o["resolveComponent"])("DelModal");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(f,{active:j.isLoading},null,8,["active"]),Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=function(e){return O.openModal(!0)})}," 建立新的產品 ")]),Object(o["createElementVNode"])("table",a,[n,Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(j.products,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:t.id},[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.category),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.title),1),Object(o["createElementVNode"])("td",r,Object(o["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(o["createElementVNode"])("td",i,Object(o["toDisplayString"])(e.$filters.currency(t.price)),1),Object(o["createElementVNode"])("td",null,[t.is_enabled?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",d,"上架中")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",s,"未上架"))]),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("div",u,[Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(e){return O.openModal(!1,t)}}," 編輯 ",8,m),Object(o["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(e){return O.openDelProductModal(t)}}," 刪除 ",8,p)])])])})),128))])]),Object(o["createVNode"])(h,{pages:j.pagination,onEmitPages:O.getProducts},null,8,["pages","onEmitPages"]),Object(o["createVNode"])(g,{ref:"productModal",product:j.tempProduct,onUpdateProduct:O.updateProduct,"is-new":j.isNew},null,8,["product","onUpdateProduct","is-new"]),Object(o["createVNode"])(v,{item:j.tempProduct,ref:"delModal",onDelItem:O.delProduct},null,8,["item","onDelItem"])],64)}var j=c("5530"),O=(c("99af"),c("a15b"),c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),f={class:"modal-dialog modal-xl",role:"document"},h={class:"modal-content border-0"},g={class:"modal-header bg-primary text-white"},v={id:"productModalLabel",class:"modal-title"},E={key:0},V={key:1},N=Object(o["createElementVNode"])("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),k={class:"modal-body"},y={class:"row"},P={class:"col-sm-4"},w={class:"mb-3"},x=Object(o["createElementVNode"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),B={class:"mb-3"},M=Object(o["createElementVNode"])("label",{for:"customFile",class:"form-label"},[Object(o["createTextVNode"])("或 上傳圖片 "),Object(o["createElementVNode"])("i",{class:"fas fa-spinner fa-spin"})],-1),U=["src"],_={key:0},C={class:"mb-3"},D=Object(o["createElementVNode"])("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),$=["onUpdate:modelValue"],F=["src"],S={key:0},L={key:1},T={key:1},I={class:"col-sm-8"},A={class:"mb-3"},J=Object(o["createElementVNode"])("label",{for:"title",class:"form-label"},"標題",-1),z={class:"row gx-2"},q={class:"mb-3 col-md-6"},G=Object(o["createElementVNode"])("label",{for:"category",class:"form-label"},"分類",-1),H={class:"mb-3 col-md-6"},K=Object(o["createElementVNode"])("label",{for:"price",class:"form-label"},"單位",-1),Q={class:"row gx-2"},R={class:"mb-3 col-md-6"},W=Object(o["createElementVNode"])("label",{for:"origin_price",class:"form-label"},"原價",-1),X={class:"mb-3 col-md-6"},Y=Object(o["createElementVNode"])("label",{for:"price",class:"form-label"},"售價",-1),Z=Object(o["createElementVNode"])("hr",null,null,-1),ee={class:"mb-3"},te=Object(o["createElementVNode"])("label",{for:"description",class:"form-label"},"產品描述",-1),ce={class:"mb-3"},oe=Object(o["createElementVNode"])("label",{for:"content",class:"form-label"},"說明內容",-1),le={class:"mb-3"},ae={class:"form-check"},ne=Object(o["createElementVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),re={class:"mb-3"},ie={class:"form-check"},de=Object(o["createElementVNode"])("label",{class:"form-check-label",for:"is_new_product"}," 新品標籤啟用 ",-1),se={class:"mb-3"},ue={class:"form-check"},me=Object(o["createElementVNode"])("label",{class:"form-check-label",for:"is_is_hot"}," 熱銷標籤啟用 ",-1),pe={class:"modal-footer"},be=Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function je(e,t,c,l,a,n){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",O,[Object(o["createElementVNode"])("div",f,[Object(o["createElementVNode"])("div",h,[Object(o["createElementVNode"])("div",g,[Object(o["createElementVNode"])("h5",v,[c.isNew?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",E,"新增產品")):(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",V,"編輯產品"))]),N]),Object(o["createElementVNode"])("div",k,[Object(o["createElementVNode"])("div",y,[Object(o["createElementVNode"])("div",P,[Object(o["createElementVNode"])("div",w,[x,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.tempProduct.imageUrl=e}),placeholder:"請輸入圖片連結"},null,512),[[o["vModelText"],a.tempProduct.imageUrl]])]),Object(o["createElementVNode"])("div",B,[M,Object(o["createElementVNode"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[1]||(t[1]=function(){return n.uploadFile&&n.uploadFile.apply(n,arguments)})},null,544)]),Object(o["createElementVNode"])("img",{class:"img-fluid",src:a.tempProduct.imageUrl,alt:""},null,8,U),Array.isArray(a.tempProduct.imagesUrl)?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",_,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.tempProduct.imagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:t},[Object(o["createElementVNode"])("div",C,[D,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{"onUpdate:modelValue":function(e){return a.tempProduct.imagesUrl[t]=e},type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,$),[[o["vModelText"],a.tempProduct.imagesUrl[t]]])]),Object(o["createElementVNode"])("img",{class:"img-fluid",src:e},null,8,F)],64)})),128)),!a.tempProduct.imagesUrl.length||a.tempProduct.imagesUrl[a.tempProduct.imagesUrl.length-1]?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",S,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[2]||(t[2]=function(e){return a.tempProduct.imagesUrl.push("")})}," 新增圖片 ")])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",L,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:t[3]||(t[3]=function(e){return a.tempProduct.imagesUrl.pop()})}," 刪除圖片 ")]))])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",T,[Object(o["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[4]||(t[4]=function(){return n.createImages&&n.createImages.apply(n,arguments)})}," 新增圖片 ")]))]),Object(o["createElementVNode"])("div",I,[Object(o["createElementVNode"])("div",A,[J,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.tempProduct.title=e}),placeholder:"請輸入標題"},null,512),[[o["vModelText"],a.tempProduct.title]])]),Object(o["createElementVNode"])("div",z,[Object(o["createElementVNode"])("div",q,[G,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":t[6]||(t[6]=function(e){return a.tempProduct.category=e}),placeholder:"請輸入分類"},null,512),[[o["vModelText"],a.tempProduct.category]])]),Object(o["createElementVNode"])("div",H,[K,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":t[7]||(t[7]=function(e){return a.tempProduct.unit=e}),placeholder:"請輸入單位"},null,512),[[o["vModelText"],a.tempProduct.unit]])])]),Object(o["createElementVNode"])("div",Q,[Object(o["createElementVNode"])("div",R,[W,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":t[8]||(t[8]=function(e){return a.tempProduct.origin_price=e}),placeholder:"請輸入原價"},null,512),[[o["vModelText"],a.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["createElementVNode"])("div",X,[Y,Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[9]||(t[9]=function(e){return a.tempProduct.price=e}),placeholder:"請輸入售價"},null,512),[[o["vModelText"],a.tempProduct.price,void 0,{number:!0}]])])]),Z,Object(o["createElementVNode"])("div",ee,[te,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[10]||(t[10]=function(e){return a.tempProduct.description=e}),placeholder:"請輸入產品描述"},null,512),[[o["vModelText"],a.tempProduct.description]])]),Object(o["createElementVNode"])("div",ce,[oe,Object(o["withDirectives"])(Object(o["createElementVNode"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[11]||(t[11]=function(e){return a.tempProduct.content=e}),placeholder:"請輸入產品說明內容"},null,512),[[o["vModelText"],a.tempProduct.content]])]),Object(o["createElementVNode"])("div",le,[Object(o["createElementVNode"])("div",ae,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[12]||(t[12]=function(e){return a.tempProduct.is_enabled=e}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o["vModelCheckbox"],a.tempProduct.is_enabled]]),ne])]),Object(o["createElementVNode"])("div",re,[Object(o["createElementVNode"])("div",ie,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[13]||(t[13]=function(e){return a.tempProduct.is_new_product=e}),"true-value":1,"false-value":0,id:"is_new_product"},null,512),[[o["vModelCheckbox"],a.tempProduct.is_new_product]]),de])]),Object(o["createElementVNode"])("div",se,[Object(o["createElementVNode"])("div",ue,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[14]||(t[14]=function(e){return a.tempProduct.is_hot=e}),"true-value":1,"false-value":0,id:"is_is_hot"},null,512),[[o["vModelCheckbox"],a.tempProduct.is_hot]]),me])])])])]),Object(o["createElementVNode"])("div",pe,[be,Object(o["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[15]||(t[15]=function(t){return e.$emit("update-product",a.tempProduct)})}," 確認 ")])])])],512)}var Oe=c("e0ae"),fe={props:{product:{type:Object,default:function(){return{}}},isNew:{type:Boolean,default:!1}},emits:["update-product"],inject:["emitter"],watch:{product:function(){this.tempProduct=this.product}},data:function(){return{modal:{},tempProduct:{imagesUrl:[]}}},methods:{uploadFile:function(){var e=this,t=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",t);var o="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/admin/upload");this.$http.post(o,c).then((function(t){console.log(t.data),t.data.success&&(e.tempProduct.imageUrl=t.data.imageUrl)}))},createImages:function(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")}},mixins:[Oe["a"]]},he=c("6b0d"),ge=c.n(he);const ve=ge()(fe,[["render",je]]);var Ee=ve,Ve=c("1799"),Ne=c("6ff1"),ke={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:Ee,DelModal:Ne["a"],Pagination:Ve["a"]},inject:["emitter"],methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/admin/products/?page=").concat(t);this.isLoading=!0,this.$http.get(c).then((function(t){e.isLoading=!1,t.data.success&&(console.log(t.data),e.products=t.data.products,e.pagination=t.data.pagination)})).catch((function(t){console.dir(t.response.data.message),e.$router.push("/login")}))},openModal:function(e,t){this.tempProduct=e?{}:Object(j["a"])({},t),this.isNew=e;var c=this.$refs.productModal;c.showModal()},updateProduct:function(e){var t=this;this.tempProduct=e;var c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/admin/product"),o="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/admin/product/").concat(e.id),o="put");var l=this.$refs.productModal;this.$http[o](c,{data:this.tempProduct}).then((function(e){console.log(e),l.hideModal(),e.data.success&&(t.getProducts(),t.emitter.emit("push-message",{style:"success",title:"更新成功"}))})).catch((function(e){l.hideModal(),t.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:e.response.data.message.join("、")})}))},openDelProductModal:function(e){this.tempProduct=Object(j["a"])({},e);var t=this.$refs.delModal;t.showModal()},delProduct:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/admin/product/").concat(this.tempProduct.id);this.$http.delete(t).then((function(t){console.log(t.data);var c=e.$refs.delModal;c.hideModal(),e.getProducts()}))}},mounted:function(){this.getProducts()}};const ye=ge()(ke,[["render",b]]);t["default"]=ye}}]);
//# sourceMappingURL=chunk-c868f332.e8b9d8c9.js.map