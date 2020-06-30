import { taskFactory } from './taskFactory';

export const taskModule = (() => {
  const createTask = () => {
    const taskArray = [];
    let newIndex = 0;
    if (taskArray.length !== 0) {
      newIndex = taskArray[taskArray.length - 1].getIndex() + 1;
    }
    const newTask = taskFactory(newIndex);
    taskArray.push(newTask);
  };

  return {
    createTask,
  };
})();

export default taskModule;