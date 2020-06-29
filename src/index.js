import './style.scss';
import { DomModule } from './helpers/domManipulation';
import { ConfigurePage } from './helpers/configurePage';
import { projectModule } from './project/projectModule';

window.onload = function () {
  ConfigurePage.InitializePage('todoList');
};


//window.BeforeUnloadEvent = function (){
//  
//};

//window.addEventListener('beforeunload', function (e) {
//  alert("Hello! I am an alert box!!");
//  e.preventDefault();
//  e.returnValue = '';
//}); 