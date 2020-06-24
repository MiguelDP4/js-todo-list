export const DomModule = (() => {

  const addOnClickListener = (elementID, method) => {
    let element = document.getElementById(elementID);
    element.onclick = method;
    return element;
  }

  return { addOnClickListener };
})();




  
