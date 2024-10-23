import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Constant } from '../../commons/constant';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input() highlightedTitle: number = 0;
  @Output() navClicked = new EventEmitter<number>();
  constant = Constant;

  isHighlighted(index: number): boolean {
    return this.highlightedTitle === index;
  }

  onNavClick(index: number) {
    this.navClicked.emit(index);
  }
}
