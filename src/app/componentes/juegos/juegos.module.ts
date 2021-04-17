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


@NgModule({
  declarations: [
    PptComponent,
    SalaJuegosComponent,
    TatetiComponent
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
