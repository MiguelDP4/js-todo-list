import { DomModule } from './domManipulation';
import { projectModule } from '../project/projectModule';

export const ConfigurePage = (() => {
  const InitializePage = (saveKey) => {
    document.getElementById('new-project').addEventListener('click', () => {
      const newProject = projectModule.createProject();
      drawProjectButton(newProject);
    });

    document.getElementById('clear-everything').addEventListener('click', () => {
      localStorage.clear();
      projectModule.cleanProject();
      window.location.reload();
    });

    if (localStorage.getItem(`${saveKey}-project-0-index`) == null) {
      drawProjectButton(projectModule.createProject());
      projectModule.getProjectByIndex(0).createTask();
      drawProject(0);
      const divCardContainer = document.getElementById('task-container-project-0');
      const thisProject = projectModule.getProjectByIndex(0);
      updateTasks(divCardContainer, thisProject);
    } else {
      projectModule.loadFromStorage(saveKey);
      for (let i = 0; i < projectModule.getProjectAmount; i++) {
        drawProject(i);
      }
    }
  };

  const drawProject = (projectIndex) => {
    const thisProject = projectModule.getProjectByIndex(projectIndex);
    const projectContainer = document.getElementById('project-container');
    const projectTitle = DomModule.addHtmlHeading([], thisProject.getTitle(), 2);

    projectTitle.id = `project-title-${projectIndex}`;

    DomModule.appendTitle(projectContainer, projectTitle);

    const inputGroupDiv = DomModule.addHtmlDiv(['input-group'], `input-name-group-project-${projectIndex}`);
    const projectInput = DomModule.addHtmlInput(['form-control'], 'text', 'Write your project title', `input-project-${projectIndex}`, thisProject.getTitle());
    inputGroupDiv.append(projectInput);

    const projectDivButtonChild = DomModule.addHtmlDiv(['input-group-append'], 0);
    const projectButtonSave = DomModule.addHtmlButton(['btn', 'btn-outline-secondary'], 'button', `button-save-input-name-group-project-${projectIndex}`, 'Save');

    projectDivButtonChild.append(projectButtonSave);

    inputGroupDiv.append(projectDivButtonChild);

    projectContainer.append(inputGroupDiv);
    DomModule.hideElement(inputGroupDiv.id);
    DomModule.addOnClickListener(projectTitle.id, DomModule.showElementFlex, `input-name-group-project-${projectIndex}`);
    DomModule.addOnClickListener(projectTitle.id, DomModule.hideElement, projectTitle.id);
    DomModule.addOnClickListener(projectButtonSave.id, DomModule.showElement, projectTitle.id);

    DomModule.addOnClickListener(projectButtonSave.id, () => {
      thisProject.setTitle(projectInput.value);
      const titleTag = document.getElementById(projectTitle.id);
      titleTag.innerHTML = projectInput.value;
    });

    projectTitle.addEventListener('click', () => {
      projectTitle.innerHTML = thisProject.getTitle();
    });

    DomModule.addOnClickListener(projectButtonSave.id, () => {
      const itemMenu = document.getElementById(`link-project-${projectIndex}`);
      itemMenu.innerHTML = '';
      itemMenu.innerHTML = thisProject.getTitle();
    });

    DomModule.addOnClickListener(projectButtonSave.id, DomModule.hideElement, inputGroupDiv.id);

    const projectDivButtonTask = DomModule.addHtmlButton(['btn', 'btn-success', 'fa', 'fa-plus', 'mt-2'], 'button', `button-add-task-${projectIndex}`, 'New project task');
    projectContainer.appendChild(projectDivButtonTask);

    const sectionCardContainer = DomModule.addHTMLSection(['project-wrapper']);
    const divCardContainer = DomModule.addHtmlDiv(['d-flex', 'flex-wrap', 'align-items-start'], 'section-cards-container');
    divCardContainer.id = `task-container-project-${thisProject.getIndex()}`;
    projectContainer.appendChild(sectionCardContainer);
    projectContainer.appendChild(divCardContainer);

    projectDivButtonTask.addEventListener('click', () => {
      thisProject.createTask();
      updateTasks(divCardContainer, thisProject);
    });
  };

  const updateTasks = (divCardContainer, thisProject) => {
    divCardContainer.innerHTML = '';
    for (let i = 0; i < thisProject.listTasks().length; i++) {
      if (!thisProject.getTaskByIndex(i).getComplete()) {
        const newCard = drawCard(thisProject, thisProject.getTaskByIndex(i));
        divCardContainer.append(newCard);
      }
    }
  };

  const drawCard = (projectObject, taskObject) => {
    const cardContainer = DomModule.addHtmlDiv(['card', 'm-2', 'card-container'], `task-${projectObject.getIndex()}-${taskObject.getIndex()}`);
    const cardBody = DomModule.addHtmlDiv(['card-body'], 0);

    if (taskObject.getPriority() == 1) cardContainer.style.backgroundColor = 'greenyellow';
    if (taskObject.getPriority() == 2) cardContainer.style.backgroundColor = '#ffd9ad';
    if (taskObject.getPriority() == 3) cardContainer.style.backgroundColor = '#ffadad';

    // Card title heading
    const cardTitleHeading = DomModule.addHtmlHeading(['card-title'], taskObject.getTitle(), 5);
    cardTitleHeading.id = `task-title-${projectObject.getIndex()}-${taskObject.getIndex()}`;

    cardTitleHeading.addEventListener('click', () => {
      const cardTitleEditorContainer = drawInputFieldTitle(projectObject, taskObject);
      cardBody.prepend(cardTitleEditorContainer);
      DomModule.hideElement(`task-title-${projectObject.getIndex()}-${taskObject.getIndex()}`);
    });

    cardBody.appendChild(cardTitleHeading);

    const cardDescription = DomModule.addHtmlHeading(['card-subtitle', 'mb-2', 'text-muted'], taskObject.getDescription(), 6);
    cardDescription.id = `task-description-${projectObject.getIndex()}-${taskObject.getIndex()}`;

    cardDescription.addEventListener('click', () => {
      const cardDescriptionEditorContainer = drawInputFieldDescription(projectObject, taskObject);
      cardBody.insertBefore(cardDescriptionEditorContainer, cardDescription);
      DomModule.hideElement(`task-description-${projectObject.getIndex()}-${taskObject.getIndex()}`);
    });

    cardBody.appendChild(cardDescription);

    const divButtonsCard = DomModule.addHtmlDiv(['d-flex', 'flex-row', 'justify-content-between', 'mt-3']);

    const buttonComplete = DomModule.addHtmlAnchor(['card-link', 'm-0', 'btn', 'btn-primary'], '#', 'Complete', 0);
    buttonComplete.addEventListener('click', () => {
      taskObject.setComplete(true);
      const divCardContainer = document.getElementById(`task-container-project-${projectObject.getIndex()}`);
      updateTasks(divCardContainer, projectObject);
    });

    divButtonsCard.appendChild(buttonComplete);

    cardBody.append(drawSelectPriority(projectObject, taskObject));
    cardBody.append(drawDateInput(projectObject, taskObject));
    cardBody.appendChild(divButtonsCard);
    cardContainer.appendChild(cardBody);
    return cardContainer;
  };

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

  const drawSelectPriority = (projectObject, taskObject) => {
    const selectContainer = DomModule.addHtmlDiv(['form-group']);
    const selectPriorityTag = DomModule.addHtmlSelect(['form-control'], `select-task-priority-${projectObject.getIndex()}-${taskObject.getIndex()}`);
    const defaultOption = document.createElement('option');
    defaultOption.innerHTML = 'Set the priority of the task';
    defaultOption.selected = 'selected';
    selectPriorityTag.append(defaultOption);
    const newOption1 = document.createElement('option');
    newOption1.innerHTML = 'Low Priority';
    newOption1.value = '1';
    selectPriorityTag.append(newOption1);
    const newOption2 = document.createElement('option');
    newOption2.innerHTML = 'Medium Priority';
    newOption2.value = '2';
    selectPriorityTag.append(newOption2);
    const newOption3 = document.createElement('option');
    newOption3.innerHTML = 'High Priority';
    newOption3.value = '3';
    selectPriorityTag.append(newOption3);
    selectPriorityTag.selectedIndex = taskObject.getPriority();

    selectContainer.append(selectPriorityTag);
    selectPriorityTag.addEventListener('change', () => {
      taskObject.setPriority(Number(selectPriorityTag.value));
      const divCardContainer = document.getElementById(`task-container-project-${projectObject.getIndex()}`);
      updateTasks(divCardContainer, projectObject);
    });
    return selectContainer;
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

  const drawProjectButton = (projectElement) => {
    const newListItem = DomModule.addHtmlListItem(['nav-item']);
    const projectId = `link-project-${projectElement.getIndex()}`;
    const newAnchor = DomModule.addHtmlAnchor(['nav-link'], '#', projectElement.getTitle(), projectId);

    newListItem.append(newAnchor);
    const projectList = document.getElementById('project-list');
    projectList.append(newListItem);

    DomModule.addOnClickListener(projectId, () => {
      drawProject(projectElement.getIndex());
      const divCardContainer = document.getElementById(`task-container-project-${projectElement.getIndex()}`);
      const thisProject = projectModule.getProjectByIndex(projectElement.getIndex());
      updateTasks(divCardContainer, thisProject);
    });
  };

  const changeBackGroundCardColor = () => {

  };

  return {
    InitializePage, drawProjectButton, drawProject, drawCard,
  };
})();
