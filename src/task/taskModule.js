import { taskFactory } from '../task/taskFactory'

export const taskModule = (() => {  

  const createTask = () => {
    let newIndex = 0;
    if(taskArray.length != 0) {
      newIndex = taskArray[taskArray.length-1].getIndex()+1;
    }
    let newTask = taskFactory(newIndex);
    taskArray.push(newTask);
  };

  const getTaskArray = () => { return taskArray; }
  return { createTask,
           getTaskArray
         };
})();