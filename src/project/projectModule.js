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
    ConfigurePage.drawProject(newProject);
  };
  return { createProject };
})();