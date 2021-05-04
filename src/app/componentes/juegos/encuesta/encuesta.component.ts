import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators }  from '@angular/forms';
import { FormularioService } from 'src/app/servicios/formulario.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {


  collection = {count:60, data:[]};

  public forma: FormGroup;

  public constructor(private fb: FormBuilder,private fbForm :FormularioService) {}

  public nombreUser = localStorage.getItem('email');

  ngOnInit(): void {


       this.fbForm.getUserGame().subscribe(resp=>{
       this.collection.data = resp.map((e:any)=>{
         return {
           nombre:e.payload.doc.data().nombre,
           apellido:e.payload.doc.data().apellido,
           edad:e.payload.doc.data().edad,
           telefono:e.payload.doc.data().telefono,
           juego:e.payload.doc.data().juego,
           sexo:e.payload.doc.data().sexo,
           opinion:e.payload.doc.data().opinion,
           user:e.payload.doc.data().user,

         }
       })
     },
       error=>{
         console.error(error);
       }
     );



    // **************************** //
    // ******* MANERA 1 *********** //
    // **************************** //

    // this.forma = new FormGroup({ 
    //   'nombre': new FormControl(''),
    //   'apellido': new FormControl(''),
    //   'dni': new FormControl(''),
    //   'sexo': new FormControl(''),
    //   'email': new FormControl(''),
    //   'terminos': new FormControl('')
    // });

    // **************************** //
    // ******* MANERA 2 *********** //
    // **************************** //

    this.forma = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      'sexo': ['', Validators.required],
      'telefono': ['', [Validators.required, Validators.max(9999999999)]],
      'juego': ['', Validators.required],
      'terminos': ['', Validators.required],
      'opinion': ['', Validators.required],
      'user': ['', Validators.required]
    });
  }

  public aceptar(): void {
    console.log(this.forma.getRawValue());
     this.fbForm.crearUserGame(this.forma.getRawValue()).then(resp=>{
       console.log(resp);
     }).catch(error=>{
       console.error(error);
     })
  }

  // CUSTOM VALIDATOR
  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null; 
  }





}
