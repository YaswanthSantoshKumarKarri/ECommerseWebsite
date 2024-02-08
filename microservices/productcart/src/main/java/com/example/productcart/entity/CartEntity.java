package com.example.productcart.entity;

import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartEntity {

	@Id
	private int id;
	private int quantity;
	private LocalDateTime delivery_date; 
	private float product_price;
	private float discount;
	private float delivery_charges;
	private float totalAmount;
	
	
}