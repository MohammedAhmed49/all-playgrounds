import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onLinkClick($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('my-app', { alias: 'appSafeLink' });
  constructor() {}

  onLinkClick(event: MouseEvent) {
    const confirmClick = window.confirm('Do you want to leave our website');

    if (confirmClick) {
      const address = (event.target as HTMLAnchorElement).href;

      (event.target as HTMLAnchorElement).href =
        address + '?from=' + this.queryParam();

      return;
    }

    event.preventDefault();
  }
}
