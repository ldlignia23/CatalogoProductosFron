import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Model/Producto';
import { Proveedor } from 'src/app/Model/Proveedor';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService){}

  productos: Producto = new Producto();
  proveedores!:Proveedor[];
  
  Guardar(){
    this.service.createProductos(this.productos).subscribe(
      data=>{
        alert("Producto creado exitosamente!");
        this.router.navigate(['listar']);
      }
    )
  }

  ngOnInit(): void {
      this.service.getProveedores().subscribe(
        data=>{
          this.proveedores=data;
        }
      )
  }
}
