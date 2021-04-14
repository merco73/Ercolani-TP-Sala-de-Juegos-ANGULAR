// Modulos
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { NavbarMenuComponent } from './componentes/navbar-menu/navbar-menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ChatComponent } from './componentes/chat/chat.component';
// Sala juegos
import { SalaJuegosComponent } from './componentes/juegos/sala-juegos/sala-juegos.component';
import { TatetiComponent } from './componentes/juegos/tateti/tateti.component';
import { PptComponent } from './componentes/juegos/ppt/ppt.component';

// Angular Fire para chat
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Enviroment
import { environment } from '../environments/environment';


// Servicios
import { ChatService } from './servicios/chat.service';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    NavbarMenuComponent,
    FooterComponent,
    RegistroComponent,
    ChatComponent,
    // Sala juegos
    SalaJuegosComponent,
    TatetiComponent,
    PptComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
    
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
