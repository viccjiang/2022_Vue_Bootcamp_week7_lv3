(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f4bfa5c"],{1517:function(e,t,n){
/*!
  * Bootstrap offcanvas.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,i){e.exports=i(n("848f"),n("109e"),n("6a95"),n("302d"))})(0,(function(e,t,n,i){"use strict";const a=e=>e&&"object"===typeof e&&"default"in e?e:{default:e},o=a(e),s=a(t),c=a(n),r=a(i),l=1e3,d="transitionend",u=e=>null===e||void 0===e?""+e:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),b=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},f=e=>{const t=b(e);return t?document.querySelector(t):null},h=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),a=Number.parseFloat(n);return i||a?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*l):0},m=e=>{e.dispatchEvent(new Event(d))},p=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),g=e=>p(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,v=(e,t,n)=>{Object.keys(n).forEach(i=>{const a=n[i],o=t[i],s=o&&p(o)?"element":u(o);if(!new RegExp(a).test(s))throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${a}".`)})},j=e=>!(!p(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),_=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),O=e=>{e.offsetHeight},y=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},E=[],N=e=>{"loading"===document.readyState?(E.length||document.addEventListener("DOMContentLoaded",()=>{E.forEach(e=>e())}),E.push(e)):e()},x=e=>{N(()=>{const t=y();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}})},w=e=>{"function"===typeof e&&e()},V=(e,t,n=!0)=>{if(!n)return void w(e);const i=5,a=h(t)+i;let o=!1;const s=({target:n})=>{n===t&&(o=!0,t.removeEventListener(d,s),w(e))};t.addEventListener(d,s),setTimeout(()=>{o||m(t)},a)},k=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",C=".sticky-top";class A{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",t=>t+e),this._setElementAttributes(k,"paddingRight",t=>t+e),this._setElementAttributes(C,"marginRight",t=>t-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth(),a=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const a=window.getComputedStyle(e)[t];e.style[t]=n(Number.parseFloat(a))+"px"};this._applyManipulationCallback(e,a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(k,"paddingRight"),this._resetElementAttributes(C,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&s.default.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=s.default.getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(s.default.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){p(e)?t(e):o.default.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const T={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},S={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},D="backdrop",L="fade",I="show",F="mousedown.bs."+D;class ${constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&O(this._getElement()),this._getElement().classList.add(I),this._emulateAnimation(()=>{w(e)})):w(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(I),this._emulateAnimation(()=>{this.dispose(),w(e)})):w(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(L),this._element=e}return this._element}_getConfig(e){return e={...T,..."object"===typeof e?e:{}},e.rootElement=g(e.rootElement),v(D,e,S),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),c.default.on(this._getElement(),F,()=>{w(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(c.default.off(this._element,F),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){V(e,this._getElement(),this._config.isAnimated)}}const B={trapElement:null,autofocus:!0},q={trapElement:"element",autofocus:"boolean"},M="focustrap",R="bs.focustrap",W="."+R,z="focusin"+W,U="keydown.tab"+W,P="Tab",H="forward",K="backward";class Q{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),c.default.off(document,W),c.default.on(document,z,e=>this._handleFocusin(e)),c.default.on(document,U,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,c.default.off(document,W))}_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const i=o.default.focusableChildren(n);0===i.length?n.focus():this._lastTabNavDirection===K?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){e.key===P&&(this._lastTabNavDirection=e.shiftKey?K:H)}_getConfig(e){return e={...B,..."object"===typeof e?e:{}},v(M,e,q),e}}const J=(e,t="hide")=>{const n="click.dismiss"+e.EVENT_KEY,i=e.NAME;c.default.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),_(this))return;const a=f(this)||this.closest("."+i),o=e.getOrCreateInstance(a);o[t]()}))},Y="offcanvas",G="bs.offcanvas",X="."+G,Z=".data-api",ee=`load${X}${Z}`,te="Escape",ne={backdrop:!0,keyboard:!0,scroll:!1},ie={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},ae="show",oe="offcanvas-backdrop",se=".offcanvas.show",ce="show"+X,re="shown"+X,le="hide"+X,de="hidden"+X,ue=`click${X}${Z}`,be="keydown.dismiss"+X,fe='[data-bs-toggle="offcanvas"]';class he extends r.default{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return Y}static get Default(){return ne}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=c.default.trigger(this._element,ce,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new A).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(ae);const n=()=>{this._config.scroll||this._focustrap.activate(),c.default.trigger(this._element,re,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=c.default.trigger(this._element,le);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(ae),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new A).reset(),c.default.trigger(this._element,de)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...ne,...s.default.getDataAttributes(this._element),..."object"===typeof e?e:{}},v(Y,e,ie),e}_initializeBackDrop(){return new $({className:oe,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Q({trapElement:this._element})}_addEventListeners(){c.default.on(this._element,be,e=>{this._config.keyboard&&e.key===te&&this.hide()})}static jQueryInterface(e){return this.each((function(){const t=he.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return c.default.on(document,ue,fe,(function(e){const t=f(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),_(this))return;c.default.one(t,de,()=>{j(this)&&this.focus()});const n=o.default.findOne(se);n&&n!==t&&he.getInstance(n).hide();const i=he.getOrCreateInstance(t);i.toggle(this)})),c.default.on(window,ee,()=>o.default.find(se).forEach(e=>he.getOrCreateInstance(e).show())),J(he),x(he),he}))},"1dde":function(e,t,n){var i=n("d039"),a=n("b622"),o=n("2d00"),s=a("species");e.exports=function(e){return o>=51||!i((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"3fc0":function(e,t,n){},"6c7d":function(e,t,n){"use strict";n.r(t);var i=n("7a23");function a(e,t,n,a,o,s){var c=Object(i["resolveComponent"])("FrontNavbar"),r=Object(i["resolveComponent"])("ToastMessages"),l=Object(i["resolveComponent"])("router-view"),d=Object(i["resolveComponent"])("FrontFooter");return Object(i["openBlock"])(),Object(i["createElementBlock"])(i["Fragment"],null,[Object(i["createVNode"])(c),Object(i["createVNode"])(r),Object(i["createVNode"])(l),Object(i["createVNode"])(d)],64)}var o={class:"navbar navbar-expand-lg navbar-light bg-light"},s={class:"container-fluid"},c=Object(i["createElementVNode"])("span",{class:"brandlogos"},"re.",-1),r=Object(i["createTextVNode"])("HOUSE "),l=Object(i["createElementVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(i["createElementVNode"])("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarSupportedContent"},u={class:"navbar-nav d-flex align-items-center justify-content-center me-auto mb-2 mb-lg-0"},b={class:"nav-item"},f=Object(i["createTextVNode"])("關於我們"),h={class:"nav-item"},m=Object(i["createTextVNode"])("產品列表"),p={class:"nav-item"},g=Object(i["createTextVNode"])("產品列表 (測試) "),v={class:"nav-item"},j=Object(i["createTextVNode"])("購物車"),_={class:"nav-item"},O=Object(i["createTextVNode"])("查詢訂單"),y={class:"navbar-nav d-flex align-items-center flex-column flex-lg-row"},E={class:"position-relative"},N=Object(i["createElementVNode"])("i",{class:"bi bi-bag text-secondary"},null,-1),x={key:0,class:"rounded-circle bg-danger text-light position-absolute py-1 px-2",style:{"font-size":"6px",top:"-7px",right:"-10px"}},w=Object(i["createElementVNode"])("i",{class:"bi bi-person-circle"},null,-1),V={class:"offcanvas offcanvas-end",ref:"offcanvas","data-bs-scroll":"true","data-bs-backdrop":"false",style:{overflow:"auto"},tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},k=Object(i["createElementVNode"])("div",{class:"bg-primary offcanvas-header text-white"},[Object(i["createElementVNode"])("h5",{id:"offcanvasRightLabel ",class:"text-center m-0"},"購物車"),Object(i["createElementVNode"])("button",{type:"button",class:"btn-close btn-close-white text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),C={key:0},A={class:"offcanvas-body d-flex flex-column justify-content-between"},T={class:"container"},S={class:"col-2 d-flex flex-column align-items-center justify-content-center"},D=["disabled","onClick"],L=Object(i["createElementVNode"])("i",{class:"bi bi-trash3"},null,-1),I=[L],F={class:"col d-flex flex-column fs-6 fw-bold align-items-start justify-content-center"},$={class:"border-top d-flex justify-content-center bg-light"},B={class:"col d-flex flex-column ms-auto"},q={class:"price d-flex justify-content-md-between flex-column flex-nowrap flex-md-row"},M={class:"input-group product-num-group bg-light mt-1 mb-4 my-md-0"},R={class:""},W=["disabled","onClick"],z=Object(i["createElementVNode"])("i",{class:"bi bi-dash-lg bg-light"},null,-1),U=[z],P=["onUpdate:modelValue"],H={class:""},K=["disabled","onClick"],Q=Object(i["createElementVNode"])("i",{class:"bi bi-plus-lg"},null,-1),J=[Q],Y={class:"col d-flex flex-column ms-auto text-end fs-7 text-secondary align-items-end justify-content-center"},G={class:"text-center m-0 fs-6 text-danger mb-3"},X=Object(i["createTextVNode"])("結帳去"),Z={key:1,class:"offcanvas-body d-flex flex-column align-items-center justify-content-center"},ee={class:"text-center d-flex flex-column align-items-center justify-content-center"},te=Object(i["createElementVNode"])("p",{class:"m-0"},"你的購物車沒有商品",-1),ne={class:"d-flex align-items-center justify-content-center"},ie=Object(i["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary m-2"},"回首頁",-1),ae=Object(i["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary"},"購物去",-1);function oe(e,t,n,a,L,z){var Q=Object(i["resolveComponent"])("router-link");return Object(i["openBlock"])(),Object(i["createElementBlock"])(i["Fragment"],null,[Object(i["createElementVNode"])("nav",o,[Object(i["createElementVNode"])("div",s,[Object(i["createVNode"])(Q,{class:"navbar-brand brandlogo",to:"/"},{default:Object(i["withCtx"])((function(){return[c,r]})),_:1}),l,Object(i["createElementVNode"])("div",d,[Object(i["createElementVNode"])("ul",u,[Object(i["createElementVNode"])("li",b,[Object(i["createVNode"])(Q,{class:"nav-link",to:"/about"},{default:Object(i["withCtx"])((function(){return[f]})),_:1})]),Object(i["createElementVNode"])("li",h,[Object(i["createVNode"])(Q,{class:"nav-link",to:"/products"},{default:Object(i["withCtx"])((function(){return[m]})),_:1})]),Object(i["createElementVNode"])("li",p,[Object(i["createVNode"])(Q,{class:"nav-link",to:"/all_products"},{default:Object(i["withCtx"])((function(){return[g]})),_:1})]),Object(i["createElementVNode"])("li",v,[Object(i["createVNode"])(Q,{class:"nav-link",to:"/cart"},{default:Object(i["withCtx"])((function(){return[j]})),_:1})]),Object(i["createElementVNode"])("li",_,[Object(i["createVNode"])(Q,{class:"nav-link",to:"/query"},{default:Object(i["withCtx"])((function(){return[O]})),_:1})])]),Object(i["createElementVNode"])("ul",y,[Object(i["createElementVNode"])("div",E,[Object(i["createElementVNode"])("a",{href:"",class:"nav-link",onClick:t[0]||(t[0]=Object(i["withModifiers"])((function(){return z.showOff&&z.showOff.apply(z,arguments)}),["prevent"]))},[N,L.cartData.carts?(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",x,Object(i["toDisplayString"])(L.cartData.carts.length),1)):Object(i["createCommentVNode"])("",!0)])]),Object(i["createElementVNode"])("div",null,[Object(i["createVNode"])(Q,{class:"nav-link fs-5 text-secondary",to:"/dashboard/products"},{default:Object(i["withCtx"])((function(){return[w]})),_:1})])])])])]),Object(i["createElementVNode"])("div",V,[k,L.cartData.carts.length>0?(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",C,[Object(i["createElementVNode"])("div",A,[Object(i["createElementVNode"])("div",T,[(Object(i["openBlock"])(!0),Object(i["createElementBlock"])(i["Fragment"],null,Object(i["renderList"])(L.cartData.carts,(function(e){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{class:"row border-bottom mb-3",key:e.id},[Object(i["createElementVNode"])("div",S,[Object(i["createElementVNode"])("p",{type:"",class:"btn btn-sm text-secondary text-start m-0",disabled:L.loadingItem===e.id,onClick:function(t){return z.removeCartItem(e.id)}},I,8,D)]),Object(i["createElementVNode"])("div",{class:"col-2 mb-2",style:Object(i["normalizeStyle"])([{height:"50px",width:"50px","background-size":"cover","background-position":"center"},{backgroundImage:"url(".concat(e.product.imageUrl,")")}])},null,4),Object(i["createElementVNode"])("div",F,Object(i["toDisplayString"])(e.product.title),1),Object(i["createElementVNode"])("div",$,[Object(i["createElementVNode"])("div",B,[Object(i["createElementVNode"])("div",q,[Object(i["createElementVNode"])("div",M,[Object(i["createElementVNode"])("div",R,[Object(i["createElementVNode"])("button",{disabled:e.qty<=1||L.loadingItem===e.id,onClick:function(t){return z.updateCart(e,e.qty--)},class:"btn border-0 bg-light",type:"button"},U,8,W)]),Object(i["withDirectives"])(Object(i["createElementVNode"])("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none bg-light border","aria-describedby":"button-addon1","onUpdate:modelValue":function(t){return e.qty=t}},null,8,P),[[i["vModelText"],e.qty,void 0,{lazy:!0}]]),Object(i["createElementVNode"])("div",H,[Object(i["createElementVNode"])("button",{disabled:L.loadingItem===e.id,onClick:function(t){return z.updateCart(e,e.qty++)},class:"btn border-0",type:"button"},J,8,K)])])])]),Object(i["createElementVNode"])("div",Y," $"+Object(i["toDisplayString"])(e.final_total),1)])])})),128))]),Object(i["createElementVNode"])("p",G,"總計 $ "+Object(i["toDisplayString"])(L.cartData.final_total)+" 元 ",1),Object(i["createVNode"])(Q,{class:"nav-link text-white p-0 d-grid btn btn-primary text-center m-0 p-3",to:"/cart",onClick:z.hideOff},{default:Object(i["withCtx"])((function(){return[X]})),_:1},8,["onClick"])])])):(Object(i["openBlock"])(),Object(i["createElementBlock"])("div",Z,[Object(i["createElementVNode"])("div",ee,[te,Object(i["createElementVNode"])("div",ne,[Object(i["createVNode"])(Q,{to:"/"},{default:Object(i["withCtx"])((function(){return[ie]})),_:1}),Object(i["createVNode"])(Q,{to:"products"},{default:Object(i["withCtx"])((function(){return[ae]})),_:1})])])]))],512)],64)}n("99af");var se=n("1517"),ce=n.n(se),re=n("cfb9"),le={data:function(){return{loadingItem:"",cartData:{carts:[]},offcanvas:""}},methods:{getCarts:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/cart")).then((function(t){console.log("購物車:",t),e.cartData=t.data.data}))},removeCartItem:function(e){var t=this;this.loadingItem=e;var n="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/cart/").concat(e);this.isLoading=!0,this.$http.delete(n).then((function(e){t.$httpMessageState(e,"移除購物車品項"),t.loadingItem="",t.getCarts(),t.isLoading=!1,re["a"].emit("update-cart")}))},removeCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/carts");this.isLoading=!0,this.$http.delete(t).then((function(t){e.$httpMessageState(t,"移除全部購物車品項"),e.getCarts(),e.isLoading=!1,re["a"].emit("update-cart")}))},updateCart:function(e){var t=this,n="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/cart/").concat(e.id);this.isLoading=!0,this.loadingItem=e.id;var i={product_id:e.product_id,qty:e.qty};this.$http.put(n,{data:i}).then((function(e){console.log(e),t.loadingItem="",t.getCarts(),t.isLoading=!1,re["a"].emit("update-cart")}))},showOff:function(){this.offcanvas.show()},hideOff:function(){this.offcanvas.hide()}},mounted:function(){var e=this;this.getCarts(),re["a"].on("update-cart",(function(){e.getCarts()})),this.offcanvas=new ce.a(this.$refs.offcanvas)}},de=(n("d63e"),n("6b0d")),ue=n.n(de);const be=ue()(le,[["render",oe]]);var fe=be,he={class:"bg-dark py-4 py-md-5 text-light"},me={class:"container row g-0 mx-auto px-3 fs-7 ls-2 text-secondary text-center"},pe=Object(i["createElementVNode"])("span",{class:"brandlogos"},"re.",-1),ge=Object(i["createTextVNode"])("HOUSE "),ve={class:"mt-3"},je=Object(i["createTextVNode"])("本網站僅供個人作品使用，不提供商業用途 "),_e={class:"d-none d-md-inline-block"},Oe=Object(i["createTextVNode"])("｜登入後台"),ye=Object(i["createStaticVNode"])('<div class="mt-3">© 2022 re.HOUSE COPYRIGHT</div><ul class="d-flex justify-content-center list-unstyled mt-3 mb-0 h4"><li><a href="#" class="text-white mx-3"><i class="bi bi-github"></i></a></li><li><a href="#" class="text-white mx-3"><i class="bi bi-instagram"></i></a></li><li><a href="#" class="text-white ms-3"><i class="bi bi-messenger"></i></a></li></ul>',2);function Ee(e,t,n,a,o,s){var c=Object(i["resolveComponent"])("router-link");return Object(i["openBlock"])(),Object(i["createElementBlock"])("footer",he,[Object(i["createElementVNode"])("div",me,[Object(i["createElementVNode"])("div",null,[Object(i["createVNode"])(c,{class:"navbar-brand brandlogo link-light me-0",to:"/"},{default:Object(i["withCtx"])((function(){return[pe,ge]})),_:1})]),Object(i["createElementVNode"])("div",ve,[je,Object(i["createElementVNode"])("span",_e,[Object(i["createVNode"])(c,{class:"p-0 nav-link link-secondary",to:"/login"},{default:Object(i["withCtx"])((function(){return[Oe]})),_:1})])]),ye])])}var Ne={data:function(){return{cartData:{carts:[]}}},methods:{getCart:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jiangs2022vue3","/cart")).then((function(t){console.log("購物車:",t),e.cartData=t.data.data}))}},mounted:function(){var e=this;this.getCart(),re["a"].on("update-cart",(function(){e.getCart()}))}};n("82ef");const xe=ue()(Ne,[["render",Ee]]);var we=xe,Ve=n("f367"),ke={components:{FrontNavbar:fe,ToastMessages:Ve["a"],FrontFooter:we},provide:function(){return{emitter:re["a"]}}};const Ce=ue()(ke,[["render",a]]);t["default"]=Ce},"82ef":function(e,t,n){"use strict";n("3fc0")},8418:function(e,t,n){"use strict";var i=n("a04b"),a=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var s=i(t);s in e?a.f(e,s,o(0,n)):e[s]=n}},"848f":function(e,t,n){
/*!
  * Bootstrap selector-engine.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),t=t=>!(!e(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),n=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),i=3,a={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){const n=[];let a=e.parentNode;while(a&&a.nodeType===Node.ELEMENT_NODE&&a.nodeType!==i)a.matches(t)&&n.push(a),a=a.parentNode;return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const i=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>e+':not([tabindex^="-"])').join(", ");return this.find(i,e).filter(e=>!n(e)&&t(e))}};return a}))},"99af":function(e,t,n){"use strict";var i=n("23e7"),a=n("da84"),o=n("d039"),s=n("e8b5"),c=n("861d"),r=n("7b0b"),l=n("07fa"),d=n("8418"),u=n("65f0"),b=n("1dde"),f=n("b622"),h=n("2d00"),m=f("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",v=a.TypeError,j=h>=51||!o((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),_=b("concat"),O=function(e){if(!c(e))return!1;var t=e[m];return void 0!==t?!!t:s(e)},y=!j||!_;i({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,i,a,o,s=r(this),c=u(s,0),b=0;for(t=-1,i=arguments.length;t<i;t++)if(o=-1===t?s:arguments[t],O(o)){if(a=l(o),b+a>p)throw v(g);for(n=0;n<a;n++,b++)n in o&&d(c,b,o[n])}else{if(b>=p)throw v(g);d(c,b++,o)}return c.length=b,c}})},d44f:function(e,t,n){},d63e:function(e,t,n){"use strict";n("d44f")}}]);
//# sourceMappingURL=chunk-3f4bfa5c.551f5f48.js.map