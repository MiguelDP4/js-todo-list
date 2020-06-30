
export const DomModule = (() => {
  const hideElement = (elementId) => {
    const element = document.getElementById(elementId);
    element.style.display = 'none';
  };

  const showElement = (elementId) => {
    const element = document.getElementById(elementId);
    element.style.display = 'block';
  };

  const showElementFlex = (elementId) => {
    const element = document.getElementById(elementId);
    element.style.display = 'flex';
  };

  const addOnClickListener = (elementID, method, params = null) => {
    const element = document.getElementById(elementID);
    element.addEventListener('click', () => {
      if (params !== null) method(params);
      else method();
    });
  };

  const addHtmlListItem = (classArray) => {
    const newListItem = document.createElement('li');
    for (let i = 0; i < classArray.length; i += 1) {
      newListItem.classList.add(classArray[i]);
    }
    return newListItem;
  };

  const addHtmlAnchor = (classArray, href, text, id) => {
    const newAnchor = document.createElement('a');
    for (let i = 0; i < classArray.length; i += 1) {
      newAnchor.classList.add(classArray[i]);
    }
    newAnchor.href = href;
    newAnchor.innerHTML = text;
    newAnchor.id = id;
    return newAnchor;
  };

  const firstChildExists = (parent) => {
    const tag = parent.childNodes[1];
    if (tag) {
      return true;
    }
    return false;
  };

  const appendTitle = (parent, title) => {
    if (DomModule.firstChildExists(parent)) {
      parent.innerHTML = '';
      parent.append(title);
    } else {
      parent.append(title);
    }
  };

  const addHtmlButton = (classArray, type, id, text) => {
    const newButton = document.createElement('button');
    for (let i = 0; i < classArray.length; i += 1) {
      newButton.classList.add(classArray[i]);
    }
    newButton.setAttribute('type', type);
    newButton.id = id;
    newButton.innerHTML = text;
    return newButton;
  };

  const addHtmlHeading = (classArray, text, headingSize) => {
    const newHeading = document.createElement(`h${headingSize}`);
    for (let i = 0; i < classArray.length; i += 1) {
      newHeading.classList.add(classArray[i]);
    }
    newHeading.innerHTML = text;
    return newHeading;
  };

  const addHtmlDiv = (classArray, id = null) => {
    const newDiv = document.createElement('div');
    for (let i = 0; i < classArray.length; i += 1) {
      newDiv.classList.add(classArray[i]);
    }
    if (id != null) newDiv.id = id;
    return newDiv;
  };

  const addHtmlSelect = (classArray, id = null) => {
    const newSelect = document.createElement('select');
    for (let i = 0; i < classArray.length; i += 1) {
      newSelect.classList.add(classArray[i]);
    }
    if (id != null) newSelect.id = id;
    return newSelect;
  };

  const addHtmlInput = (classArray, type, placeHolder, id, text = '') => {
    const newInput = document.createElement('input');
    for (let i = 0; i < classArray.length; i += 1) {
      newInput.classList.add(classArray[i]);
    }
    newInput.id = id;
    newInput.setAttribute('type', type);
    newInput.setAttribute('placeholder', placeHolder);
    newInput.value = text;
    return newInput;
  };

  const addHtmlSpan = (classArray, text = '') => {
    const newSpan = document.createElement('span');
    for (let i = 0; i < classArray.length; i += 1) {
      newSpan.classList.add(classArray[i]);
    }
    newSpan.text = text;
    return newSpan;
  };

  const addHTMLSection = (classArray, id = null) => {
    const newSection = document.createElement('section');
    for (let i = 0; i < classArray.length; i += 1) {
      newSection.classList.add(classArray[i]);
    }
    if (id != null) newSection.id = id;
    return newSection;
  };

  return {
    addOnClickListener,
    addHtmlListItem,
    addHtmlAnchor,
    addHtmlButton,
    addHtmlHeading,
    firstChildExists,
    addHtmlDiv,
    addHtmlInput,
    hideElement,
    showElement,
    showElementFlex,
    addHTMLSection,
    appendTitle,
    addHtmlSelect,
    addHtmlSpan,
  };
})();

export default DomModule;