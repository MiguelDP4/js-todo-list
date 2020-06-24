import { projectFactory } from '../project/projectFactory'
import { taskFactory } from '../task/taskFactory'

export const projectModule = (() => {
  
  const projectArray = [];
  const createProject = () => {
    
    let newProject = projectFactory();
    let newTask = taskFactory("Walk");
    projectArray.push(newProject);    
    projectArray[0].addTask(newTask);
    console.log(projectArray[0].listTasks()[0].getTitle());
  };
  return { createProject };
})();