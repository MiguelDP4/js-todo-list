import { CreateDomElement } from './createDomElements';

export const ConfigurePage = (() => {
  const InitializePage = (saveKey) => {
    CreateDomElement.createClickEventAddProject();
    CreateDomElement.cleanLocalStorage();

    if (localStorage.getItem(`${saveKey}-project-0-index`) == null) {
      const newProject = CreateDomElement.createProject();
      CreateDomElement.drawProjectButton(newProject);
      CreateDomElement.createClickEventProjectItem(newProject);
      newProject.createTask();
      CreateDomElement.drawProject(0);
      const divCardContainer = document.getElementById('task-container-project-0');
      CreateDomElement.updateTasks(divCardContainer, newProject);
    } else {
      CreateDomElement.loadFromStorage(saveKey);
      CreateDomElement.cleanLocalStorage();
    }
  };

  return {
    InitializePage,
  };
})();

export default ConfigurePage;