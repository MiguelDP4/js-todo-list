import { projectFactory } from './projectFactory'

export const projectModule = (() => {
  const projectArray = [];
  const createProject = () => {
    let newProject = projectFactory();
    projectArray.push(newProject);
    console.log(projectArray);
  };
  return { createProject };
})();