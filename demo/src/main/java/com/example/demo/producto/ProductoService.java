package com.example.demo.producto;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductoService {
	
	public Producto save(Producto producto);

    public List<Producto> getAll();

    public Producto getById(int id);

    public Producto update(int id, Producto producto);

    public void delete(int id);

}
