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

  constructor(public _cs:ChatService){
    
    this._cs.cargarMensajes()
            .subscribe((mensajes:any[])=>{

              console.log(mensajes);

            })
  }

  //! Prueba de Conexion Firebase
  // public chats: Observable<any[]>;
  // constructor(firestore: AngularFirestore) {
  //   this.chats = firestore.collection('chats').valueChanges();
  // }
  
  ngOnInit(): void {
  }


  enviar_mensaje(){
    console.log(this.mensaje);
  }

}
