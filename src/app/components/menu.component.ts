import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor() {
    console.log('Menu Live');
  }
  public philipCount = 0;
  public arrayTest = ['el1', 2, 'el3'];
  public firstString = 'abcdefg';
  // TODO firstString -> console.log('gfedcba');
  // console.log('reverted string', 'gfedcba');

  buttonClick(name: string) {
    // this.philipCount = this.philipCount + 1; = this.philipCount++
    console.log('button clicked', this.arrayTest, this.arrayTest[1]);
    if (name === 'Email') {
      console.log('WIN');
    }
  }
}
