!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function d(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],c=n[l]||0,s="".concat(l," ").concat(c);n[l]=c+1;var u=d(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:y(p,t),references:1}),r.push(s)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function g(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function y(e,t){var n,r,o;if(t.singleton){var a=f++;n=m||(m=c(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=c(t),r=g.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=d(n[r]);i[o].references--}for(var a=l(e,t),c=0;c<n.length;c++){var s=d(n[c]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=a}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"body{height:100vh}.left-navbar{max-width:200px;min-width:200px}.todo-list{width:100%}.btn-add-project{margin:0;padding:0 12px;font-size:21px;border:none}.card-container{width:18rem}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,d=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,d,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);n(0);const r={addOnClickListener:(e,t,n=null)=>{document.getElementById(e).addEventListener("click",()=>{null!==n?t(n):t()})},addHtmlListItem:e=>{const t=document.createElement("li");for(let n=0;n<e.length;n+=1)t.classList.add(e[n]);return t},addHtmlAnchor:(e,t,n,r)=>{const o=document.createElement("a");for(let t=0;t<e.length;t+=1)o.classList.add(e[t]);return o.href=t,o.innerHTML=n,o.id=r,o},addHtmlButton:(e,t,n,r)=>{const o=document.createElement("button");for(let t=0;t<e.length;t+=1)o.classList.add(e[t]);return o.setAttribute("type",t),o.id=n,o.innerHTML=r,o},addHtmlHeading:(e,t,n)=>{const r=document.createElement("h"+n);for(let t=0;t<e.length;t+=1)r.classList.add(e[t]);return r.innerHTML=t,r},firstChildExists:e=>!!e.childNodes[1],addHtmlDiv:(e,t=null)=>{const n=document.createElement("div");for(let t=0;t<e.length;t+=1)n.classList.add(e[t]);return null!=t&&(n.id=t),n},addHtmlInput:(e,t,n,r,o="")=>{const a=document.createElement("input");for(let t=0;t<e.length;t+=1)a.classList.add(e[t]);return a.id=r,a.setAttribute("type",t),a.setAttribute("placeholder",n),a.value=o,a},hideElement:e=>{document.getElementById(e).style.display="none"},showElement:e=>{document.getElementById(e).style.display="block"},showElementFlex:e=>{document.getElementById(e).style.display="flex"},addHTMLSection:(e,t=null)=>{const n=document.createElement("section");for(let t=0;t<e.length;t+=1)n.classList.add(e[t]);return null!=t&&(n.id=t),n},appendTitle:(e,t)=>{r.firstChildExists(e)?(e.innerHTML="",e.append(t)):e.append(t)},addHtmlSelect:(e,t=null)=>{const n=document.createElement("select");for(let t=0;t<e.length;t+=1)n.classList.add(e[t]);return null!=t&&(n.id=t),n},addHtmlSpan:(e,t="")=>{const n=document.createElement("span");for(let t=0;t<e.length;t+=1)n.classList.add(e[t]);return n.text=t,n}};const o=(e=0,t="",n="",r=1,o=[])=>{const a=e;let i=t,d=n,l=r,c=o;const s=new Date,u=String(s.getDate()).padStart(2,"0"),p=String(s.getMonth()+1).padStart(2,"0");let g=`${String(s.getFullYear())}-${p}-${u}`,m=!1;return{getTitle:()=>i,getDescription:()=>d,getDueDate:()=>g,getPriority:()=>l,getChecklist:()=>c,getComplete:()=>m,setTitle:e=>{i=e},setDescription:e=>{d=e},setDueDate:e=>{g=e},setPriority:e=>{l=e},setChecklist:e=>{c=e},getIndex:()=>a,setComplete:e=>{m=e}}};const a=(e=0,t="Project",n="")=>{let r=n;const a=[],i=e;let d=`${t}-${e}`;return{getTitle:()=>d,getDescription:()=>r,setTitle:e=>{d=e},setDescription:e=>{r=e},listTasks:()=>a,addTask:e=>{a.push(e)},getIndex:()=>i,getTaskByIndex:e=>{let t=0;for(;t<a.length;){if(a[t].getIndex()===e)return a[t];t+=1}return-1},createTask:()=>{let e=0;0!==a.length&&(e=a[a.length-1].getIndex()+1);const t=o(e,`Task ${e} title`,`Task ${e} description`);a.push(t)}}};const i=(()=>{let e=[];return{createProject:()=>{let t=0;0!==e.length&&(t=e[e.length-1].getIndex()+1);const n=a(t);return e.push(n),n},getProjectByIndex:t=>{let n=0;for(;n<e.length;){if(e[n].getIndex()===t)return e[n];n+=1}return-1},getProjectAmount:()=>e.length,saveToStorage:t=>{for(let n=0;n<e.length;n+=1){localStorage.setItem(`${t}-project-${n}-title`,e[n].getTitle()),localStorage.setItem(`${t}-project-${n}-description`,e[n].getDescription()),localStorage.setItem(`${t}-project-${n}-index`,e[n].getIndex());for(let r=0;r<e[n].listTasks().length;r+=1)localStorage.setItem(`${t}-project-${n}-task-${r}-index`,e[n].getTaskByIndex(r).getIndex()),localStorage.setItem(`${t}-project-${n}-task-${r}-title`,e[n].getTaskByIndex(r).getTitle()),localStorage.setItem(`${t}-project-${n}-task-${r}-description`,e[n].getTaskByIndex(r).getDescription()),localStorage.setItem(`${t}-project-${n}-task-${r}-priority`,e[n].getTaskByIndex(r).getPriority()),localStorage.setItem(`${t}-project-${n}-task-${r}-duedate`,e[n].getTaskByIndex(r).getDueDate()),localStorage.setItem(`${t}-project-${n}-task-${r}-complete`,e[n].getTaskByIndex(r).getComplete())}},cleanProject:()=>{e=[]},getProjectArray:()=>e,setProjectArray:t=>e[t]}})();const d=(()=>{const e=(e,t)=>{const n=r.addHtmlDiv(["input-group","pb-3"],`input-title-group-task-${e.getIndex()}-${t.getIndex()}`),o=r.addHtmlInput(["form-control"],"text","Write your task title",`input-title-task-${e.getIndex()}-${t.getIndex()}`,t.getTitle()),a=r.addHtmlButton(["btn","btn-outline-secondary"],"button",`button-save-input-name-group-task-${e.getIndex()}-${t.getIndex()}`,"Save"),i=r.addHtmlDiv(["input-group-append"]);return a.addEventListener("click",()=>{t.setTitle(o.value);document.getElementById(`input-title-group-task-${e.getIndex()}-${t.getIndex()}`).remove(),r.showElement(`task-title-${e.getIndex()}-${t.getIndex()}`);document.getElementById(`task-title-${e.getIndex()}-${t.getIndex()}`).innerHTML=t.getTitle()}),i.append(a),n.append(o),n.append(i),n},t=(e,t)=>{const n=r.addHtmlDiv(["input-group","pb-3"],`input-description-group-task-${e.getIndex()}-${t.getIndex()}`),o=r.addHtmlInput(["form-control"],"text","Write your task description",`input-description-task-${e.getIndex()}-${t.getIndex()}`,t.getDescription()),a=r.addHtmlButton(["btn","btn-outline-secondary"],"button",`button-save-input-description-group-task-${e.getIndex()}-${t.getIndex()}`,"Save"),i=r.addHtmlDiv(["input-group-append"]);return a.addEventListener("click",()=>{t.setDescription(o.value);document.getElementById(`input-description-group-task-${e.getIndex()}-${t.getIndex()}`).remove(),r.showElement(`task-description-${e.getIndex()}-${t.getIndex()}`);document.getElementById(`task-description-${e.getIndex()}-${t.getIndex()}`).innerHTML=t.getDescription()}),i.append(a),n.append(o),n.append(i),n},n=(e,t)=>{const n=r.addHtmlDiv(["input-group","mb-3"]),o=r.addHtmlInput(["w-100"],"date","",`date-input-${e.getIndex()}-${t.getIndex()}`,"");return o.value=t.getDueDate(),n.append(o),o.addEventListener("change",()=>{t.setDueDate(o.value)}),n},o=(e,t)=>{const n=r.addHtmlDiv(["form-group"]),o=r.addHtmlSelect(["form-control"],`select-task-priority-${e.getIndex()}-${t.getIndex()}`),a=document.createElement("option");a.innerHTML="Set the priority of the task",a.selected="selected",o.append(a);const i=document.createElement("option");i.innerHTML="Low Priority",i.value="1",o.append(i);const d=document.createElement("option");d.innerHTML="Medium Priority",d.value="2",o.append(d);const l=document.createElement("option");return l.innerHTML="High Priority",l.value="3",o.append(l),o.selectedIndex=t.getPriority(),n.append(o),o.addEventListener("change",()=>{t.setPriority(Number(o.value));const n=`task-${e.getIndex()}-${t.getIndex()}`,r=document.getElementById(n);1===t.getPriority()&&(r.style.backgroundColor="greenyellow"),2===t.getPriority()&&(r.style.backgroundColor="#ffd9ad"),3===t.getPriority()&&(r.style.backgroundColor="#ffadad")}),n},a=(a,i)=>{const d=r.addHtmlDiv(["card","m-2","card-container"],`task-${a.getIndex()}-${i.getIndex()}`),l=r.addHtmlDiv(["card-body"],0);"1"!==i.getPriority()&&1!==i.getPriority()||(d.style.backgroundColor="greenyellow"),"2"!==i.getPriority()&&2!==i.getPriority()||(d.style.backgroundColor="#ffd9ad"),"3"!==i.getPriority()&&3!==i.getPriority()||(d.style.backgroundColor="#ffadad");const c=r.addHtmlHeading(["card-title"],i.getTitle(),5);c.id=`task-title-${a.getIndex()}-${i.getIndex()}`,c.addEventListener("click",()=>{let t="";t=e(a,i),l.prepend(t),r.hideElement(`task-title-${a.getIndex()}-${i.getIndex()}`)}),l.appendChild(c);const s=r.addHtmlHeading(["card-subtitle","mb-2","text-muted"],i.getDescription(),6);s.id=`task-description-${a.getIndex()}-${i.getIndex()}`,s.addEventListener("click",()=>{let e="";e=t(a,i),l.insertBefore(e,s),r.hideElement(`task-description-${a.getIndex()}-${i.getIndex()}`)}),l.appendChild(s);const u=r.addHtmlDiv(["d-flex","flex-row","justify-content-between","mt-3"]),p=r.addHtmlAnchor(["card-link","m-0","btn","btn-danger"],"#","Delete",0);return p.addEventListener("click",()=>{i.setComplete(!0);const e=`task-${a.getIndex()}-${i.getIndex()}`;document.getElementById(e).remove()}),u.appendChild(p),l.append(o(a,i)),l.append(n(a,i)),l.appendChild(u),d.appendChild(l),d},d=(e,t)=>{e.innerHTML="";for(let n=0;n<t.listTasks().length;n+=1)if(!t.getTaskByIndex(n).getComplete()||"false"===t.getTaskByIndex(n).getComplete()){const r=a(t,t.getTaskByIndex(n));e.append(r)}},l=e=>{const t=i.getProjectByIndex(e),n=document.getElementById("project-container"),o=r.addHtmlHeading([],t.getTitle(),2);o.id="project-title-"+e,r.appendTitle(n,o);const a=r.addHtmlDiv(["input-group"],"input-name-group-project-"+e),l=r.addHtmlInput(["form-control"],"text","Write your project title","input-project-"+e,t.getTitle());a.append(l);const c=r.addHtmlDiv(["input-group-append"],0),s=r.addHtmlButton(["btn","btn-outline-secondary"],"button","button-save-input-name-group-project-"+e,"Save");c.append(s),a.append(c),n.append(a),r.hideElement(a.id),r.addOnClickListener(o.id,r.showElementFlex,"input-name-group-project-"+e),r.addOnClickListener(o.id,r.hideElement,o.id),r.addOnClickListener(s.id,r.showElement,o.id),r.addOnClickListener(s.id,()=>{t.setTitle(l.value);document.getElementById(o.id).innerHTML=l.value}),o.addEventListener("click",()=>{o.innerHTML=t.getTitle()}),r.addOnClickListener(s.id,()=>{const n=document.getElementById("link-project-"+e);n.innerHTML="",n.innerHTML=t.getTitle()}),r.addOnClickListener(s.id,r.hideElement,a.id);const u=r.addHtmlButton(["btn","btn-success","fa","fa-plus","mt-2"],"button","button-add-task-"+e,"New project task");n.appendChild(u);const p=r.addHTMLSection(["project-wrapper"],"project-wrapper-section"),g=r.addHtmlDiv(["d-flex","flex-wrap","align-items-start"],"section-cards-container");g.id="task-container-project-"+t.getIndex(),p.appendChild(g),n.appendChild(p),u.addEventListener("click",()=>{t.createTask(),d(g,t)})},c=e=>{const t=document.getElementById("project-list"),n=t.childNodes[t.childNodes.length-1];void 0!==n&&n.addEventListener("click",()=>{l(e.getIndex());const t="task-container-project-"+e.getIndex(),n=document.getElementById(t),r=i.getProjectByIndex(e.getIndex());d(n,r)})},s=e=>{const t=r.addHtmlListItem(["nav-item"]),n="link-project-"+e.getIndex(),o=r.addHtmlAnchor(["nav-link"],"#",e.getTitle(),n);t.append(o);document.getElementById("project-list").append(t)},u=()=>i.createProject();return{drawInputFieldTitle:e,drawInputFieldDescription:t,drawDateInput:n,drawCard:a,drawSelectPriority:o,drawProjectButton:s,createClickEventAddProject:()=>{document.getElementById("new-project").addEventListener("click",()=>{const e=i.createProject();s(e),c(e)})},createClickEventProjectItem:c,drawProject:l,updateTasks:d,cleanLocalStorage:()=>{document.getElementById("clear-everything").addEventListener("click",()=>{localStorage.clear(),i.cleanProject(),window.location.reload()})},createProject:u,loadFromStorage:e=>{let t=0;for(;null!=localStorage.getItem(`${e}-project-${t}-index`);){const n=u();s(n),c(n),i.setProjectArray(t).setTitle(localStorage.getItem(`${e}-project-${t}-title`)),i.setProjectArray(t).setDescription(localStorage.getItem(`${e}-project-${t}-description`)),i.setProjectArray(t).getIndex(localStorage.getItem(`${e}-project-${t}-index`));let r=0;for(;null!=localStorage.getItem(`${e}-project-${t}-task-${r}-index`);)i.setProjectArray(t).createTask(),i.setProjectArray(t).getTaskByIndex(r).setTitle(localStorage.getItem(`${e}-project-${t}-task-${r}-title`)),i.setProjectArray(t).getTaskByIndex(r).setDescription(localStorage.getItem(`${e}-project-${t}-task-${r}-description`)),i.setProjectArray(t).getTaskByIndex(r).setPriority(localStorage.getItem(`${e}-project-${t}-task-${r}-priority`)),i.setProjectArray(t).getTaskByIndex(r).setDueDate(localStorage.getItem(`${e}-project-${t}-task-${r}-duedate`)),i.setProjectArray(t).getTaskByIndex(r).setComplete(localStorage.getItem(`${e}-project-${t}-task-${r}-complete`)),r+=1;t+=1}for(let e=0;e<i.getProjectAmount;e+=1)l(e)},updateColorPriority:(e,t)=>{const n=`task-${e.getIndex()}-${t.getIndex()}`,r=document.getElementById(n);1!==t.getPriority()&&"1"!==t.getPriority()||(r.style.backgroundColor="greenyellow"),2!==t.getPriority()&&"2"!==t.getPriority()||(r.style.backgroundColor="#ffd9ad"),3!==t.getPriority()&&"3"!==t.getPriority()||(r.style.backgroundColor="#ffadad")}}})();const l={InitializePage:e=>{if(d.createClickEventAddProject(),d.cleanLocalStorage(),null==localStorage.getItem(e+"-project-0-index")){const e=d.createProject();d.drawProjectButton(e),d.createClickEventProjectItem(e),e.createTask(),d.drawProject(0);const t=document.getElementById("task-container-project-0");d.updateTasks(t,e)}else d.loadFromStorage(e),d.cleanLocalStorage()}};window.onload=function(){l.InitializePage("todoList")},window.addEventListener("beforeunload",()=>{0!==i.getProjectAmount&&i.saveToStorage("todoList")})}]);