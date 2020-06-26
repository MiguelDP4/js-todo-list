import { DomModule } from '../helpers/domManipulation';
import { projectModule } from '../project/projectModule';
import { taskModule } from '../task/taskModule'

export const ConfigurePage = (() => {
  const InitializeCreateProjectButton = () => {    
    DomModule.addOnClickListener('new-project', projectModule.createProject);
  };

  const drawProject = (projectIndex) => {    
    let thisProject = projectModule.getProjectByIndex(projectIndex);    
    let projectContainer = document.getElementById('project-container');
    let projectTitle =  DomModule.addHtmlHeading([], thisProject.getTitle(), 2)
    
    projectTitle.id = `project-title-${projectIndex}`;
    
    DomModule.appendTitle(projectContainer, projectTitle);

    let inputGroupDiv = DomModule.addHtmlDiv(['input-group'], `input-name-group-project-${projectIndex}`);
    let projectInput = DomModule.addHtmlInput(['form-control'],"text","Write your project title", `input-project-${projectIndex}`,thisProject.getTitle());
    inputGroupDiv.append(projectInput);
    
    let projectDivButtonChild = DomModule.addHtmlDiv(['input-group-append'],0);
    let projectButtonSave = DomModule.addHtmlButton(['btn', 'btn-outline-secondary'], "button", `button-save-input-name-group-project-${projectIndex}`, "Save");

    projectDivButtonChild.append(projectButtonSave);

    inputGroupDiv.append(projectDivButtonChild);

    projectContainer.append(inputGroupDiv);
    DomModule.hideElement(inputGroupDiv.id);
    DomModule.addOnClickListener(projectTitle.id, DomModule.showElementFlex, `input-name-group-project-${projectIndex}`);
    DomModule.addOnClickListener(projectTitle.id, DomModule.hideElement, projectTitle.id);
    DomModule.addOnClickListener(projectButtonSave.id, DomModule.showElement, projectTitle.id);
    
    DomModule.addOnClickListener(projectButtonSave.id, function(){
      thisProject.setTitle(projectInput.value)
      let titleTag = document.getElementById(projectTitle.id);
      titleTag.innerHTML = projectInput.value; 
    });
    
    projectTitle.addEventListener('click', function() {
      projectTitle.innerHTML = thisProject.getTitle();      
    });  
    
    DomModule.addOnClickListener(projectButtonSave.id, function(){
      let itemMenu = document.getElementById(`link-project-${projectIndex}`);
      itemMenu.innerHTML = "";
      itemMenu.innerHTML = thisProject.getTitle();
    });

    DomModule.addOnClickListener(projectButtonSave.id, DomModule.hideElement, inputGroupDiv.id);

    let projectDivButtonTask = DomModule.addHtmlButton(['btn', 'btn-success', 'fa', 'fa-plus', 'mt-2'],'button', `button-add-task-${projectIndex}`,'New project task')
    projectContainer.appendChild(projectDivButtonTask);
    
    let sectionCardContainer = DomModule.addHTMLSection(['project-wrapper']);
    let divCardContainer = DomModule.addHtmlDiv(['d-flex', 'flex-wrap', 'align-items-start'],'section-cards-container')
    divCardContainer.id = `task-container-project-${thisProject.getIndex()}`;
    projectContainer.appendChild(sectionCardContainer);
    projectContainer.appendChild(divCardContainer);

    projectDivButtonTask.addEventListener('click', function(){
      thisProject.createTask();
      // taskModule.createTask();
      updateTasks(divCardContainer, thisProject);
    });
  };

  const updateTasks = (divCardContainer, thisProject) => {
    divCardContainer.innerHTML = "";
    for(let i = 0; i < thisProject.listTasks().length; i++){
      let newCard = drawCard(thisProject.getTaskByIndex(i));
      divCardContainer.append(newCard);
    }
  }

  const drawCard = (taskObject) => {    
    let cardContainer = DomModule.addHtmlDiv(['card', 'm-2','card-container'],`task-`);
    
    let cardBody = DomModule.addHtmlDiv(['card-body'],0);

    cardBody.appendChild(DomModule.addHtmlHeading(['card-title'], 'Card title', 5));
    cardBody.appendChild(DomModule.addHtmlHeading(['card-subtitle','mb-2','text-muted'], 'Card subtitle', 6));

    let divButtonsCard = DomModule.addHtmlDiv(['d-flex','flex-row','justify-content-between', 'mt-3']);
    
    divButtonsCard.appendChild(DomModule.addHtmlAnchor(['card-link','m-0','btn','btn-primary'],'#',"Complete",0));
    divButtonsCard.appendChild(DomModule.addHtmlAnchor(['card-link','m-0','btn','btn-danger'],'#',"Delete",0));
    
    cardBody.appendChild(divButtonsCard);
    cardContainer.appendChild(cardBody);

    return cardContainer;
  };

  const drawProjectButton = (projectElement) => {    
    let newListItem  = DomModule.addHtmlListItem(['nav-item']);
    let projectId = `link-project-${projectElement.getIndex()}`;
    let newAnchor  = DomModule.addHtmlAnchor(['nav-link'], '#', projectElement.getTitle(), projectId);
    
    newListItem.append(newAnchor);
    let projectList = document.getElementById('project-list');
    projectList.append(newListItem);

    DomModule.addOnClickListener(projectId, function() {
      drawProject(projectElement.getIndex());
      let divCardContainer = document.getElementById(`task-container-project-${projectElement.getIndex()}`);
      let thisProject = projectModule.getProjectByIndex(projectElement.getIndex());
      updateTasks(divCardContainer, thisProject);
    });
  };

  return { InitializeCreateProjectButton, drawProjectButton, drawProject, drawCard };
})();
