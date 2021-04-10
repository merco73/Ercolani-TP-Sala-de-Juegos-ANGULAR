import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import {ChatService} from "../../servicios/chat.service";



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje:string = "";
  elemento:any;

  constructor(public _cs:ChatService){
    
    this._cs.cargarMensajes()
            .subscribe(()=>{
              this.elemento.scrollTop = this.elemento.scrollHeight;
            });
  }

  //! Prueba de Conexion Firebase
  // public chats: Observable<any[]>;
  // constructor(firestore: AngularFirestore) {
  //   this.chats = firestore.collection('chats').valueChanges();
  // }
  
  ngOnInit(): void {

    setTimeout(()=>{
      this.elemento = document.getElementById('app-mensajes');
    },20)
  }


  enviar_mensaje(){
    console.log(this.mensaje);

    if(this.mensaje.length ===0){
      return;
    }

    this._cs.agregarMensaje(this.mensaje);
    
    if (localStorage.getItem("email")) {
      console.log(localStorage.getItem("email"));
    }

    this.mensaje='';
           
  }

}
