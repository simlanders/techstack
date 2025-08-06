package com.techstack.backend.controllers;

import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	@GetMapping("/test")
	public ResponseEntity <List<String>> test(){
		return ResponseEntity.ok(Arrays.asList("Test 1", "Test 2"));
	}
}