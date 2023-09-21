import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Model/Producto';
import { Proveedor } from '../Model/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  [x: string]: any;

  constructor(private http:HttpClient) { }

  //apis producto
  //apis producto
  UrlProductoIndex='https://localhost:7023/api/productos';
  UrlProductoShow='https://localhost:7023/api/productos/';
  UrlProductoCreate='https://localhost:7023/api/productos';
  UrlProductoUpdate='https://localhost:7023/api/productos/';
  UrlProductoDelete='https://localhost:7023/api/productos//';

  //apis proveedor
  UrlIndexProveedor = 'http://localhost:8080/proveedor/index';

  getProductos(){
    return this.http.get<Producto[]>(this.UrlProductoIndex);
  }

  getProveedores(){
    return this.http.get<Proveedor[]>(this.UrlIndexProveedor);
  }

  getProductoById(id:number){
    return this.http.get<Producto>(this.UrlProductoShow+id);
  }

  createProductos(producto:Producto){
    return this.http.post<Producto>(this.UrlProductoCreate, producto)
  }

  updateProductos(producto:Producto){
    return this.http.put<Producto>(this.UrlProductoUpdate+producto.id_producto, producto);
  }

  deleteProductos(id:number){
    return this.http.delete<string>(this.UrlProductoDelete+id, {responseType: 'text' as 'json'});
  }
  
}
