package com.example.product.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.product.entity.ProductEntity;
import com.example.product.service.ProductService;

@RestController
@RequestMapping("/ProductInfo")
public class ProductController {
	
	@Autowired
	private ProductService prodserv;
	
	@PostMapping("/post")
	public ResponseEntity<ProductEntity> create(@RequestBody ProductEntity prodEntity) {
		ProductEntity pe=prodserv.createProduct(prodEntity);
		return  ResponseEntity.status(HttpStatus.CREATED).body(pe);
		
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List< ProductEntity>> getAllData() {
		List<ProductEntity> ls=prodserv.getAllData();
		return ResponseEntity.status(HttpStatus.FOUND).body(ls);
	}
	@GetMapping("/getById/{id}")
	public ResponseEntity<Optional<ProductEntity>> getById(@PathVariable int id) {
		Optional<ProductEntity> pe=prodserv.getById(id);
		return ResponseEntity.status(HttpStatus.FOUND).body(pe);
	}
	@PutMapping("/update/{id}")
	public ResponseEntity<ProductEntity> UpdateById(@PathVariable int id, @RequestBody ProductEntity prodEntity) {
		ProductEntity pe=prodserv.UpdateById(id,prodEntity);
		return ResponseEntity.status(HttpStatus.OK).body(pe);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> DeleteById(@PathVariable int id) {
		String pe=prodserv.DeleteById(id);
		if(pe!=null) {
			return ResponseEntity.status(HttpStatus.OK).body(pe);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}
}
