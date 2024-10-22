import { Component } from '@angular/core';
import { IExperience, IProject } from '../../commons/common.model';
import { Constant } from '../../commons/constant';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectDtl: IProject[] = Constant.PROJECTS_DTL;
}
