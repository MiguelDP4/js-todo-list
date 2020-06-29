import { taskFactory } from './taskFactory';

export const taskModule = (() => {
  const createTask = () => {
    let newIndex = 0;
    if (taskArray.length != 0) {
      newIndex = taskArray[taskArray.length - 1].getIndex() + 1;
    }
    const newTask = taskFactory(newIndex);
    taskArray.push(newTask);
  };

  const getTaskArray = () => taskArray;
  return {
    createTask,
    getTaskArray,
  };
})();