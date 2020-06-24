import { projectModule } from "../project/projectModule";

export const DomModule = (() => {

  const addOnClickListener = (elementID, method) => {
    let element = document.getElementById(elementID);
    element.onclick = method;
    return element;
  }

  const addProject = (projectElement) => {
    let newListItem = document.createElement('li');
    newListItem.classList.add('nav-item');
    let newAnchor = document.createElement('a');
    newAnchor.classList.add('nav-link');
    newAnchor.href = "#";
    newAnchor.innerHTML = projectElement.getTitle();
    newListItem.append(newAnchor);
    let projectList = document.getElementById('project-list');
    projectList.append(newListItem);
    projectList.addOnClickListener(openProject);
  }

  const openProject = (projectElement) => {

  }

  return { addOnClickListener, addProject };
})();




  
