import { projectFactory } from '../project/projectFactory'
import { taskFactory } from '../task/taskFactory'
import { ConfigurePage } from '../helpers/configurePage';

export const projectModule = (() => {
  
  const projectArray = [];
  
  const createProject = () => {
    let newIndex = 0;
    if(projectArray.length != 0) {
      newIndex = projectArray[projectArray.length-1].getIndex()+1;
    }
    let newProject = projectFactory(newIndex);
    projectArray.push(newProject);
    ConfigurePage.drawProjectButton(newProject);
  };

  const getProjectByIndex = (index) => {
    let i = 0;
    while(i < projectArray.length){
      if(projectArray[i].getIndex() == index){
        return projectArray[i];
      }
      i+=1;
    }
    return -1;
  };

  const getProjectAmount = () => {
    return projectArray.length;
  };

  const loadFromStorage = (key) => {
    projectArray = localStorage.getItem(key);
  };

  const saveToStorage = (key) => {
    localStorage.setItem(key, projectArray);
  }
  return { createProject, getProjectByIndex, getProjectAmount, loadFromStorage, saveToStorage };
})();