!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),d=[];function a(e){for(var t=-1,n=0;n<d.length;n++)if(d[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],l=t.base?o[0]+t.base:o[0],c=n[l]||0,s="".concat(l," ").concat(c);n[l]=c+1;var u=a(s),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(d[u].references++,d[u].updater(p)):d.push({identifier:s,updater:I(p,t),references:1}),r.push(s)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var d=o(e.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),d=e.childNodes;d[t]&&e.removeChild(d[t]),d.length?e.insertBefore(o,d[t]):e.appendChild(o)}}function g(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function I(e,t){var n,r,i;if(t.singleton){var o=f++;n=m||(m=c(t)),r=p.bind(null,n,o,!1),i=p.bind(null,n,o,!0)}else n=c(t),r=g.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);d[i].references--}for(var o=l(e,t),c=0;c<n.length;c++){var s=a(n[c]);0===d[s].references&&(d[s].updater(),d.splice(s,1))}n=o}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"body{height:100vh}.left-navbar{max-width:200px;min-width:200px}.todo-list{width:100%}.btn-add-project{margin:0;padding:0 12px;font-size:21px;border:none}.card-container{width:18rem}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(d=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(d)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var d,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(i[d]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);n(0);const r=(e=0,t="",n="",r="01/01/1990",i=1,o=[])=>{let d=e,a=t,l=n,c=i,s=o,u=new Date,p=String(u.getDate()).padStart(2,"0"),g=String(u.getMonth()+1).padStart(2,"0"),m=`${String(u.getFullYear())}-${g}-${p}`,f=!1;return{getTitle:()=>a,getDescription:()=>l,getDueDate:()=>m,getPriority:()=>c,getChecklist:()=>s,getComplete:()=>f,setTitle:e=>{a=e},setDescription:e=>{l=e},setDueDate:e=>{m=e},setPriority:e=>{c=e},setChecklist:e=>{s=e},getIndex:()=>d,setComplete:e=>{f=e}}},i=(()=>{const e=e=>{let n=o.getProjectByIndex(e),r=document.getElementById("project-container"),i=d.addHtmlHeading([],n.getTitle(),2);i.id="project-title-"+e,d.appendTitle(r,i);let a=d.addHtmlDiv(["input-group"],"input-name-group-project-"+e),l=d.addHtmlInput(["form-control"],"text","Write your project title","input-project-"+e,n.getTitle());a.append(l);let c=d.addHtmlDiv(["input-group-append"],0),s=d.addHtmlButton(["btn","btn-outline-secondary"],"button","button-save-input-name-group-project-"+e,"Save");c.append(s),a.append(c),r.append(a),d.hideElement(a.id),d.addOnClickListener(i.id,d.showElementFlex,"input-name-group-project-"+e),d.addOnClickListener(i.id,d.hideElement,i.id),d.addOnClickListener(s.id,d.showElement,i.id),d.addOnClickListener(s.id,(function(){n.setTitle(l.value),document.getElementById(i.id).innerHTML=l.value})),i.addEventListener("click",(function(){i.innerHTML=n.getTitle()})),d.addOnClickListener(s.id,(function(){let t=document.getElementById("link-project-"+e);t.innerHTML="",t.innerHTML=n.getTitle()})),d.addOnClickListener(s.id,d.hideElement,a.id);let u=d.addHtmlButton(["btn","btn-success","fa","fa-plus","mt-2"],"button","button-add-task-"+e,"New project task");r.appendChild(u);let p=d.addHTMLSection(["project-wrapper"]),g=d.addHtmlDiv(["d-flex","flex-wrap","align-items-start"],"section-cards-container");g.id="task-container-project-"+n.getIndex(),r.appendChild(p),r.appendChild(g),u.addEventListener("click",(function(){n.createTask(),t(g,n)}))},t=(e,t)=>{e.innerHTML="";for(let r=0;r<t.listTasks().length;r++)if(!t.getTaskByIndex(r).getComplete()){let i=n(t,t.getTaskByIndex(r));e.append(i)}},n=(e,n)=>{let o=d.addHtmlDiv(["card","m-2","card-container"],"task-"+n.getIndex()),c=d.addHtmlDiv(["card-body"],0),s=d.addHtmlHeading(["card-title"],n.getTitle(),5);s.id=`task-title-${e.getIndex()}-${n.getIndex()}`,s.addEventListener("click",(function(){let t=r(e,n);c.prepend(t),d.hideElement(`task-title-${e.getIndex()}-${n.getIndex()}`)})),c.appendChild(s);let u=d.addHtmlHeading(["card-subtitle","mb-2","text-muted"],n.getDescription(),6);u.id=`task-description-${e.getIndex()}-${n.getIndex()}`,u.addEventListener("click",(function(){let t=i(e,n);c.insertBefore(t,u),d.hideElement(`task-description-${e.getIndex()}-${n.getIndex()}`)})),c.appendChild(u);let p=d.addHtmlDiv(["d-flex","flex-row","justify-content-between","mt-3"]),g=d.addHtmlAnchor(["card-link","m-0","btn","btn-primary"],"#","Complete",0);return g.addEventListener("click",(function(){n.setComplete(!0);let r=document.getElementById("task-container-project-"+e.getIndex());t(r,e)})),p.appendChild(g),c.append(a(e,n)),c.append(l(e,n)),c.appendChild(p),o.appendChild(c),o},r=(e,t)=>{let n=d.addHtmlDiv(["input-group","pb-3"],`input-title-group-task-${e.getIndex()}-${t.getIndex()}`),r=d.addHtmlInput(["form-control"],"text","Write your task title",`input-title-task-${e.getIndex()}-${t.getIndex()}`,t.getTitle()),i=d.addHtmlButton(["btn","btn-outline-secondary"],"button",`button-save-input-name-group-task-${e.getIndex()}-${t.getIndex()}`,"Save"),o=d.addHtmlDiv(["input-group-append"]);return i.addEventListener("click",(function(){t.setTitle(r.value),document.getElementById(`input-title-group-task-${e.getIndex()}-${t.getIndex()}`).remove(),d.showElement(`task-title-${e.getIndex()}-${t.getIndex()}`),document.getElementById(`task-title-${e.getIndex()}-${t.getIndex()}`).innerHTML=t.getTitle()})),o.append(i),n.append(r),n.append(o),n},i=(e,t)=>{let n=d.addHtmlDiv(["input-group","pb-3"],`input-description-group-task-${e.getIndex()}-${t.getIndex()}`),r=d.addHtmlInput(["form-control"],"text","Write your task description",`input-description-task-${e.getIndex()}-${t.getIndex()}`,t.getDescription()),i=d.addHtmlButton(["btn","btn-outline-secondary"],"button",`button-save-input-description-group-task-${e.getIndex()}-${t.getIndex()}`,"Save"),o=d.addHtmlDiv(["input-group-append"]);return i.addEventListener("click",(function(){t.setDescription(r.value),document.getElementById(`input-description-group-task-${e.getIndex()}-${t.getIndex()}`).remove(),d.showElement(`task-description-${e.getIndex()}-${t.getIndex()}`),document.getElementById(`task-description-${e.getIndex()}-${t.getIndex()}`).innerHTML=t.getDescription()})),o.append(i),n.append(r),n.append(o),n},a=(e,t)=>{let n=d.addHtmlDiv(["form-group"]),r=d.addHtmlSelect(["form-control"],`select-task-priority-${e.getIndex()}-${t.getIndex()}`),i=document.createElement("option");i.innerHTML="Set the priority of the task",i.selected="selected",r.append(i);let o=document.createElement("option");o.innerHTML="Low",o.value="1",r.append(o);let a=document.createElement("option");a.innerHTML="Medium",a.value="2",r.append(a);let l=document.createElement("option");return l.innerHTML="High",l.value="3",r.append(l),n.append(r),r.addEventListener("change",(function(){t.setPriority(Number(r.value))})),n},l=(e,t)=>{let n=d.addHtmlDiv(["input-group","mb-3"]),r=d.addHtmlInput(["w-100"],"date","",`date-input-${e.getIndex()}-${t.getIndex()}`,"");return r.value=t.getDueDate(),n.append(r),r.addEventListener("change",(function(){t.setDueDate(r.value)})),n},c=n=>{let r=d.addHtmlListItem(["nav-item"]),i="link-project-"+n.getIndex(),a=d.addHtmlAnchor(["nav-link"],"#",n.getTitle(),i);r.append(a),document.getElementById("project-list").append(r),d.addOnClickListener(i,(function(){e(n.getIndex());let r=document.getElementById("task-container-project-"+n.getIndex()),i=o.getProjectByIndex(n.getIndex());t(r,i)}))};return{InitializePage:()=>{if(document.getElementById("new-project").addEventListener("click",(function(){let e=o.createProject();c(e)})),document.getElementById("save-everything").addEventListener("click",(function(){o.saveToStorage("todoList")})),null==localStorage.getItem("todoList-project-0-index")){c(o.createProject()),o.getProjectByIndex(0).createTask(),e(0);let n=document.getElementById("task-container-project-0"),r=o.getProjectByIndex(0);t(n,r)}else{o.loadFromStorage("todoList");for(let t=0;t<o.getProjectAmount;t++)e(t)}},drawProjectButton:c,drawProject:e,drawCard:n}})(),o=(()=>{const e=[],t=()=>{let t=0;0!=e.length&&(t=e[e.length-1].getIndex()+1);let n=((e=0,t="Project",n="",i=[])=>{let o=n,d=[],a=e,l=`${t}-${e}`;return{getTitle:()=>l,getDescription:()=>o,setTitle:e=>{l=e},setDescription:e=>{o=e},listTasks:()=>d,addTask:e=>{d.push(e)},getIndex:()=>a,getTaskByIndex:e=>{let t=0;for(;t<d.length;){if(d[t].getIndex()==e)return d[t];t+=1}return-1},createTask:()=>{let e=0;0!=d.length&&(e=d[d.length-1].getIndex()+1);let t=r(e,`Task ${e} title`,`Task ${e} description`);d.push(t)}}})(t);return e.push(n),n};return{createProject:t,getProjectByIndex:t=>{let n=0;for(;n<e.length;){if(e[n].getIndex()==t)return e[n];n+=1}return-1},getProjectAmount:()=>e.length,loadFromStorage:n=>{let r=0;for(;null!=localStorage.getItem(`${n}-project-${r}-index`);){let o=t();i.drawProjectButton(o),e[r].setTitle(localStorage.getItem(`${n}-project-${r}-title`)),e[r].setDescription(localStorage.getItem(`${n}-project-${r}-description`)),e[r].getIndex(localStorage.getItem(`${n}-project-${r}-index`));let d=0;for(;null!=localStorage.getItem(`${n}-project-${r}-task-${d}-index`);)e[r].createTask(),e[r].getTaskByIndex(d).setTitle(localStorage.getItem(`${n}-project-${r}-task-${d}-title`)),e[r].getTaskByIndex(d).setDescription(localStorage.getItem(`${n}-project-${r}-task-${d}-description`)),e[r].getTaskByIndex(d).setPriority(localStorage.getItem(`${n}-project-${r}-task-${d}-priority`)),e[r].getTaskByIndex(d).setDueDate(localStorage.getItem(`${n}-project-${r}-task-${d}-duedate`)),d+=1;r+=1}},saveToStorage:t=>{for(let n=0;n<e.length;n+=1){localStorage.setItem(`${t}-project-${n}-title`,e[n].getTitle()),localStorage.setItem(`${t}-project-${n}-description`,e[n].getDescription()),localStorage.setItem(`${t}-project-${n}-index`,e[n].getIndex());for(let r=0;r<e[n].listTasks().length;r+=1)localStorage.setItem(`${t}-project-${n}-task-${r}-index`,e[n].getTaskByIndex(r).getIndex()),localStorage.setItem(`${t}-project-${n}-task-${r}-title`,e[n].getTaskByIndex(r).getTitle()),localStorage.setItem(`${t}-project-${n}-task-${r}-description`,e[n].getTaskByIndex(r).getDescription()),localStorage.setItem(`${t}-project-${n}-task-${r}-priority`,e[n].getTaskByIndex(r).getPriority()),localStorage.setItem(`${t}-project-${n}-task-${r}-duedate`,e[n].getTaskByIndex(r).getDueDate())}}}})(),d={addOnClickListener:(e,t,n=null)=>{document.getElementById(e).addEventListener("click",(function(){null!=n?t(n):t()}))},addHtmlListItem:e=>{let t=document.createElement("li");for(let n=0;n<e.length;n++)t.classList.add(e[n]);return t},addHtmlAnchor:(e,t,n,r)=>{let i=document.createElement("a");for(let t=0;t<e.length;t++)i.classList.add(e[t]);return i.href=t,i.innerHTML=n,i.id=r,i},addHtmlButton:(e,t,n,r)=>{let i=document.createElement("button");for(let t=0;t<e.length;t++)i.classList.add(e[t]);return i.setAttribute("type",t),i.id=n,i.innerHTML=r,i},addHtmlHeading:(e,t,n)=>{let r=document.createElement("h"+n);for(let t=0;t<e.length;t++)r.classList.add(e[t]);return r.innerHTML=t,r},firstChildExists:e=>!!e.childNodes[1],addHtmlDiv:(e,t=null)=>{let n=document.createElement("div");for(let t=0;t<e.length;t++)n.classList.add(e[t]);return null!=t&&(n.id=t),n},addHtmlInput:(e,t,n,r,i="")=>{let o=document.createElement("input");for(let t=0;t<e.length;t++)o.classList.add(e[t]);return o.id=r,o.setAttribute("type",t),o.setAttribute("placeholder",n),o.value=i,o},hideElement:e=>{document.getElementById(e).style.display="none"},showElement:e=>{document.getElementById(e).style.display="block"},showElementFlex:e=>{document.getElementById(e).style.display="flex"},addHTMLSection:(e,t=null)=>{let n=document.createElement("section");for(let t=0;t<e.length;t++)n.classList.add(e[t]);return null!=t&&(n.id=t),n},appendTitle:(e,t)=>{d.firstChildExists(e)?(e.innerHTML="",e.append(t)):e.append(t)},addHtmlSelect:(e,t=null)=>{let n=document.createElement("select");for(let t=0;t<e.length;t++)n.classList.add(e[t]);return null!=t&&(n.id=t),n},addHtmlSpan:(e,t="")=>{let n=document.createElement("span");for(let t=0;t<e.length;t++)n.classList.add(e[t]);return n.text=t,n}};window.onload=function(){i.InitializePage()},window.onbeforeunload=function(e){alert("Hello! I am an alert box!!")}}]);