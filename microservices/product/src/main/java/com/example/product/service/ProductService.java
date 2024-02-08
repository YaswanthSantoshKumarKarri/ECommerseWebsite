package com.example.product.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.product.entity.ProductEntity;

import jakarta.transaction.Transactional;

@Transactional
public interface ProductService {

	ProductEntity createProduct(ProductEntity prodEntity);

	List<ProductEntity> getAllData();

	ProductEntity UpdateById(int id, ProductEntity prodEntity);

	String DeleteById(int id);

	Optional<ProductEntity> getById(int id);

}
