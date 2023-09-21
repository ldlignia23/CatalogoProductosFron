import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Model/Producto';
import { Proveedor } from 'src/app/Model/Proveedor';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  proveedores!:Proveedor[];
  productos:Producto = new Producto();

  constructor(private router:Router, private service:ServiceService){}

  ngOnInit(): void {
    this.service.getProveedores().subscribe(
      data=>{
        this.proveedores=data;
      }
    );

    this.ShowData();
  }

  ShowData(){
    let id = Number(localStorage.getItem("id") || "");
    this.service.getProductoById(id).subscribe(
      data=>{
        this.productos=data;
      }
    )
  }

  Actualizar(producto:Producto){
    this.service.updateProductos(producto).subscribe(
      data=>{
        this.productos=data;
        alert("Producto actualizado exitosamente");
        this.router.navigate(["listar"]);
      }
    )
  }
}
