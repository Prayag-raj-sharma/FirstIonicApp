import { Component, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  hideHeaderFooterOnPages = ['/login', '/signup'];

  constructor(private router: Router, private elementRef: ElementRef) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is in the hideHeaderFooterOnPages array
        const hideHeaderFooter = this.hideHeaderFooterOnPages.includes(event.url);

        // Get the header and footer elements using nativeElement
        const header = this.elementRef.nativeElement.querySelector('ion-header');
        const footer = this.elementRef.nativeElement.querySelector('ion-footer');

        // Modify the display style directly
        header.style.display = hideHeaderFooter ? 'none' : 'block';
        footer.style.display = hideHeaderFooter ? 'none' : 'block';
      }
    });
  }
}

