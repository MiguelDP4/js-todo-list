import { projectModule } from "../project/projectModule";

export const DomModule = (() => {

  const addOnClickListener = (elementID, method, params = null) => {
    let element = document.getElementById(elementID);
    if(params != null){
      element.onclick = function() {
          method(params);
      };
    } else {
      element.onclick = method;
    }      
  }

  const addHtmlListItem = (classArray) => {
    let newListItem = document.createElement('li');
    for(let i = 0; i < classArray.length; i++){
      newListItem.classList.add(classArray[i]);
    }
    return newListItem;
  }

  const addHtmlAnchor = (classArray, href, text, id) => {
    let newAnchor = document.createElement('a');
    for(let i = 0; i < classArray.length; i++){
      newAnchor.classList.add(classArray[i]);
    }
    newAnchor.href = href;
    newAnchor.innerHTML = text;
    newAnchor.id= id;
    return newAnchor;
  }
  
  const checkElement = (parent) => {
    let tag = parent.childNodes[1];
    if (tag){
      return true;
    }else {
      return false;
    }
  }

  const addHtmlButton = (classArray, type, id, text) => {
    let newButton = document.createElement('button');
    for(let i = 0; i < classArray.length; i++){
      newButton.classList.add(classArray[i]);
    }
    newButton.setAttribute("type",type);
    newButton.id = id;
    newButton.innerHTML = text;
    return newButton;
  }

  const addHtmlHeading = (classArray, text, headingSize) => {
    let newHeading = document.createElement(`h${headingSize}`);
    for(let i = 0; i < classArray.length; i++){
      newHeading.classList.add(classArray[i]);
    }
    newHeading.innerHTML = text;
    return newHeading;
  }

   const addHtmlDiv = (classArray, id) => {
    let newDiv = document.createElement('div');
    for(let i = 0; i < classArray.length; i++){
      newDiv.classList.add(classArray[i]);
    }
    newDiv.id = id;
    return newDiv;
   }

   const addHtmlInput = (classArray, type, placeHolder) => {
    let newInput = document.createElement('input');
    for(let i = 0; i < classArray.length; i++){
      newInput.classList.add(classArray[i]);
    }
    newInput.setAttribute("type",type);
    newInput.setAttribute("placeholder",placeHolder);
    return newInput;
   }

  return { addOnClickListener, 
          addHtmlListItem, 
          addHtmlAnchor,
          addHtmlButton,
          addHtmlHeading,
          checkElement,
          addHtmlDiv,
          addHtmlInput
        };
})();




  
