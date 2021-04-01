import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  constructor(private auth:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}
