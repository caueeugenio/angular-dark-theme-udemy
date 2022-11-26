import { Component, OnInit } from '@angular/core';
import { ETheme } from '../../enum/ETheme.enum';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public icon: string = ETheme.ICON_MOON;
  public textTheme: string = ETheme.TEXT_MOON;

  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    console.log('cai aqui');
    const theme = document.body.classList.toggle('dark-theme');
    if (theme) {

      console.log(this.textTheme);
      console.log(this.icon);
      this.textTheme = ETheme.TEXT_SUN;
      return (this.icon = ETheme.ICON_SUN);

    }
    this.textTheme = ETheme.TEXT_MOON;
    return (this.icon = ETheme.ICON_MOON);
  }
}
