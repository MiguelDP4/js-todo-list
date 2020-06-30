import { projectFactory } from './projectFactory';
// import { CreateDomElement } from '../helpers/createDomElements';
// import { ConfigurePage } from '../helpers/configurePage';

export const projectModule = (() => {
  let projectArray = [];

  const createProject = () => {
    let newIndex = 0;
    if (projectArray.length !== 0) {
      newIndex = projectArray[projectArray.length - 1].getIndex() + 1;
    }
    const newProject = projectFactory(newIndex);
    projectArray.push(newProject);
    return newProject;
  };

  const getProjectArray = () => projectArray;
  const setProjectArray = (i) => projectArray[i];

  const getProjectByIndex = (index) => {
    let i = 0;
    while (i < projectArray.length) {
      if (projectArray[i].getIndex() === index) {
        return projectArray[i];
      }
      i += 1;
    }
    return -1;
  };

  const getProjectAmount = () => projectArray.length;

  const cleanProject = () => {
    projectArray = [];
  };

  const saveToStorage = (key) => {
    for (let i = 0; i < projectArray.length; i += 1) {
      localStorage.setItem(`${key}-project-${i}-title`, projectArray[i].getTitle());
      localStorage.setItem(`${key}-project-${i}-description`, projectArray[i].getDescription());
      localStorage.setItem(`${key}-project-${i}-index`, projectArray[i].getIndex());
      for (let j = 0; j < projectArray[i].listTasks().length; j += 1) {
        localStorage.setItem(`${key}-project-${i}-task-${j}-index`, projectArray[i].getTaskByIndex(j).getIndex());
        localStorage.setItem(`${key}-project-${i}-task-${j}-title`, projectArray[i].getTaskByIndex(j).getTitle());
        localStorage.setItem(`${key}-project-${i}-task-${j}-description`, projectArray[i].getTaskByIndex(j).getDescription());
        localStorage.setItem(`${key}-project-${i}-task-${j}-priority`, projectArray[i].getTaskByIndex(j).getPriority());
        localStorage.setItem(`${key}-project-${i}-task-${j}-duedate`, projectArray[i].getTaskByIndex(j).getDueDate());
        localStorage.setItem(`${key}-project-${i}-task-${j}-complete`, projectArray[i].getTaskByIndex(j).getComplete());
      }
    }
  };
  return {
    createProject,
    getProjectByIndex,
    getProjectAmount,
    saveToStorage,
    cleanProject,
    getProjectArray,
    setProjectArray,
  };
})();

export default projectModule;