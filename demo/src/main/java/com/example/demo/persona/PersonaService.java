package com.example.demo.persona;

import java.util.List;

import org.springframework.stereotype.Service;


@Service
public interface PersonaService {
	
	public Persona save(Persona persona);

    public List<Persona> getAll();

    public Persona getById(int id);

	 public Persona update(int id, Persona persona);
	 
	 public void delete(int id);

}
