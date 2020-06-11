package com.example.demo.persona;




import com.example.demo.serviceExeption.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


@Service
public class PersonaServiceImplement implements PersonaService  {

	
	  
	    private PersonaRepositorio repositorio;
	  
	  @Autowired
	    public PersonaServiceImplement(PersonaRepositorio repositorio) {
	        this.repositorio = repositorio;
	    }

	    @Override
	    public Persona save(Persona persona) {
	        return this.repositorio.save(persona);
	    }

	    @Override
	    public List<Persona> getAll() {
	        return this.repositorio.findAll();
	    }

	    @Override
	    public Persona getById(int id) {
	        return this.repositorio.findById(id)
	                .orElseThrow(() -> new ResourceNotFoundException("Persona identificada con el  id: "+id+". Not found"));
	    }
	   @Override
		public Persona update(int id, Persona persona) {
			 Persona personaToUpdate = getById(id);
		        personaToUpdate.setName(persona.getName());
		        personaToUpdate.setApellidos(persona.getApellido());
				return save(personaToUpdate);
				}
		
	    @Override
		public void delete(int id) {
			 Persona personaToDelete = getById(id);
		        this.repositorio.delete(personaToDelete);
		        }
	
	}

	


