import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "https://identitytoolkit.googleapis.com/v1";

  private apikey = "AIzaSyBIpj7ZkI9GrZT6WC_-RPX04gFzVoYJvaU";

  userToken: any;

//*Crear nuevo Usuario 
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

//*Iniciar sesion Usuario  
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


constructor(private http: HttpClient) {
     this.leerToken();
  }

  logout(){
    localStorage.removeItem('token');
  }



//* Login 
login(usuario: UsuarioModel) {
  const authData = {
    ...usuario,
    returnSecureToken: true
  };
  return this.http
    .post(
      `${this.url}/accounts:signInWithPassword?key=${this.apikey}`,
      authData
    )
    .pipe(
      map(resp => {
        // console.log("Entro en el mapa del RXJS");
        this.guardarToken(resp["idToken"]);
        return resp;
      })
    );
}


//* Registro 
nuevoUsuario(usuario: UsuarioModel) {
  const authData = {
    ...usuario,
    returnSecureToken: true
  };
  return this.http
    .post(`${this.url}/accounts:signUp?key=${this.apikey}`, authData)

    .pipe(
      map(resp => {
        // console.log("Entro en el mapa del RXJS");
        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );
}


//* Guardar Token
  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem("token", idToken);

    /*let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem("expira", hoy.getTime().toString());*/
  }


//* Leer Token
  leerToken() {
    if (localStorage.getItem("token")) {
      this.userToken = localStorage.getItem("token");
    } else {
      this.userToken = "";
    }
    return this.userToken;
  }


//* Autenticado
estaAutenticado():boolean{
  return this.userToken.length>2;

      /*    if (this.userToken.length > 2) {
      return false;
    }

    const expira = Number(localStorage.getItem("expira"));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }*/

}


}
