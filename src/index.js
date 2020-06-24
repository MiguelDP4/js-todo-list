import './style.scss';
import { DomModule } from './domManipulation';
import { ConfigurePage } from './configurePage';

window.onload = function () {
  DomModule.addOnClickListener('new-project', ConfigurePage.InitializeCreateProjectButton);
};

