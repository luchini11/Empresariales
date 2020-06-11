package com.example.demo.persona;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping({"tiendaTolimita/demo/persona"})
public class PersonaRESTController {
	
	 private PersonaService personaService;

	    @Autowired
	    public PersonaRESTController(PersonaService personaService) {
	        this.personaService = personaService;
	    }

	    @PostMapping
	    public ResponseEntity<Persona> save(@RequestBody Persona persona){
	        return ResponseEntity.ok().body(this.personaService.save(persona));
	    }

	    @GetMapping
	    public ResponseEntity<List<Persona>> getAll(){
	        return ResponseEntity.ok().body(this.personaService.getAll());
	    }

	    @GetMapping(path = "/{id}")
	    public ResponseEntity<Persona> getById(@PathVariable("id") int id){
	        return ResponseEntity.ok().body(this.personaService.getById(id));
	    }
	    
	    @DeleteMapping(path = "/{id}")
	    public Map<String, Boolean> delete(@PathVariable("id") int id){
	        this.personaService.delete(id);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("Deleted", Boolean.TRUE);
	        return response;
	    }
	    
	    @PutMapping(path = "/{id}")
	    public ResponseEntity<Persona> update(@PathVariable("id") int id, @RequestBody Persona persona){
	        return ResponseEntity.ok().body(this.personaService.update(id,persona));
	    }
	
	
	
}
