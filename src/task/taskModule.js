import { taskFactory } from '../task/taskFactory'

export const taskModule = (() => {  
  const taskArray = [];

  const createTask = () => {
    
    let newTask = taskFactory();
    taskArray.push(newTask);    
    console.log(taskArray);
  };
  return { createTask };
})();