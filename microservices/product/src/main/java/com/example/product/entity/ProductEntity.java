package com.example.product.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name="product")
public class ProductEntity {

	@Id
	private int id;
	private String name;
	private float productPrice;
	
	public ProductEntity(int id, String name, float productPrice) {
		super();
		this.id = id;
		this.name = name;
		this.productPrice = productPrice;
	}
	public ProductEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(float productPrice) {
		this.productPrice = productPrice;
	}
	
	
}

