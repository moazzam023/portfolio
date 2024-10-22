import { Component } from '@angular/core';
import { Constant } from '../../commons/constant';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  safeHtml: SafeHtml[] = [];
  constructor(private sanitizer: DomSanitizer) {
    this.convertToHTML(Constant.ABOUT_PAGE_CONTENT);
  }

  private convertToHTML(data: string[]) {
    data.forEach(val => this.safeHtml.push(this.sanitizer.bypassSecurityTrustHtml(val)))
  }

}
