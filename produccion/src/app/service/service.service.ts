import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient) { }

   readonly Url='http://localhost:8080/tiendaTolimita/demo/producto';

  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }

  createProducto(producto:Producto){
    return this.http.post<Producto>(this.Url,producto);
  }

  getProductosId(id:number){
    return this.http.get<Producto>(this.Url+"/"+id);
  }
  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.Url+"/"+producto.id,producto);
  }
  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.Url+"/"+producto.id)
  }
}
