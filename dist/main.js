!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),d=[];function a(e){for(var t=-1,n=0;n<d.length;n++)if(d[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],c=n[l]||0,s="".concat(l," ").concat(c);n[l]=c+1;var u=a(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(d[u].references++,d[u].updater(p)):d.push({identifier:s,updater:f(p,t),references:1}),r.push(s)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach(function(e){t.setAttribute(e,r[e])}),"function"==typeof e.insert)e.insert(t);else{var d=i(e.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),d=e.childNodes;d[t]&&e.removeChild(d[t]),d.length?e.insertBefore(i,d[t]):e.appendChild(i)}}var g=null,m=0;function f(e,t){var n,r,o;if(t.singleton){var i=m++;n=g||(g=c(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=c(t),r=function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);d[o].references--}for(var i=l(e,t),c=0;c<n.length;c++){var s=a(n[c]);0===d[s].references&&(d[s].updater(),d.splice(s,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"body{height:100vh}.left-navbar{max-width:200px;min-width:200px}.todo-list{width:100%}.btn-add-project{margin:0;padding:0 12px;font-size:21px;border:none}.card-container{width:18rem}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(d=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(d)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),i=r.sources.map(function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")});return[n].concat(i).concat([o]).join("\n")}var d,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n}).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(o[d]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);n(0);const r=(e=0,t="",n="",r="01/01/1990",o=1,i=[])=>{let d=e,a=t,l=n,c=o,s=i,u=new Date,p=String(u.getDate()).padStart(2,"0"),g=String(u.getMonth()+1).padStart(2,"0"),m=`${String(u.getFullYear())}-${g}-${p}`,f=!1;return{getTitle:()=>a,getDescription:()=>l,getDueDate:()=>m,getPriority:()=>c,getChecklist:()=>s,getComplete:()=>f,setTitle:e=>{a=e},setDescription:e=>{l=e},setDueDate:e=>{m=e},setPriority:e=>{c=e},setChecklist:e=>{s=e},getIndex:()=>d,setComplete:e=>{f=e}}},o=(()=>{const e=e=>{let n=i.getProjectByIndex(e),r=document.getElementById("project-container"),o=d.addHtmlHeading([],n.getTitle(),2);o.id=`project-title-${e}`,d.appendTitle(r,o);let a=d.addHtmlDiv(["input-group"],`input-name-group-project-${e}`),l=d.addHtmlInput(["form-control"],"text","Write your project title",`input-project-${e}`,n.getTitle());a.append(l);let c=d.addHtmlDiv(["input-group-append"],0),s=d.addHtmlButton(["btn","btn-outline-secondary"],"button",`button-save-input-name-group-project-${e}`,"Save");c.append(s),a.append(c),r.append(a),d.hideElement(a.id),d.addOnClickListener(o.id,d.showElementFlex,`input-name-group-project-${e}`),d.addOnClickListener(o.id,d.hideElement,o.id),d.addOnClickListener(s.id,d.showElement,o.id),d.addOnClickListener(s.id,function(){n.setTitle(l.value),document.getElementById(o.id).innerHTML=l.value}),o.addEventListener("click",function(){o.innerHTML=n.getTitle()}),d.addOnClickListener(s.id,function(){let t=document.getElementById(`link-project-${e}`);t.innerHTML="",t.innerHTML=n.getTitle()}),d.addOnClickListener(s.id,d.hideElement,a.id);let u=d.addHtmlButton(["btn","btn-success","fa","fa-plus","mt-2"],"button",`button-add-task-${e}`,"New project task");r.appendChild(u);let p=d.addHTMLSection(["project-wrapper"]),g=d.addHtmlDiv(["d-flex","flex-wrap","align-items-start"],"section-cards-container");g.id=`task-container-project-${n.getIndex()}`,r.appendChild(p),r.appendChild(g),u.addEventListener("click",function(){n.createTask(),t(g,n)})},t=(e,t)=>{e.innerHTML="";for(let r=0;r<t.listTasks().length;r++)if(!t.getTaskByIndex(r).getComplete()){let o=n(t,t.getTaskByIndex(r));e.append(o)}},n=(e,n)=>{let i=d.addHtmlDiv(["card","m-2","card-container"],`task-${e.getIndex()}-${n.getIndex()}`),c=d.addHtmlDiv(["card-body"],0);1==n.getPriority()&&(i.style.backgroundColor="greenyellow"),2==n.getPriority()&&(i.style.backgroundColor="#ffd9ad"),3==n.getPriority()&&(i.style.backgroundColor="#ffadad");let s=d.addHtmlHeading(["card-title"],n.getTitle(),5);s.id=`task-title-${e.getIndex()}-${n.getIndex()}`,s.addEventListener("click",function(){let t=r(e,n);c.prepend(t),d.hideElement(`task-title-${e.getIndex()}-${n.getIndex()}`)}),c.appendChild(s);let u=d.addHtmlHeading(["card-subtitle","mb-2","text-muted"],n.getDescription(),6);u.id=`task-description-${e.getIndex()}-${n.getIndex()}`,u.addEventListener("click",function(){let t=o(e,n);c.insertBefore(t,u),d.hideElement(`task-description-${e.getIndex()}-${n.getIndex()}`)}),c.appendChild(u);let p=d.addHtmlDiv(["d-flex","flex-row","justify-content-between","mt-3"]),g=d.addHtmlAnchor(["card-link","m-0","btn","btn-primary"],"#","Complete",0);return g.addEventListener("click",function(){n.setComplete(!0);let r=document.getElementById(`task-container-project-${e.getIndex()}`);t(r,e)}),p.appendChild(g),c.append(a(e,n)),c.append(l(e,n)),c.appendChild(p),i.appendChild(c),i},r=(e,t)=>{let n=d.addHtmlDiv(["input-group","pb-3"],`input-title-group-task-${e.getIndex()}-${t.getIndex()}`),r=d.addHtmlInput(["form-control"],"text","Write your task title",`input-title-task-${e.getIndex()}-${t.getIndex()}`,t.getTitle()),o=d.addHtmlButton(["btn","btn-outline-secondary"],"button",`button-save-input-name-group-task-${e.getIndex()}-${t.getIndex()}`,"Save"),i=d.addHtmlDiv(["input-group-append"]);return o.addEventListener("click",function(){t.setTitle(r.value),document.getElementById(`input-title-group-task-${e.getIndex()}-${t.getIndex()}`).remove(),d.showElement(`task-title-${e.getIndex()}-${t.getIndex()}`),document.getElementById(`task-title-${e.getIndex()}-${t.getIndex()}`).innerHTML=t.getTitle()}),i.append(o),n.append(r),n.append(i),n},o=(e,t)=>{let n=d.addHtmlDiv(["input-group","pb-3"],`input-description-group-task-${e.getIndex()}-${t.getIndex()}`),r=d.addHtmlInput(["form-control"],"text","Write your task description",`input-description-task-${e.getIndex()}-${t.getIndex()}`,t.getDescription()),o=d.addHtmlButton(["btn","btn-outline-secondary"],"button",`button-save-input-description-group-task-${e.getIndex()}-${t.getIndex()}`,"Save"),i=d.addHtmlDiv(["input-group-append"]);return o.addEventListener("click",function(){t.setDescription(r.value),document.getElementById(`input-description-group-task-${e.getIndex()}-${t.getIndex()}`).remove(),d.showElement(`task-description-${e.getIndex()}-${t.getIndex()}`),document.getElementById(`task-description-${e.getIndex()}-${t.getIndex()}`).innerHTML=t.getDescription()}),i.append(o),n.append(r),n.append(i),n},a=(e,n)=>{let r=d.addHtmlDiv(["form-group"]),o=d.addHtmlSelect(["form-control"],`select-task-priority-${e.getIndex()}-${n.getIndex()}`),i=document.createElement("option");i.innerHTML="Set the priority of the task",i.selected="selected",o.append(i);let a=document.createElement("option");a.innerHTML="Low Priority",a.value="1",o.append(a);let l=document.createElement("option");l.innerHTML="Medium Priority",l.value="2",o.append(l);let c=document.createElement("option");return c.innerHTML="High Priority",c.value="3",o.append(c),o.selectedIndex=n.getPriority(),r.append(o),o.addEventListener("change",function(){n.setPriority(Number(o.value));let r=document.getElementById(`task-container-project-${e.getIndex()}`);t(r,e)}),r},l=(e,t)=>{let n=d.addHtmlDiv(["input-group","mb-3"]),r=d.addHtmlInput(["w-100"],"date","",`date-input-${e.getIndex()}-${t.getIndex()}`,"");return r.value=t.getDueDate(),n.append(r),r.addEventListener("change",function(){t.setDueDate(r.value)}),n},c=n=>{let r=d.addHtmlListItem(["nav-item"]),o=`link-project-${n.getIndex()}`,a=d.addHtmlAnchor(["nav-link"],"#",n.getTitle(),o);r.append(a),document.getElementById("project-list").append(r),d.addOnClickListener(o,function(){e(n.getIndex());let r=document.getElementById(`task-container-project-${n.getIndex()}`),o=i.getProjectByIndex(n.getIndex());t(r,o)})};return{InitializePage:n=>{if(document.getElementById("new-project").addEventListener("click",function(){let e=i.createProject();c(e)}),document.getElementById("clear-everything").addEventListener("click",function(){localStorage.clear(),i.cleanProject(),window.location.reload()}),null==localStorage.getItem(n+"-project-0-index")){c(i.createProject()),i.getProjectByIndex(0).createTask(),e(0);let n=document.getElementById("task-container-project-0"),r=i.getProjectByIndex(0);t(n,r)}else{i.loadFromStorage(n);for(let t=0;t<i.getProjectAmount;t++)e(t)}},drawProjectButton:c,drawProject:e,drawCard:n}})(),i=(()=>{let e=[];const t=()=>{let t=0;0!=e.length&&(t=e[e.length-1].getIndex()+1);let n=((e=0,t="Project",n="",o=[])=>{let i=n,d=[],a=e,l=`${t}-${e}`;return{getTitle:()=>l,getDescription:()=>i,setTitle:e=>{l=e},setDescription:e=>{i=e},listTasks:()=>d,addTask:e=>{d.push(e)},getIndex:()=>a,getTaskByIndex:e=>{let t=0;for(;t<d.length;){if(d[t].getIndex()==e)return d[t];t+=1}return-1},createTask:()=>{let e=0;0!=d.length&&(e=d[d.length-1].getIndex()+1);let t=r(e,`Task ${e} title`,`Task ${e} description`);d.push(t)}}})(t);return e.push(n),n};return{createProject:t,getProjectByIndex:t=>{let n=0;for(;n<e.length;){if(e[n].getIndex()==t)return e[n];n+=1}return-1},getProjectAmount:()=>e.length,loadFromStorage:n=>{let r=0;for(;null!=localStorage.getItem(`${n}-project-${r}-index`);){let i=t();o.drawProjectButton(i),e[r].setTitle(localStorage.getItem(`${n}-project-${r}-title`)),e[r].setDescription(localStorage.getItem(`${n}-project-${r}-description`)),e[r].getIndex(localStorage.getItem(`${n}-project-${r}-index`));let d=0;for(;null!=localStorage.getItem(`${n}-project-${r}-task-${d}-index`);)e[r].createTask(),e[r].getTaskByIndex(d).setTitle(localStorage.getItem(`${n}-project-${r}-task-${d}-title`)),e[r].getTaskByIndex(d).setDescription(localStorage.getItem(`${n}-project-${r}-task-${d}-description`)),e[r].getTaskByIndex(d).setPriority(localStorage.getItem(`${n}-project-${r}-task-${d}-priority`)),e[r].getTaskByIndex(d).setDueDate(localStorage.getItem(`${n}-project-${r}-task-${d}-duedate`)),d+=1;r+=1}},saveToStorage:t=>{for(let n=0;n<e.length;n+=1){localStorage.setItem(`${t}-project-${n}-title`,e[n].getTitle()),localStorage.setItem(`${t}-project-${n}-description`,e[n].getDescription()),localStorage.setItem(`${t}-project-${n}-index`,e[n].getIndex());for(let r=0;r<e[n].listTasks().length;r+=1)localStorage.setItem(`${t}-project-${n}-task-${r}-index`,e[n].getTaskByIndex(r).getIndex()),localStorage.setItem(`${t}-project-${n}-task-${r}-title`,e[n].getTaskByIndex(r).getTitle()),localStorage.setItem(`${t}-project-${n}-task-${r}-description`,e[n].getTaskByIndex(r).getDescription()),localStorage.setItem(`${t}-project-${n}-task-${r}-priority`,e[n].getTaskByIndex(r).getPriority()),localStorage.setItem(`${t}-project-${n}-task-${r}-duedate`,e[n].getTaskByIndex(r).getDueDate())}},cleanProject:()=>{e=[]}}})(),d={addOnClickListener:(e,t,n=null)=>{document.getElementById(e).addEventListener("click",function(){null!=n?t(n):t()})},addHtmlListItem:e=>{let t=document.createElement("li");for(let n=0;n<e.length;n++)t.classList.add(e[n]);return t},addHtmlAnchor:(e,t,n,r)=>{let o=document.createElement("a");for(let t=0;t<e.length;t++)o.classList.add(e[t]);return o.href=t,o.innerHTML=n,o.id=r,o},addHtmlButton:(e,t,n,r)=>{let o=document.createElement("button");for(let t=0;t<e.length;t++)o.classList.add(e[t]);return o.setAttribute("type",t),o.id=n,o.innerHTML=r,o},addHtmlHeading:(e,t,n)=>{let r=document.createElement(`h${n}`);for(let t=0;t<e.length;t++)r.classList.add(e[t]);return r.innerHTML=t,r},firstChildExists:e=>!!e.childNodes[1],addHtmlDiv:(e,t=null)=>{let n=document.createElement("div");for(let t=0;t<e.length;t++)n.classList.add(e[t]);return null!=t&&(n.id=t),n},addHtmlInput:(e,t,n,r,o="")=>{let i=document.createElement("input");for(let t=0;t<e.length;t++)i.classList.add(e[t]);return i.id=r,i.setAttribute("type",t),i.setAttribute("placeholder",n),i.value=o,i},hideElement:e=>{document.getElementById(e).style.display="none"},showElement:e=>{document.getElementById(e).style.display="block"},showElementFlex:e=>{document.getElementById(e).style.display="flex"},addHTMLSection:(e,t=null)=>{let n=document.createElement("section");for(let t=0;t<e.length;t++)n.classList.add(e[t]);return null!=t&&(n.id=t),n},appendTitle:(e,t)=>{d.firstChildExists(e)?(e.innerHTML="",e.append(t)):e.append(t)},addHtmlSelect:(e,t=null)=>{let n=document.createElement("select");for(let t=0;t<e.length;t++)n.classList.add(e[t]);return null!=t&&(n.id=t),n},addHtmlSpan:(e,t="")=>{let n=document.createElement("span");for(let t=0;t<e.length;t++)n.classList.add(e[t]);return n.text=t,n}};window.onload=function(){o.InitializePage("todoList")},window.addEventListener("beforeunload",function(e){0!=i.getProjectAmount&&i.saveToStorage("todoList")})}]);