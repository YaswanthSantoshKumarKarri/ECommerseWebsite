package com.example.productcart.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.productcart.entity.CartEntity;

import jakarta.transaction.Transactional;

@Transactional
public interface CartService {

//	Optional<CartEntity> getDataById(int id);

	CartEntity createProduct(CartEntity prodEntity);

	List<CartEntity> getAllData();

	Optional<CartEntity> getById(int id);

	CartEntity UpdateById(int id, CartEntity prodEntity);

	String DeleteById(int id);
}
