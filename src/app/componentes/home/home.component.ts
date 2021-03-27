import { Component, OnInit } from '@angular/core';
import { Principal,MenuHomeService } from 'src/app/servicios/menu-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  mPrincipal: Principal[] = [];

  constructor(private _menuPrincipal: MenuHomeService) { }

  ngOnInit() {
    this.mPrincipal = this._menuPrincipal.getMenuPrincipal();

    console.log(this.mPrincipal);
  }
}
