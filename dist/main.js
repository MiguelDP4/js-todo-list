!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var d={insert:"head",singleton:!1};r(i,d);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},d=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],i=0;i<e.length;i++){var d=e[i],l=t.base?d[0]+t.base:d[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var s=a(u),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==s?(o[s].references++,o[s].updater(p)):o.push({identifier:u,updater:h(p,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=d(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,s=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,i);else{var d=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(d,o[t]):e.appendChild(d)}}function g(e,t,n){var r=n.css,i=n.media,d=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),d&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function h(e,t){var n,r,i;if(t.singleton){var d=f++;n=m||(m=c(t)),r=p.bind(null,n,d,!1),i=p.bind(null,n,d,!0)}else n=c(t),r=g.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var d=l(e,t),c=0;c<n.length;c++){var u=a(n[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=d}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"body{height:100vh}.left-navbar{max-width:200px;min-width:200px}.todo-list{width:100%}.btn-add-project{margin:0;padding:0 12px;font-size:21px;border:none}.card-container{width:18rem}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),d=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(d).concat([i]).join("\n")}var o,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var d=0;d<this.length;d++){var o=this[d][0];null!=o&&(i[o]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);n(0);const r=(e=0,t="",n="",r="01/01/1990",i=1,d=[])=>{let o=e,a=t,l=n,c=i,u=d,s=new Date,p=String(s.getDate()).padStart(2,"0"),g=String(s.getMonth()+1).padStart(2,"0"),m=`${String(s.getFullYear())}-${g}-${p}`;return{getTitle:()=>a,getDescription:()=>l,getDueDate:()=>m,getPriority:()=>c,getChecklist:()=>u,setTitle:e=>{a=e},setDescription:e=>{l=e},setDueDate:e=>{m=e},setPriority:e=>{c=e},setChecklist:e=>{u=e},getIndex:()=>o}},i=(()=>{const e=e=>{let n=d.getProjectByIndex(e),r=document.getElementById("project-container"),i=o.addHtmlHeading([],n.getTitle(),2);i.id="project-title-"+e,o.appendTitle(r,i);let a=o.addHtmlDiv(["input-group"],"input-name-group-project-"+e),l=o.addHtmlInput(["form-control"],"text","Write your project title","input-project-"+e,n.getTitle());a.append(l);let c=o.addHtmlDiv(["input-group-append"],0),u=o.addHtmlButton(["btn","btn-outline-secondary"],"button","button-save-input-name-group-project-"+e,"Save");c.append(u),a.append(c),r.append(a),o.hideElement(a.id),o.addOnClickListener(i.id,o.showElementFlex,"input-name-group-project-"+e),o.addOnClickListener(i.id,o.hideElement,i.id),o.addOnClickListener(u.id,o.showElement,i.id),o.addOnClickListener(u.id,(function(){n.setTitle(l.value),document.getElementById(i.id).innerHTML=l.value})),i.addEventListener("click",(function(){i.innerHTML=n.getTitle()})),o.addOnClickListener(u.id,(function(){let t=document.getElementById("link-project-"+e);t.innerHTML="",t.innerHTML=n.getTitle()})),o.addOnClickListener(u.id,o.hideElement,a.id);let s=o.addHtmlButton(["btn","btn-success","fa","fa-plus","mt-2"],"button","button-add-task-"+e,"New project task");r.appendChild(s);let p=o.addHTMLSection(["project-wrapper"]),g=o.addHtmlDiv(["d-flex","flex-wrap","align-items-start"],"section-cards-container");g.id="task-container-project-"+n.getIndex(),r.appendChild(p),r.appendChild(g),s.addEventListener("click",(function(){n.createTask(),t(g,n)}))},t=(e,t)=>{e.innerHTML="";for(let r=0;r<t.listTasks().length;r++){let i=n(t,t.getTaskByIndex(r));e.append(i)}},n=(e,t)=>{let n=o.addHtmlDiv(["card","m-2","card-container"],"task-"),d=o.addHtmlDiv(["card-body"],0),c=o.addHtmlHeading(["card-title"],t.getTitle(),5);c.id=`task-title-${e.getIndex()}-${t.getIndex()}`,c.addEventListener("click",(function(){let n=r(e,t);d.prepend(n),o.hideElement(`task-title-${e.getIndex()}-${t.getIndex()}`)})),d.appendChild(c);let u=o.addHtmlHeading(["card-subtitle","mb-2","text-muted"],t.getDescription(),6);u.id=`task-description-${e.getIndex()}-${t.getIndex()}`,u.addEventListener("click",(function(){let n=i(e,t);d.insertBefore(n,u),o.hideElement(`task-description-${e.getIndex()}-${t.getIndex()}`)})),d.appendChild(u);let s=o.addHtmlDiv(["d-flex","flex-row","justify-content-between","mt-3"]);return s.appendChild(o.addHtmlAnchor(["card-link","m-0","btn","btn-primary"],"#","Complete",0)),s.appendChild(o.addHtmlAnchor(["card-link","m-0","btn","btn-danger"],"#","Delete",0)),d.append(a(e,t)),d.append(l(e,t)),d.appendChild(s),n.appendChild(d),n},r=(e,t)=>{let n=o.addHtmlDiv(["input-group","pb-3"],`input-title-group-task-${e.getIndex()}-${t.getIndex()}`),r=o.addHtmlInput(["form-control"],"text","Write your task title",`input-title-task-${e.getIndex()}-${t.getIndex()}`,t.getTitle()),i=o.addHtmlButton(["btn","btn-outline-secondary"],"button",`button-save-input-name-group-task-${e.getIndex()}-${t.getIndex()}`,"Save"),d=o.addHtmlDiv(["input-group-append"]);return i.addEventListener("click",(function(){t.setTitle(r.value),document.getElementById(`input-title-group-task-${e.getIndex()}-${t.getIndex()}`).remove(),o.showElement(`task-title-${e.getIndex()}-${t.getIndex()}`),document.getElementById(`task-title-${e.getIndex()}-${t.getIndex()}`).innerHTML=t.getTitle()})),d.append(i),n.append(r),n.append(d),n},i=(e,t)=>{let n=o.addHtmlDiv(["input-group","pb-3"],`input-description-group-task-${e.getIndex()}-${t.getIndex()}`),r=o.addHtmlInput(["form-control"],"text","Write your task description",`input-description-task-${e.getIndex()}-${t.getIndex()}`,t.getDescription()),i=o.addHtmlButton(["btn","btn-outline-secondary"],"button",`button-save-input-description-group-task-${e.getIndex()}-${t.getIndex()}`,"Save"),d=o.addHtmlDiv(["input-group-append"]);return i.addEventListener("click",(function(){t.setDescription(r.value),document.getElementById(`input-description-group-task-${e.getIndex()}-${t.getIndex()}`).remove(),o.showElement(`task-description-${e.getIndex()}-${t.getIndex()}`),document.getElementById(`task-description-${e.getIndex()}-${t.getIndex()}`).innerHTML=t.getDescription()})),d.append(i),n.append(r),n.append(d),n},a=(e,t)=>{let n=o.addHtmlDiv(["form-group"]),r=o.addHtmlSelect(["form-control"],`select-task-priority-${e.getIndex()}-${t.getIndex()}`),i=document.createElement("option");i.innerHTML="Set the priority of the task",i.selected="selected",r.append(i);let d=document.createElement("option");d.innerHTML="Low",d.value="1",r.append(d);let a=document.createElement("option");a.innerHTML="Medium",a.value="2",r.append(a);let l=document.createElement("option");return l.innerHTML="High",l.value="3",r.append(l),n.append(r),r.addEventListener("change",(function(){t.setPriority(Number(r.value))})),n},l=(e,t)=>{let n=o.addHtmlDiv(["input-group","mb-3"]),r=o.addHtmlInput(["w-100"],"date","",`date-input-${e.getIndex()}-${t.getIndex()}`,"");return console.log(t.getDueDate()),r.value=t.getDueDate(),n.append(r),r.addEventListener("change",(function(){t.setDueDate(r.value),console.log(t.getDueDate())})),n};return{InitializePage:()=>{if(o.addOnClickListener("new-project",d.createProject),document.getElementById("save-everything").addEventListener("click",(function(){d.saveToStorage("todoList")})),null==localStorage.getItem("todoList")){d.createProject(),d.getProjectByIndex(0).createTask(),e(0);let n=document.getElementById("task-container-project-0"),r=d.getProjectByIndex(0);t(n,r)}else d.loadFromStorage("todoList")},drawProjectButton:n=>{let r=o.addHtmlListItem(["nav-item"]),i="link-project-"+n.getIndex(),a=o.addHtmlAnchor(["nav-link"],"#",n.getTitle(),i);r.append(a),document.getElementById("project-list").append(r),o.addOnClickListener(i,(function(){e(n.getIndex());let r=document.getElementById("task-container-project-"+n.getIndex()),i=d.getProjectByIndex(n.getIndex());t(r,i)}))},drawProject:e,drawCard:n}})(),d=(()=>{const e=[];return{createProject:()=>{let t=0;0!=e.length&&(t=e[e.length-1].getIndex()+1);let n=((e=0,t="Project",n="",i=[])=>{let d=n,o=[],a=e,l=`${t}-${e}`;return{getTitle:()=>l,getDescription:()=>d,setTitle:e=>{l=e},setDescription:e=>{d=e},listTasks:()=>o,addTask:e=>{o.push(e)},getIndex:()=>a,getTaskByIndex:e=>{let t=0;for(;t<o.length;){if(o[t].getIndex()==e)return o[t];t+=1}return-1},createTask:()=>{let e=0;0!=o.length&&(e=o[o.length-1].getIndex()+1);let t=r(e,`Task ${e} title`,`Task ${e} description`);console.log(t.getTitle()),o.push(t)}}})(t);e.push(n),i.drawProjectButton(n)},getProjectByIndex:t=>{let n=0;for(;n<e.length;){if(e[n].getIndex()==t)return e[n];n+=1}return-1},getProjectAmount:()=>e.length,loadFromStorage:t=>{e=localStorage.getItem(t)},saveToStorage:t=>{localStorage.setItem(t,e)}}})(),o={addOnClickListener:(e,t,n=null)=>{document.getElementById(e).addEventListener("click",(function(){null!=n?t(n):t()}))},addHtmlListItem:e=>{let t=document.createElement("li");for(let n=0;n<e.length;n++)t.classList.add(e[n]);return t},addHtmlAnchor:(e,t,n,r)=>{let i=document.createElement("a");for(let t=0;t<e.length;t++)i.classList.add(e[t]);return i.href=t,i.innerHTML=n,i.id=r,i},addHtmlButton:(e,t,n,r)=>{let i=document.createElement("button");for(let t=0;t<e.length;t++)i.classList.add(e[t]);return i.setAttribute("type",t),i.id=n,i.innerHTML=r,i},addHtmlHeading:(e,t,n)=>{let r=document.createElement("h"+n);for(let t=0;t<e.length;t++)r.classList.add(e[t]);return r.innerHTML=t,r},firstChildExists:e=>!!e.childNodes[1],addHtmlDiv:(e,t=null)=>{let n=document.createElement("div");for(let t=0;t<e.length;t++)n.classList.add(e[t]);return null!=t&&(n.id=t),n},addHtmlInput:(e,t,n,r,i="")=>{let d=document.createElement("input");for(let t=0;t<e.length;t++)d.classList.add(e[t]);return d.id=r,d.setAttribute("type",t),d.setAttribute("placeholder",n),d.value=i,d},hideElement:e=>{document.getElementById(e).style.display="none"},showElement:e=>{document.getElementById(e).style.display="block"},showElementFlex:e=>{document.getElementById(e).style.display="flex"},addHTMLSection:(e,t=null)=>{let n=document.createElement("section");for(let t=0;t<e.length;t++)n.classList.add(e[t]);return null!=t&&(n.id=t),n},appendTitle:(e,t)=>{o.firstChildExists(e)?(e.innerHTML="",e.append(t)):e.append(t)},addHtmlSelect:(e,t=null)=>{let n=document.createElement("select");for(let t=0;t<e.length;t++)n.classList.add(e[t]);return null!=t&&(n.id=t),n},addHtmlSpan:(e,t="")=>{let n=document.createElement("span");for(let t=0;t<e.length;t++)n.classList.add(e[t]);return n.text=t,n}};window.onload=function(){i.InitializePage()}}]);