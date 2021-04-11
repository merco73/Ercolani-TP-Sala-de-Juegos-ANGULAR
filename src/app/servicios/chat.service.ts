import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import {Mensaje} from '../interfaces/mensaje.interface';
import { map } from 'rxjs/operators';
import {LoginComponent} from '../componentes/login/login.component';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];

  public nombreUser = localStorage.getItem('email');
  



  constructor(public afs: AngularFirestore) {
              // public afsAuth:AngularFireAuth

                // this.afsAuth.authState.subscribe(user =>{
                //   console.log('Estado del usuario: ',user);
                //   if(!user){
                //     return;
                //   }

                //   this.usuario.nombre = user.displayName;
                  
                // })
                

               }

  cargarMensajes(){

    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref=>ref.orderBy('fecha','desc').limit(5));

    return this.itemsCollection.valueChanges().pipe(
      map( (mensajes: Mensaje[] ) => {

        console.log(mensajes);

        this.chats=[];

        for(let mensaje of mensajes){
          this.chats.unshift(mensaje);
        }

        console.log(this.chats);
        return this.chats;
        // this.chats = mensajes;
      }))

  }

  


  agregarMensaje(texto:string){

    // Falta el UID del usuario
    let mensaje: Mensaje ={
      nombre:this.nombreUser,
      mensaje:texto,
      fecha:new Date().getTime()
    }

    return this.itemsCollection.add(mensaje);

  }

}
