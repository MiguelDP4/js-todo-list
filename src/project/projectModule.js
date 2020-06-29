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
    return newProject;
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
    let i = 0;
    while(localStorage.getItem(`${key}-project-${i}-index`) != null){
      let newProject = createProject();
      ConfigurePage.drawProjectButton(newProject);
      projectArray[i].setTitle(localStorage.getItem(`${key}-project-${i}-title`));
      projectArray[i].setDescription(localStorage.getItem(`${key}-project-${i}-description`));
      projectArray[i].getIndex(localStorage.getItem(`${key}-project-${i}-index`));
      let j = 0;
      while(localStorage.getItem(`${key}-project-${i}-task-${j}-index`) != null) {
        projectArray[i].createTask();
        projectArray[i].getTaskByIndex(j).setTitle(localStorage.getItem(`${key}-project-${i}-task-${j}-title`));
        projectArray[i].getTaskByIndex(j).setDescription(localStorage.getItem(`${key}-project-${i}-task-${j}-description`));
        projectArray[i].getTaskByIndex(j).setPriority(localStorage.getItem(`${key}-project-${i}-task-${j}-priority`));
        projectArray[i].getTaskByIndex(j).setDueDate(localStorage.getItem(`${key}-project-${i}-task-${j}-duedate`));
        j += 1;
      }
      i += 1;
    }
  };

  const saveToStorage = (key) => {
    for(let i = 0; i < projectArray.length; i+= 1){
      localStorage.setItem(`${key}-project-${i}-title`, projectArray[i].getTitle());
      localStorage.setItem(`${key}-project-${i}-description`, projectArray[i].getDescription());
      localStorage.setItem(`${key}-project-${i}-index`, projectArray[i].getIndex());
      for(let j = 0; j < projectArray[i].listTasks().length; j += 1){
        localStorage.setItem(`${key}-project-${i}-task-${j}-index`, projectArray[i].getTaskByIndex(j).getIndex());
        localStorage.setItem(`${key}-project-${i}-task-${j}-title`, projectArray[i].getTaskByIndex(j).getTitle());
        localStorage.setItem(`${key}-project-${i}-task-${j}-description`, projectArray[i].getTaskByIndex(j).getDescription());
        localStorage.setItem(`${key}-project-${i}-task-${j}-priority`, projectArray[i].getTaskByIndex(j).getPriority());
        localStorage.setItem(`${key}-project-${i}-task-${j}-duedate`, projectArray[i].getTaskByIndex(j).getDueDate());
      }
    }
  }
  return { createProject, getProjectByIndex, getProjectAmount, loadFromStorage, saveToStorage };
})();