
import { taskFactory } from '../task/taskFactory';

export const projectFactory = (index = 0, title = 'Project', description = '') => {
  let tDescription = description;
  const tTask = [];
  const tIndex = index;
  let tTitle = `${title}-${index}`;

  const getTitle = () => tTitle;
  const getDescription = () => tDescription;
  const listTasks = () => tTask;
  const getIndex = () => tIndex;

  const setTitle = pTitle => {
    tTitle = pTitle;
  };

  const setDescription = pDescription => {
    tDescription = pDescription;
  };

  const addTask = task => {
    tTask.push(task);
  };


  const getTaskByIndex = (index) => {
    let i = 0;
    while (i < tTask.length) {
      if (tTask[i].getIndex() === index) {
        return tTask[i];
      }
      i += 1;
    }
    return -1;
  };

  const createTask = () => {
    let newIndex = 0;
    if (tTask.length !== 0) {
      newIndex = tTask[tTask.length - 1].getIndex() + 1;
    }
    const newTask = taskFactory(newIndex,
      `Task ${newIndex} title`,
      `Task ${newIndex} description`);
    tTask.push(newTask);
  };

  return {
    getTitle,
    getDescription,
    setTitle,
    setDescription,
    listTasks,
    addTask,
    getIndex,
    getTaskByIndex,
    createTask,
  };
};

export default projectFactory;