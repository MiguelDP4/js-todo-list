export const projectFactory = () => {
  let title = '';
  let description = '';
  let dueDate = ''
  let priority = 0;
  let checkList = [];
  return { title, description, dueDate, priority, checkList };
};