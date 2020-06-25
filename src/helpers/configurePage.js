import { DomModule } from '../helpers/domManipulation';
import { projectModule } from '../project/projectModule';

export const ConfigurePage = (() => {
  const InitializeCreateProjectButton = () => {    
    DomModule.addOnClickListener('new-project', projectModule.createProject);    
  };

  const drawProject = (projectElement) => {    
    let newListItem  = DomModule.addHtmlListItem('nav-item');
    let newAnchor  = DomModule.addHtmlAnchor('nav-link', '#',projectElement.getTitle());    
    newListItem.append(newAnchor);
    let projectList = document.getElementById('project-list');
    projectList.append(newListItem);
    //projectList.addOnClickListener(openProject);
  };

  return { InitializeCreateProjectButton, drawProject };
})();
