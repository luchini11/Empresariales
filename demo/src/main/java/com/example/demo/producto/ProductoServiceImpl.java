package com.example.demo.producto;


import com.example.demo.serviceExeption.ResourceNotFoundException;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoServiceImpl implements  ProductoService {
	
	 private ProductoRepository productoRepository;

	   
	    
	    @Autowired
	    public ProductoServiceImpl(ProductoRepository productoRepository) {
	        this.productoRepository = productoRepository;
	    }

		@Override
		public Producto save(Producto producto) {
			
			return this.productoRepository.save(producto);
		}

		@Override
		public List<Producto> getAll() {
			return this.productoRepository.findAll();
		}

		@Override
		public Producto getById(int id) {
			return this.productoRepository.findById(id)
	                .orElseThrow(() -> new ResourceNotFoundException("producto identificado con el  id: "+id+". Not Found"));
		}

		@Override
		public Producto update(int id, Producto producto) {
			 Producto productoToUpdate = getById(id);
		        productoToUpdate.setName(producto.getName());
		        productoToUpdate.setPrecio(producto.getPrecio());
		        productoToUpdate.setCantidad(producto.getCantidad());
		        return save(productoToUpdate);
		}

		@Override
		public void delete(int id) {
			 Producto productoToDelete = getById(id);
		        this.productoRepository.delete(productoToDelete);
			
		}
	    
	    

}
