package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.PlatosCarta;
import com.example.demo.repository.PlatosCartaRepository;

@Service
public class MenuService {

    @Autowired
    private PlatosCartaRepository platoCartaRepository;

    public List<PlatosCarta> findAll() {
        return platoCartaRepository.findAll();
    }

    // Otros métodos del servicio según necesidad
}
