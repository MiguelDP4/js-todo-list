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

  const addHtmlAnchor = (classArray, href, text) => {
    let newAnchor = document.createElement('a');
    for(let i = 0; i < classArray.length; i++){
      newAnchor.classList.add(classArray[i]);
    }
    newAnchor.href = href;
    newAnchor.innerHTML = text;
    return newAnchor;
  }

  const addHtmlButton = () => {
    
  }

  const addHtmlHeading = (classArray, text, headingSize) => {
    let newHeading = document.createElement(`h${headingSize}`);
    for(let i = 0; i < classArray.length; i++){
      newHeading.classList.add(classArray[i]);
    }
    newHeading.innerHTML = text;
    return newHeading;
  }

  return { addOnClickListener, 
          addHtmlListItem, 
          addHtmlAnchor,
          addHtmlButton,
          addHtmlHeading
        };
})();




  
