import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing
import { JuegosRoutingModule } from './juegos-routing.module';

// Componentes del modulos Juegos
import { PptComponent } from './ppt/ppt.component';
import { SalaJuegosComponent } from './sala-juegos/sala-juegos.component';
import { TatetiComponent } from './tateti/tateti.component';
import { NavbarMenuModule } from '../navbar-menu/navbar-menu.module';
import { FooterModule } from '../footer/footer.module';
import { ChatModule } from '../chat/chat.module';
import { MiJuegoComponent } from './mi-juego/mi-juego.component';
import { MemotestComponent } from './memotest/memotest.component';


@NgModule({
  declarations: [
    PptComponent,
    SalaJuegosComponent,
    TatetiComponent,
    MiJuegoComponent,
    MemotestComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    NavbarMenuModule,
    FooterModule,
    ChatModule,
  ]
})
export class JuegosModule { }
