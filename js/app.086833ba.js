(function(e){function t(t){for(var r,o,s=t[0],i=t[1],c=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},l=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-6b7ba8e6":"a9a441e0","chunk-6eeb0a27":"18e9f6f8"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-6b7ba8e6":1,"chunk-6eeb0a27":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-6b7ba8e6":"e8eed1b3","chunk-6eeb0a27":"1260a4af"}[e]+".css",a=i.p+r,l=document.getElementsByTagName("link"),s=0;s<l.length;s++){var c=l[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===r||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=r,delete o[e],f.parentNode.removeChild(f),n(l)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var l=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=l);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/new-portfolio/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3ed1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("3ed1");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{staticClass:"toggle-main-bg",attrs:{id:"app"}},[n("router-view")],1)},a=[],l={data:function(){return{}}},s=l,i=n("2877"),c=Object(i["a"])(s,o,a,!1,null,null,null),u=c.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=[{path:"/",component:function(){return n.e("chunk-6b7ba8e6").then(n.bind(null,"ac48"))},children:[{path:"/",component:function(){return n.e("chunk-6eeb0a27").then(n.bind(null,"c116"))}}]}];r["default"].use(d["a"]);var p=new d["a"]({routes:f}),h=p,m=n("2f62");r["default"].use(m["a"]);var g=function(){var e=new m["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{}});return e},b=n("ce5b"),v=n.n(b);n("bf40"),n("4aac");r["default"].use(v.a);var k={rtl:"AR"==localStorage.getItem("language"),theme:{customProperties:!0,themes:{light:{primary:"#333333",secondary:"#72a2d1"}}}},y=new v.a(k),w=(n("d1e78"),n("5363"),n("a925")),T=n("a54f"),S=n("e088");r["default"].use(w["a"]);var O=new w["a"]({locale:localStorage.getItem("language")||"EN",fallbackLocale:"EN",messages:{EN:S,AR:T}}),C=n("77a0"),E=n.n(C);r["default"].use(E.a),r["default"].prototype.$vuescrollConfig={bar:{background:"red"}},new r["default"]({store:g,router:h,vuetify:y,i18n:O,render:function(e){return e(u)}}).$mount("#app")},a54f:function(e){e.exports=JSON.parse('{"scroll":"تمرير","me1":"مطور واجهة امامية","me2":"","home":"الرئيسية","skills":"مهاراتي","works":"اعمالي","contact":"اتصل بي","nour":"نور","skillTitle1":"ماذا تضمنت مهارات","skillTitle2":"  البرمجة الخاصة بي؟","skillDesc":"أقوم بتطوير واجهات مستخدم رائعة وبسيطة وسريعة الاستجابة حتى تساعد المستخدمين على إنجاز المهام بأقل وقت وجهد من خلال هذه التقنيات.","tabSkill":"المهارات","tabTool":"الأدوات","skillLeftTitle":"مهاراتي","workTitle1":"شاهد أعمالي","workTitle2":"التي ستدهشك!","workDesc":"أقوم بتطوير أفضل مواقع الويب عالية الجودة والتي تعمل على المدى الطويل. تساعد الواجهة الموثقة جيدًا والنظيفة والسهلة والأنيقة أي عميل غير تقني.","workLeftTitle":"اعمالي","contactTitle1":"هل لديك اي مشروع؟","contactTitle2":"الرجاء ترك رسالة","contactLeftTitle":"اتصل بي","contactDesc":"تواصل معي واسمح لي أن أعرف كيف يمكنني المساعدة. املأ النموذج وسأكون على تواصل في أقرب وقت ممكن.","address":"العنوان","phone":"الهاتف","email":"البريد الالكتروني","name":"الاسم","message":"رسالة","Turkey-Konya":"قونيا-تركيا","messageField":"اكتب رسالتك...","nameField":"فلان الفلاني","send":"ارسال","card1":"سنة من الخبرة","card2":"مشاريع منجزة","card3":"كوب من القهوة","copyRight":"© 2021 مدعوم بكل بفخر من","coded":"تم التكويد بواسطتي!!"}')},e088:function(e){e.exports=JSON.parse('{"scroll":"SCROLL","me1":"Front-end","me2":"Web Developer","home":"Home","skills":"Skills","works":"Works","contact":"Contact","nour":"Nour","skillTitle1":"What My Programming ","skillTitle2":"Skills Included?","skillDesc":"I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.","tabSkill":"Skills","tabTool":"Tools","skillLeftTitle":"MY SKILLS","workTitle1":"See My Works Which ","workTitle2":"Will Amaze You!","workDesc":"I develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.","workLeftTitle":"MY WORKS","contactTitle1":"Have You Any Project?","contactTitle2":"Please Drop a Message","contactLeftTitle":"CONTACT","contactDesc":"Get in touch and let me know how i can help. Fill out the form and I’ll be in touch as soon as possible.","Turkey-Konya":"Turkey-Konya","address":"Address","phone":"Phone","email":"Email","name":"Name","message":"Message","messageField":"write your message","nameField":"Example Name","send":"SEND","copyRight":"© 2021 coded by me it\'s from ","card1":"Years of Experience","card2":"Completed Projects","card3":"Coffe Cup","coded":"Coded By Me!!"}')}});
//# sourceMappingURL=app.086833ba.js.map