package com.example.demo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "platos_carta")
@Data // Anotación Lombok para generar getters, setters, equals, hashCode y toString
@NoArgsConstructor // Constructor sin argumentos para JPA
public class PlatosCarta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String categoria;
    
    private String nombre;
    
    private String descripcion;
    
    private Double precio;
}
