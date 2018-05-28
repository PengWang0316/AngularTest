import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-fount',
  template: `
    <p>
      Sorry, the page is not found.
    </p>
  `,
  styles: []
})
export class PageNotFountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
