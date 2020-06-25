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
    
    if (DomModule.checkElement(projectContainer)){
      projectContainer.innerHTML = "";
      projectContainer.append(projectTitle);
    }else {
      projectContainer.append(projectTitle);
    }

    let projectDiv = DomModule.addHtmlDiv(['input-group'],0);
    let projectInput = DomModule.addHtmlInput(['form-control'],"text","Write your project title");
    
    projectDiv.appendChild(projectInput);
    
    let projectDivButtonChild = DomModule.addHtmlDiv(['input-group-append'],0);
    let projectButtonSave = DomModule.addHtmlButton(['btn', 'btn-outline-secondary'], "button", 0, "Save");

    projectDivButtonChild.appendChild(projectButtonSave);

    projectDiv.appendChild(projectDivButtonChild);

    projectContainer.append(projectDiv);
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
