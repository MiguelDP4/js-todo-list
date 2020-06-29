import './style.scss';
import { DomModule } from './helpers/domManipulation';
import { ConfigurePage } from './helpers/configurePage';
import { projectModule } from './project/projectModule';

let keyStorage = 'todoList';

window.onload = function () {
  ConfigurePage.InitializePage(keyStorage);
};

window.addEventListener("beforeunload", function(event) {
  if(projectModule.getProjectAmount != 0)
    projectModule.saveToStorage(keyStorage);    
});