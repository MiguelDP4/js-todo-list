import { projectModule } from "../project/projectModule";

export const DomModule = (() => {

  const addOnClickListener = (elementID, method) => {
    let element = document.getElementById(elementID);
    element.onclick = method;
    return element;
  }

  const addHtmlListItem = (className) => {
    let newListItem = document.createElement('li');
    newListItem.classList.add(className);
    return newListItem;
  }

  const addHtmlAnchor = (className, href, text) => {
    let newAnchor = document.createElement('a');
    newAnchor.classList.add(className);
    newAnchor.href = href;
    newAnchor.innerHTML = text;
    return newAnchor;
  }

  //const openProject = (projectElement) => {

  //}

  return { addOnClickListener, addHtmlListItem, addHtmlAnchor};
})();




  
