import { DomModule } from '../helpers/domManipulation';
import { projectModule } from '../project/projectModule';

export const ConfigurePage = (() => {
  const InitializeCreateProjectButton = () => {    
    DomModule.addOnClickListener('new-project', projectModule.createProject);
  };

  const drawProject = (projectIndex) => {    
    let thisProject = projectModule.getProjectByIndex(projectIndex);    
    let projectContainer = document.getElementById('project-container');
    let projectTitle =  DomModule.addHtmlHeading([], thisProject.getTitle(), 2)
    projectTitle.id = `project-title-${projectIndex}`;
    if (DomModule.checkElement(projectContainer)){
      projectContainer.innerHTML = "";
      projectContainer.append(projectTitle);
    } else {
      projectContainer.append(projectTitle);
    }

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
    DomModule.addOnClickListener(projectButtonSave.id, function(){thisProject.setTitle(projectInput.value)});
    DomModule.addOnClickListener(projectButtonSave.id, function(){console.log(projectInput.value);});
    
    // DomModule.addOnClickListener(projectButtonSave.id, function() {
    //   let titleTag = document.getElementById('project-title-0');
    //   titleTag.innerHTML = thisProject.getTitle();
    //   // projectTitle.innerHTML = thisProject.getTitle();
    //   // console.log(projectInput.value);
    // });
    projectTitle.addEventListener('click', function() {
      console.log(thisProject.getTitle());
      projectTitle.innerHTML = thisProject.getTitle();
    });  
    DomModule.addOnClickListener(projectButtonSave.id, DomModule.hideElement, inputGroupDiv.id);
  };

  const drawProjectButton = (projectElement) => {    
    let newListItem  = DomModule.addHtmlListItem(['nav-item']);
    let projectId= `link-project-${projectElement.getIndex()}`;
    let newAnchor  = DomModule.addHtmlAnchor(['nav-link'], '#', projectElement.getTitle(), projectId);
    
    newListItem.append(newAnchor);
    let projectList = document.getElementById('project-list');
    projectList.append(newListItem);
    DomModule.addOnClickListener(projectId, drawProject, projectElement.getIndex());
  };

  return { InitializeCreateProjectButton, drawProjectButton, drawProject };
})();
