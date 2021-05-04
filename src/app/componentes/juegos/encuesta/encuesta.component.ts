import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators }  from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {



  public forma: FormGroup;

  public constructor(private fb: FormBuilder) {}

  public nombreUser = localStorage.getItem('email');

  ngOnInit(): void {

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
