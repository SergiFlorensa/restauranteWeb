package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.PlatosCarta;

public interface PlatosCartaRepository extends JpaRepository<PlatosCarta, Long> {
    // Métodos específicos del repositorio, si los necesitas
}
