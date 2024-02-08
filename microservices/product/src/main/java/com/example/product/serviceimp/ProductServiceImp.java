package com.example.product.serviceimp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.product.entity.ProductEntity;
import com.example.product.repo.ProductRepo;
import com.example.product.service.ProductService;

@Service
public class ProductServiceImp implements ProductService {

	@Autowired
	private ProductRepo prorep;
	
	@Override
	public ProductEntity createProduct(ProductEntity prodEntity) {
		prorep.save(prodEntity);
		return prodEntity;
	}

	@Override
	public List<ProductEntity> getAllData() {
		return prorep.findAll();
	}

	@Override
	public ProductEntity UpdateById(int id, ProductEntity prodEntity) {
		if(prodEntity.getId()==id) {
			return prorep.save(prodEntity);
		}
		return null;
	}

	@Override
	public String DeleteById(int id) {
		Optional<ProductEntity> tf=prorep.findById(id);
		if(!tf.isEmpty()) {
			prorep.deleteById(id);
			return "success";
		}return null;
		
	}

	@Override
	public Optional<ProductEntity> getById(int id) {
		Optional<ProductEntity> tf=prorep.findById(id);
		if(!tf.isEmpty()) {
			return tf;
		}return null;
	}

}
