import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Model/Producto';
import { Proveedor } from 'src/app/Model/Proveedor';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  productos!: Producto[]; 
  proveedores!:Proveedor[];

  constructor(private http:ServiceService, private router:Router){}

  Editar(producto:Producto){
    localStorage.setItem("id", producto.id_producto.toString());
    this.router.navigate(["editar"]);
  }

  Eliminar(producto:Producto):void{
    this.http.deleteProductos(producto.id_producto).subscribe(
      data=>{
        this.http.getProductos().subscribe(
          response=>{this.productos=response;}
        )
      }
    );
  }

  ngOnInit(): void {
    this.http.getProductos().subscribe(
      data=>{
        this.productos=data;
    });

    this.http.getProveedores().subscribe(
      data=>{
        this.proveedores=data;
      }
    );
  }
}
