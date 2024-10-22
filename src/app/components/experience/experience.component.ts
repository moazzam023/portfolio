import { Component } from '@angular/core';
import { Constant } from '../../commons/constant';
import { IExperience } from '../../commons/common.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experienceDtl: IExperience[] = Constant.EXPERIENCE_DTL;
  constructor(private apiService: ApiService) {}

  downloadResume() {
    this.apiService.downloadResume();
  }
}
