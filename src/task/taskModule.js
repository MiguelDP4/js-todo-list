import { taskFactory } from '../task/taskFactory'

export const taskModule = (() => {  
  const taskArray = [];

  const createTask = () => {
    let newIndex = 0;
    if(taskArray.length != 0) {
      newIndex = taskArray[taskArray.length-1].getIndex()+1;
    }
    let newTask = taskFactory(newIndex);
    taskArray.push(newTask);
  };

  const getTaskByIndex = (index) => {
    let i = 0;
    while(i < taskArray.length){
      if(taskArray[i].getIndex() == index){
        return taskArray[i];
      }
      i+=1;
    }
    return -1;
  };

  const getTaskArray = () => { return taskArray; }
  return { createTask,
           getTaskArray,
           getTaskByIndex };
})();