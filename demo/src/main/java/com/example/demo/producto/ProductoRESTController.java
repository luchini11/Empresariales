package com.example.demo.producto;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"tiendaTolimita/demo/producto"})
public class ProductoRESTController {
	
	private ProductoService productoService;
	
	@Autowired
    public ProductoRESTController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @PostMapping
    public ResponseEntity<Producto> save(@RequestBody Producto producto){
        return ResponseEntity.ok().body(this.productoService.save(producto));
    }

    @GetMapping
    public ResponseEntity<List<Producto>> getAll(){
        return ResponseEntity.ok().body(this.productoService.getAll());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Producto> getById(@PathVariable("id") int id){
        return ResponseEntity.ok().body(this.productoService.getById(id));
    }

    @DeleteMapping(path = "/{id}")
    public Map<String, Boolean> delete(@PathVariable("id") int id){
        this.productoService.delete(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return response;
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<Producto> update(@PathVariable("id") int id, @RequestBody Producto producto){
        return ResponseEntity.ok().body(this.productoService.update(id,producto));
    }

}
