!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function d(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],l=n[c]||0,s="".concat(c," ").concat(l);n[c]=l+1;var u=d(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:s,updater:y(p,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function g(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function y(e,t){var n,r,o;if(t.singleton){var i=f++;n=m||(m=l(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=l(t),r=g.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=d(n[r]);a[o].references--}for(var i=c(e,t),l=0;l<n.length;l++){var s=d(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"body{height:100vh}.left-navbar{max-width:200px;min-width:200px}.todo-list{width:100%}.btn-add-project{margin:0;padding:0 12px;font-size:21px;border:none}.card-container{width:18rem}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,d=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,d,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t);n(0);const r={addOnClickListener:(e,t,n=null)=>{document.getElementById(e).addEventListener("click",()=>{null!==n?t(n):t()})},addHtmlListItem:e=>{const t=document.createElement("li");for(let n=0;n<e.length;n+=1)t.classList.add(e[n]);return t},addHtmlAnchor:(e,t,n,r)=>{const o=document.createElement("a");for(let t=0;t<e.length;t+=1)o.classList.add(e[t]);return o.href=t,o.innerHTML=n,o.id=r,o},addHtmlButton:(e,t,n,r)=>{const o=document.createElement("button");for(let t=0;t<e.length;t+=1)o.classList.add(e[t]);return o.setAttribute("type",t),o.id=n,o.innerHTML=r,o},addHtmlHeading:(e,t,n)=>{const r=document.createElement("h"+n);for(let t=0;t<e.length;t+=1)r.classList.add(e[t]);return r.innerHTML=t,r},firstChildExists:e=>!!e.childNodes[1],addHtmlDiv:(e,t=null)=>{const n=document.createElement("div");for(let t=0;t<e.length;t+=1)n.classList.add(e[t]);return null!=t&&(n.id=t),n},addHtmlInput:(e,t,n,r,o="")=>{const i=document.createElement("input");for(let t=0;t<e.length;t+=1)i.classList.add(e[t]);return i.id=r,i.setAttribute("type",t),i.setAttribute("placeholder",n),i.value=o,i},hideElement:e=>{document.getElementById(e).style.display="none"},showElement:e=>{document.getElementById(e).style.display="block"},showElementFlex:e=>{document.getElementById(e).style.display="flex"},addHTMLSection:(e,t=null)=>{const n=document.createElement("section");for(let t=0;t<e.length;t+=1)n.classList.add(e[t]);return null!=t&&(n.id=t),n},appendTitle:(e,t)=>{r.firstChildExists(e)?(e.innerHTML="",e.append(t)):e.append(t)},addHtmlSelect:(e,t=null)=>{const n=document.createElement("select");for(let t=0;t<e.length;t+=1)n.classList.add(e[t]);return null!=t&&(n.id=t),n},addHtmlSpan:(e,t="")=>{const n=document.createElement("span");for(let t=0;t<e.length;t+=1)n.classList.add(e[t]);return n.text=t,n}};const o=(e=0,t="",n="",r=1,o=[])=>{const i=e;let a=t,d=n,c=r,l=o;const s=new Date,u=String(s.getDate()).padStart(2,"0"),p=String(s.getMonth()+1).padStart(2,"0");let g=`${String(s.getFullYear())}-${p}-${u}`,m=!1;return{getTitle:()=>a,getDescription:()=>d,getDueDate:()=>g,getPriority:()=>c,getChecklist:()=>l,getComplete:()=>m,setTitle:e=>{a=e},setDescription:e=>{d=e},setDueDate:e=>{g=e},setPriority:e=>{c=e},setChecklist:e=>{l=e},getIndex:()=>i,setComplete:e=>{m=e}}};const i=(e=0,t="Project",n="")=>{let r=n;const i=[],a=e;let d=`${t}-${e}`;return{getTitle:()=>d,getDescription:()=>r,setTitle:e=>{d=e},setDescription:e=>{r=e},listTasks:()=>i,addTask:e=>{i.push(e)},getIndex:()=>a,getTaskByIndex:e=>{let t=0;for(;t<i.length;){if(i[t].getIndex()===e)return i[t];t+=1}return-1},createTask:()=>{let e=0;0!==i.length&&(e=i[i.length-1].getIndex()+1);const t=o(e,`Task ${e} title`,`Task ${e} description`);i.push(t)}}};const a=(()=>{let e=[];return{createProject:()=>{let t=0;0!==e.length&&(t=e[e.length-1].getIndex()+1);const n=i(t);return e.push(n),n},getProjectByIndex:t=>{let n=0;for(;n<e.length;){if(e[n].getIndex()===t)return e[n];n+=1}return-1},getProjectAmount:()=>e.length,saveToStorage:t=>{for(let n=0;n<e.length;n+=1){localStorage.setItem(`${t}-project-${n}-title`,e[n].getTitle()),localStorage.setItem(`${t}-project-${n}-description`,e[n].getDescription()),localStorage.setItem(`${t}-project-${n}-index`,e[n].getIndex());for(let r=0;r<e[n].listTasks().length;r+=1)localStorage.setItem(`${t}-project-${n}-task-${r}-index`,e[n].getTaskByIndex(r).getIndex()),localStorage.setItem(`${t}-project-${n}-task-${r}-title`,e[n].getTaskByIndex(r).getTitle()),localStorage.setItem(`${t}-project-${n}-task-${r}-description`,e[n].getTaskByIndex(r).getDescription()),localStorage.setItem(`${t}-project-${n}-task-${r}-priority`,e[n].getTaskByIndex(r).getPriority()),localStorage.setItem(`${t}-project-${n}-task-${r}-duedate`,e[n].getTaskByIndex(r).getDueDate())}},cleanProject:()=>{e=[]},getProjectArray:()=>e,setProjectArray:t=>e[t]}})();const d=(()=>{const e=(e,t)=>{const n=r.addHtmlDiv(["input-group","pb-3"],`input-title-group-task-${e.getIndex()}-${t.getIndex()}`),o=r.addHtmlInput(["form-control"],"text","Write your task title",`input-title-task-${e.getIndex()}-${t.getIndex()}`,t.getTitle()),i=r.addHtmlButton(["btn","btn-outline-secondary"],"button",`button-save-input-name-group-task-${e.getIndex()}-${t.getIndex()}`,"Save"),a=r.addHtmlDiv(["input-group-append"]);return i.addEventListener("click",()=>{t.setTitle(o.value);document.getElementById(`input-title-group-task-${e.getIndex()}-${t.getIndex()}`).remove(),r.showElement(`task-title-${e.getIndex()}-${t.getIndex()}`);document.getElementById(`task-title-${e.getIndex()}-${t.getIndex()}`).innerHTML=t.getTitle()}),a.append(i),n.append(o),n.append(a),n},t=(e,t)=>{const n=r.addHtmlDiv(["input-group","pb-3"],`input-description-group-task-${e.getIndex()}-${t.getIndex()}`),o=r.addHtmlInput(["form-control"],"text","Write your task description",`input-description-task-${e.getIndex()}-${t.getIndex()}`,t.getDescription()),i=r.addHtmlButton(["btn","btn-outline-secondary"],"button",`button-save-input-description-group-task-${e.getIndex()}-${t.getIndex()}`,"Save"),a=r.addHtmlDiv(["input-group-append"]);return i.addEventListener("click",()=>{t.setDescription(o.value);document.getElementById(`input-description-group-task-${e.getIndex()}-${t.getIndex()}`).remove(),r.showElement(`task-description-${e.getIndex()}-${t.getIndex()}`);document.getElementById(`task-description-${e.getIndex()}-${t.getIndex()}`).innerHTML=t.getDescription()}),a.append(i),n.append(o),n.append(a),n},n=(e,t)=>{const n=r.addHtmlDiv(["input-group","mb-3"]),o=r.addHtmlInput(["w-100"],"date","",`date-input-${e.getIndex()}-${t.getIndex()}`,"");return o.value=t.getDueDate(),n.append(o),o.addEventListener("change",()=>{t.setDueDate(o.value)}),n},o=(e,t)=>{const n=r.addHtmlDiv(["form-group"]),o=r.addHtmlSelect(["form-control"],`select-task-priority-${e.getIndex()}-${t.getIndex()}`),i=document.createElement("option");i.innerHTML="Set the priority of the task",i.selected="selected",o.append(i);const a=document.createElement("option");a.innerHTML="Low Priority",a.value="1",o.append(a);const d=document.createElement("option");d.innerHTML="Medium Priority",d.value="2",o.append(d);const c=document.createElement("option");return c.innerHTML="High Priority",c.value="3",o.append(c),o.selectedIndex=t.getPriority(),n.append(o),o.addEventListener("change",()=>{t.setPriority(Number(o.value));const n=`task-${e.getIndex()}-${t.getIndex()}`,r=document.getElementById(n);1===t.getPriority()&&(r.style.backgroundColor="greenyellow"),2===t.getPriority()&&(r.style.backgroundColor="#ffd9ad"),3===t.getPriority()&&(r.style.backgroundColor="#ffadad")}),n},i=(i,a)=>{const d=r.addHtmlDiv(["card","m-2","card-container"],`task-${i.getIndex()}-${a.getIndex()}`),c=r.addHtmlDiv(["card-body"],0);"1"!==a.getPriority()&&1!==a.getPriority()||(d.style.backgroundColor="greenyellow"),"2"!==a.getPriority()&&2!==a.getPriority()||(d.style.backgroundColor="#ffd9ad"),"3"!==a.getPriority()&&3!==a.getPriority()||(d.style.backgroundColor="#ffadad");const l=r.addHtmlHeading(["card-title"],a.getTitle(),5);l.id=`task-title-${i.getIndex()}-${a.getIndex()}`,l.addEventListener("click",()=>{let t="";t=e(i,a),c.prepend(t),r.hideElement(`task-title-${i.getIndex()}-${a.getIndex()}`)}),c.appendChild(l);const s=r.addHtmlHeading(["card-subtitle","mb-2","text-muted"],a.getDescription(),6);s.id=`task-description-${i.getIndex()}-${a.getIndex()}`,s.addEventListener("click",()=>{let e="";e=t(i,a),c.insertBefore(e,s),r.hideElement(`task-description-${i.getIndex()}-${a.getIndex()}`)}),c.appendChild(s);const u=r.addHtmlDiv(["d-flex","flex-row","justify-content-between","mt-3"]),p=r.addHtmlAnchor(["card-link","m-0","btn","btn-primary"],"#","Complete",0);return p.addEventListener("click",()=>{a.setComplete(!0);const e=`task-${i.getIndex()}-${a.getIndex()}`;document.getElementById(e).remove()}),u.appendChild(p),c.append(o(i,a)),c.append(n(i,a)),c.appendChild(u),d.appendChild(c),d},d=(e,t)=>{e.innerHTML="";for(let n=0;n<t.listTasks().length;n+=1)if(!t.getTaskByIndex(n).getComplete()){const r=i(t,t.getTaskByIndex(n));e.append(r)}},c=e=>{const t=a.getProjectByIndex(e),n=document.getElementById("project-container"),o=r.addHtmlHeading([],t.getTitle(),2);o.id="project-title-"+e,r.appendTitle(n,o);const i=r.addHtmlDiv(["input-group"],"input-name-group-project-"+e),c=r.addHtmlInput(["form-control"],"text","Write your project title","input-project-"+e,t.getTitle());i.append(c);const l=r.addHtmlDiv(["input-group-append"],0),s=r.addHtmlButton(["btn","btn-outline-secondary"],"button","button-save-input-name-group-project-"+e,"Save");l.append(s),i.append(l),n.append(i),r.hideElement(i.id),r.addOnClickListener(o.id,r.showElementFlex,"input-name-group-project-"+e),r.addOnClickListener(o.id,r.hideElement,o.id),r.addOnClickListener(s.id,r.showElement,o.id),r.addOnClickListener(s.id,()=>{t.setTitle(c.value);document.getElementById(o.id).innerHTML=c.value}),o.addEventListener("click",()=>{o.innerHTML=t.getTitle()}),r.addOnClickListener(s.id,()=>{const n=document.getElementById("link-project-"+e);n.innerHTML="",n.innerHTML=t.getTitle()}),r.addOnClickListener(s.id,r.hideElement,i.id);const u=r.addHtmlButton(["btn","btn-success","fa","fa-plus","mt-2"],"button","button-add-task-"+e,"New project task");n.appendChild(u);const p=r.addHTMLSection(["project-wrapper"],"project-wrapper-section"),g=r.addHtmlDiv(["d-flex","flex-wrap","align-items-start"],"section-cards-container");g.id="task-container-project-"+t.getIndex(),p.appendChild(g),n.appendChild(p),u.addEventListener("click",()=>{t.createTask(),d(g,t)})},l=e=>{const t=document.getElementById("project-list"),n=t.childNodes[t.childNodes.length-1];void 0!==n&&n.addEventListener("click",()=>{c(e.getIndex());const t="task-container-project-"+e.getIndex(),n=document.getElementById(t),r=a.getProjectByIndex(e.getIndex());d(n,r)})},s=e=>{const t=r.addHtmlListItem(["nav-item"]),n="link-project-"+e.getIndex(),o=r.addHtmlAnchor(["nav-link"],"#",e.getTitle(),n);t.append(o);document.getElementById("project-list").append(t)},u=()=>a.createProject();return{drawInputFieldTitle:e,drawInputFieldDescription:t,drawDateInput:n,drawCard:i,drawSelectPriority:o,drawProjectButton:s,createClickEventAddProject:()=>{document.getElementById("new-project").addEventListener("click",()=>{const e=a.createProject();s(e),l(e)})},createClickEventProjectItem:l,drawProject:c,updateTasks:d,cleanLocalStorage:()=>{document.getElementById("clear-everything").addEventListener("click",()=>{localStorage.clear(),a.cleanProject(),window.location.reload()})},createProject:u,loadFromStorage:e=>{let t=0;for(;null!=localStorage.getItem(`${e}-project-${t}-index`);){const n=u();s(n),l(n),a.setProjectArray(t).setTitle(localStorage.getItem(`${e}-project-${t}-title`)),a.setProjectArray(t).setDescription(localStorage.getItem(`${e}-project-${t}-description`)),a.setProjectArray(t).getIndex(localStorage.getItem(`${e}-project-${t}-index`));let r=0;for(;null!=localStorage.getItem(`${e}-project-${t}-task-${r}-index`);)a.setProjectArray(t).createTask(),a.setProjectArray(t).getTaskByIndex(r).setTitle(localStorage.getItem(`${e}-project-${t}-task-${r}-title`)),a.setProjectArray(t).getTaskByIndex(r).setDescription(localStorage.getItem(`${e}-project-${t}-task-${r}-description`)),a.setProjectArray(t).getTaskByIndex(r).setPriority(localStorage.getItem(`${e}-project-${t}-task-${r}-priority`)),a.setProjectArray(t).getTaskByIndex(r).setDueDate(localStorage.getItem(`${e}-project-${t}-task-${r}-duedate`)),r+=1;t+=1}for(let e=0;e<a.getProjectAmount;e+=1)c(e)},updateColorPriority:(e,t)=>{const n=`task-${e.getIndex()}-${t.getIndex()}`;console.log(n);const r=document.getElementById(n);1!==t.getPriority()&&"1"!==t.getPriority()||(r.style.backgroundColor="greenyellow"),2!==t.getPriority()&&"2"!==t.getPriority()||(r.style.backgroundColor="#ffd9ad"),3!==t.getPriority()&&"3"!==t.getPriority()||(r.style.backgroundColor="#ffadad")}}})();const c={InitializePage:e=>{if(d.createClickEventAddProject(),d.cleanLocalStorage(),null==localStorage.getItem(e+"-project-0-index")){const e=d.createProject();d.drawProjectButton(e),d.createClickEventProjectItem(e),e.createTask(),d.drawProject(0);const t=document.getElementById("task-container-project-0");d.updateTasks(t,e)}else d.loadFromStorage(e)}};window.onload=function(){c.InitializePage("todoList")},window.addEventListener("beforeunload",()=>{0!==a.getProjectAmount&&a.saveToStorage("todoList")})}]);