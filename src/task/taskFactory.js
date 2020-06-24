export const taskFactory = (title = "", description = "", dueDate = "01/01/1990", priority = 1, checkList = []) => {
  let tTitle = title;
  let tDescription = description;
  let tDueDate = dueDate;
  let tPriority = priority;
  let tCheckList = checkList;
  
  const getTitle = () => tTitle ; 
  const getDescription = () => tDescription ; 
  const getDueDate = () => tDueDate ; 
  const getPriority = () => tPriority ; 
  const getChecklist = () => tCheckList ; 

  const setTitle = pTitle => {
    tTitle = pTitle; 
  };
  
  const setDescription = pDescription =>  {
    tDescription = pDescription;
  }; 

  const setDueDate = pdueDate =>  {
    tDueDate = pdueDate;
  }; 
  const setPriority = pPriority =>  {
    tPriority = pPriority;
  }; 
  const setChecklist = pCheckList =>  {
    tCheckList = pCheckList;
  }; 
  
  return {  getTitle, getDescription, getDueDate, getPriority, getChecklist, setTitle, setDescription, setDueDate, setPriority, setChecklist };


};