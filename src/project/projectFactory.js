export const projectFactory = (title = "", description = "", tasks = []) => {
  let tTitle = title;
  let tDescription = description;
  let tTask = [];
  
  const getTitle = () => tTitle ; 
  const getDescription = () => tDescription ;   
  const listTasks = () => tTask ;   
  const getTask = index => {
    return tTask[index];
  };   

  const setTitle = pTitle => {
    tTitle = pTitle; 
  };
  
  const setDescription = pDescription =>  {
    tDescription = pDescription;
  }; 

  const addTask = task =>  {
    tTask.push(task);
  }; 
  
  return {  getTitle, getDescription, setTitle, setDescription, listTasks, getTask, addTask };


};