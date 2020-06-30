import { DomModule } from './domManipulation';

export const CreateDomElement = (() => {
  const drawInputFieldTitle = (projectObject, taskObject) => {
    const cardTitleEditorContainer = DomModule.addHtmlDiv(['input-group', 'pb-3'], `input-title-group-task-${projectObject.getIndex()}-${taskObject.getIndex()}`);
    const cardTitleInput = DomModule.addHtmlInput(['form-control'], 'text', 'Write your task title', `input-title-task-${projectObject.getIndex()}-${taskObject.getIndex()}`, taskObject.getTitle());

    const cardTitleButtonSave = DomModule.addHtmlButton(['btn', 'btn-outline-secondary'], 'button', `button-save-input-name-group-task-${projectObject.getIndex()}-${taskObject.getIndex()}`, 'Save');
    const cardTitleButtonContainer = DomModule.addHtmlDiv(['input-group-append']);

    cardTitleButtonSave.addEventListener('click', () => {
      taskObject.setTitle(cardTitleInput.value);
      const elementTitle = document.getElementById(`input-title-group-task-${projectObject.getIndex()}-${taskObject.getIndex()}`);
      elementTitle.remove();

      DomModule.showElement(`task-title-${projectObject.getIndex()}-${taskObject.getIndex()}`);
      const taskTitle = document.getElementById(`task-title-${projectObject.getIndex()}-${taskObject.getIndex()}`);
      taskTitle.innerHTML = taskObject.getTitle();
    });

    cardTitleButtonContainer.append(cardTitleButtonSave);
    cardTitleEditorContainer.append(cardTitleInput);
    cardTitleEditorContainer.append(cardTitleButtonContainer);
    return cardTitleEditorContainer;
  };

  const drawInputFieldDescription = (projectObject, taskObject) => {
    const cardDescriptionEditorContainer = DomModule.addHtmlDiv(['input-group', 'pb-3'], `input-description-group-task-${projectObject.getIndex()}-${taskObject.getIndex()}`);
    const cardDescriptionInput = DomModule.addHtmlInput(['form-control'], 'text', 'Write your task description', `input-description-task-${projectObject.getIndex()}-${taskObject.getIndex()}`, taskObject.getDescription());

    const cardDescriptionButtonSave = DomModule.addHtmlButton(['btn', 'btn-outline-secondary'], 'button', `button-save-input-description-group-task-${projectObject.getIndex()}-${taskObject.getIndex()}`, 'Save');
    const cardDescriptionButtonContainer = DomModule.addHtmlDiv(['input-group-append']);

    cardDescriptionButtonSave.addEventListener('click', () => {
      taskObject.setDescription(cardDescriptionInput.value);
      const elementDescription = document.getElementById(`input-description-group-task-${projectObject.getIndex()}-${taskObject.getIndex()}`);
      elementDescription.remove();

      DomModule.showElement(`task-description-${projectObject.getIndex()}-${taskObject.getIndex()}`);
      const taskDescription = document.getElementById(`task-description-${projectObject.getIndex()}-${taskObject.getIndex()}`);
      taskDescription.innerHTML = taskObject.getDescription();
    });

    cardDescriptionButtonContainer.append(cardDescriptionButtonSave);
    cardDescriptionEditorContainer.append(cardDescriptionInput);
    cardDescriptionEditorContainer.append(cardDescriptionButtonContainer);
    return cardDescriptionEditorContainer;
  };

  const drawDateInput = (projectObject, taskObject) => {
    const inputContainer = DomModule.addHtmlDiv(['input-group', 'mb-3']);
    const inputObject = DomModule.addHtmlInput(['w-100'], 'date', '', `date-input-${projectObject.getIndex()}-${taskObject.getIndex()}`, '');
    inputObject.value = taskObject.getDueDate();
    inputContainer.append(inputObject);
    inputObject.addEventListener('change', () => {
      taskObject.setDueDate(inputObject.value);
    });
    return inputContainer;
  };

  return {
    drawInputFieldTitle,
    drawInputFieldDescription,
    drawDateInput,
  };
})();

export default CreateDomElement;