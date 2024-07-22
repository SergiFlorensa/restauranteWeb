package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.demo.entity.PlatosCarta;
import com.example.demo.service.MenuService;

@RestController
@RequestMapping("/api/platos")
@CrossOrigin(origins = "*", allowedHeaders = "")

public class MenuController {

	@Autowired
	private MenuService MenuService;

	@GetMapping
	public List<PlatosCarta> getAllPlatos() {
		return MenuService.findAll();
	}

	// Otros métodos del controlador según necesidad
}
