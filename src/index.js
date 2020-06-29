import './style.scss';
import { DomModule } from './helpers/domManipulation';
import { ConfigurePage } from './helpers/configurePage';
import { projectModule } from './project/projectModule';

window.onload = function () {
  let keyStorage = 'todoList';
  ConfigurePage.InitializePage(keyStorage);

  window.addEventListener("beforeunload", function(event) {  
    projectModule.saveToStorage(keyStorage);    
  });
};

