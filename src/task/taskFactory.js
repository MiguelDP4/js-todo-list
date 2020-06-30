export const taskFactory = (index = 0, title = '', description = '', priority = 1, checkList = []) => {
  const tIndex = index;
  let tTitle = title;
  let tDescription = description;
  let tPriority = priority;
  let tCheckList = checkList;
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = String(today.getFullYear());
  let tDueDate = `${year}-${month}-${day}`;
  let isComplete = false;

  const getIndex = () => tIndex;
  const getTitle = () => tTitle;
  const getDescription = () => tDescription;
  const getDueDate = () => tDueDate;
  const getPriority = () => tPriority;
  const getChecklist = () => tCheckList;
  const getComplete = () => isComplete;

  const setTitle = pTitle => {
    tTitle = pTitle;
  };

  const setDescription = pDescription => {
    tDescription = pDescription;
  };

  const setDueDate = pdueDate => { tDueDate = pdueDate; };
  const setPriority = pPriority => {
    tPriority = pPriority;
  };
  const setChecklist = pCheckList => {
    tCheckList = pCheckList;
  };

  const setComplete = pisComplete => {
    isComplete = pisComplete;
  };

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getChecklist,
    getComplete,
    setTitle,
    setDescription,
    setDueDate,
    setPriority,
    setChecklist,
    getIndex,
    setComplete,
  };
};

export default taskFactory;