import{R as y,_ as v,r as n,o as c,c as m,b as r,w as g,e,n as p,q as k,s as T,d as O,m as P,a as w,F as E,j as L,t as d}from"./index-e4abd600.js";import{T as x}from"./Toast-70b26cd7.js";import{c as V}from"./cartStore-b1199c31.js";import{s as D}from"./statusStore-8f982174.js";const{VITE_API:U,VITE_PATH:A}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/week6_vite/",MODE:"production",DEV:!1,PROD:!0},S={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""},isProcessing:!1}},components:{RouterLink:y},methods:{createOrder(){this.isProcessing=!0;const l=this.form;this.$http.post(`${U}/api/${A}/order`,{data:l}).then(s=>{const{message:_}=s.data;this.isProcessing=!1,this.$refs.form.resetForm(),x.fire({title:`${_}`,icon:"success"}),this.$router.push("/checkout")}).catch(()=>{this.isProcessing=!1,x.fire({title:"無法新增資料，稍後再試",icon:"error"})})}}},q={class:"col-md-6"},F=e("h3",{class:"mb-3"},"客戶資訊",-1),I={class:"mb-3"},N=e("label",{for:"email",class:"form-label"},"Email",-1),R={class:"mb-3"},j=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),C={class:"mb-3"},B=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),H={class:"mb-3"},M=e("label",{for:"address",class:"form-label"},"收件人地址",-1),z={class:"mb-3"},G=e("label",{for:"message",class:"form-label"},"留言",-1),J=e("i",{class:"fas fa-chevron-left me-2"},null,-1),K={class:"text-end"},Q=["disabled"];function W(l,s,_,$,t,f){const o=n("v-field"),i=n("error-message"),h=n("RouterLink"),b=n("v-form");return c(),m("div",q,[F,r(b,{ref:"form",onSubmit:f.createOrder},{default:g(({errors:u})=>[e("div",I,[N,r(o,{id:"email",name:"email",type:"email",class:p(["form-control",{"is-invalid":u.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:t.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=a=>t.form.user.email=a)},null,8,["class","modelValue"]),r(i,{name:"email",class:"invalid-feedback"})]),e("div",R,[j,r(o,{id:"name",name:"姓名",type:"text",class:p(["form-control",{"is-invalid":u.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:t.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=a=>t.form.user.name=a)},null,8,["class","modelValue"]),r(i,{name:"姓名",class:"invalid-feedback"})]),e("div",C,[B,r(o,{id:"tel",name:"電話",type:"tel",class:p(["form-control",{"is-invalid":u.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10|numeric",modelValue:t.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=a=>t.form.user.tel=a)},null,8,["class","modelValue"]),r(i,{name:"電話",class:"invalid-feedback"})]),e("div",H,[M,r(o,{id:"address",name:"地址",type:"text",class:p(["form-control",{"is-invalid":u.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:t.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=a=>t.form.user.address=a)},null,8,["class","modelValue"]),r(i,{name:"地址",class:"invalid-feedback"})]),e("div",z,[G,k(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=a=>t.form.message=a)},null,512),[[T,t.form.message]])]),r(h,{to:"/cart",class:"text-dark mt-md-0 mt-3"},{default:g(()=>[J,O("回購物車")]),_:1}),e("div",K,[e("button",{type:"submit",class:"btn btn-secondary",disabled:t.isProcessing}," 送出訂單 ",8,Q)])]),_:1},8,["onSubmit"])])}const X=v(S,[["render",W]]),Y={data(){return{}},methods:{...P(V,["getCarts"])},computed:{...w(V,["cart"])},mounted(){this.getCarts()}},Z={class:"col-md-4"},ee={class:"border p-4 mb-4"},se=["src","alt"],te={class:"w-100"},oe={class:"d-flex justify-content-between"},re={class:"mb-0 fw-bold"},le={class:"mb-0"},ae={class:"mb-0 fw-bold"},ne={class:"table mt-4 border-top border-bottom text-muted"},ie=e("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"}," 小計 ",-1),de={class:"text-end border-0 px-0 pt-4"},ce=e("tr",null,[e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"}," 付款方式 "),e("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),me={class:"d-flex justify-content-between mt-4"},_e=e("p",{class:"mb-0 h4 fw-bold"},"總計",-1),ue={class:"mb-0 h4 fw-bold"};function pe(l,s,_,$,t,f){return c(),m("div",Z,[e("div",ee,[(c(!0),m(E,null,L(l.cart.carts,o=>(c(),m("div",{key:o.id,class:"d-flex mb-2"},[e("img",{src:o.product.imageUrl,alt:o.product.title,class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,se),e("div",te,[e("div",oe,[e("p",re,d(o.product.title),1),e("p",le,"NT$ "+d(o.product.price),1)]),e("p",ae,"x "+d(o.qty),1)])]))),128)),e("table",ne,[e("tbody",null,[e("tr",null,[ie,e("td",de,"NT$"+d(l.cart.total),1)]),ce])]),e("div",me,[_e,e("p",ue,"NT$"+d(l.cart.final_total),1)])])])}const fe=v(Y,[["render",pe]]),he={data(){return{}},components:{OrderForm:X,OrderDetail:fe},computed:{...w(D,["isLoading"])}},be={class:"mt-5"},ve=e("h2",{class:"mb-5"},"訂單資訊",-1),$e={class:"row flex-row-reverse justify-content-center pb-5"};function ge(l,s,_,$,t,f){const o=n("VueLoading"),i=n("OrderDetail"),h=n("OrderForm");return c(),m("div",be,[r(o,{active:l.isLoading,"onUpdate:active":s[0]||(s[0]=b=>l.isLoading=b)},null,8,["active"]),ve,e("div",$e,[r(i),r(h)])])}const ke=v(he,[["render",ge]]);export{ke as default};
