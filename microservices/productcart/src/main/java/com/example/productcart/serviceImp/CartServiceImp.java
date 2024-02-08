package com.example.productcart.serviceImp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.productcart.entity.CartEntity;
import com.example.productcart.repository.CartRepository;
import com.example.productcart.service.CartService;

@Service
public class CartServiceImp implements CartService{

	@Autowired
	private CartRepository cartrepo;

	@Override
	public CartEntity createProduct(CartEntity prodEntity) {
		cartrepo.save(prodEntity);
		return prodEntity;
	}

	@Override
	public List<CartEntity> getAllData() {
		return cartrepo.findAll();
	}

	@Override
	public CartEntity UpdateById(int id, CartEntity cartEntity) {
		if(cartEntity.getId()==id) {
			return cartrepo.save(cartEntity);
		}
		return null;
	}

	@Override
	public String DeleteById(int id) {
		Optional<CartEntity> tf=cartrepo.findById(id);
		if(!tf.isEmpty()) {
			cartrepo.deleteById(id);
			return "success";
		}return null;
		
	}

	@Override
	public Optional<CartEntity> getById(int id) {
		Optional<CartEntity> tf=cartrepo.findById(id);
		if(!tf.isEmpty()) {
			return tf;
		}return null;
	}
	
	
}
