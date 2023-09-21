import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  nombre = "Luis";
  apellido = "Lignia";
  //al poner private solo se puede leer desde esta clase EmpleadoComponent
  //private edad = 25;
  edad = 25;

  /*getEdad(){ 
    return this.edad;
  }*/
  llamarEmpresa(value:String){
    
  }
}
