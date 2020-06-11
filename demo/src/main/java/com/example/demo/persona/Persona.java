package com.example.demo.persona;

import javax.persistence.*;

@Entity
@Table(name = "persona")
public class Persona {
	@Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String name;
    @Column 
    private String apellido;
    
    public Persona() {
    	
    }
    
    public Persona(int id) {
    	this.id = id;
    }
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellidos(String apellido) {
		this.apellido = apellido;
	}
    
}
