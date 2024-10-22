import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('about') about!: ElementRef;
  @ViewChild('experience') experience!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  title = 'moazzam-portfolio';
  highlightedIndex: number = 0;

  observer!: IntersectionObserver;

  ngAfterViewInit() {

    const options = {
      threshold: 0.5 // Adjust threshold based on when you want the highlight to trigger
    };
    if (IntersectionObserver) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Determine which value is visible and set the corresponding index
            if (entry.target === this.about.nativeElement) {
              this.highlightedIndex = 1;
            } else if (entry.target === this.experience.nativeElement) {
              this.highlightedIndex = 2;
            } else if (entry.target === this.projects.nativeElement) {
              this.highlightedIndex = 3;
            }
          }
        });
      }, options);
    }


    // Observe the values
    this.observer.observe(this.about.nativeElement);
    this.observer.observe(this.experience.nativeElement);
    this.observer.observe(this.projects.nativeElement);
  }

  navClicked(event: number) {
    switch(event) {
      case 1: this.scrollToValue(this.about); break;
      case 2: this.scrollToValue(this.experience); break;
      case 3: this.scrollToValue(this.projects); break;
      default: this.scrollToValue(this.about)
    }
  }

  scrollToValue(elementRef: ElementRef) {
    elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
