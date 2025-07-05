package tcs.example.orderdetails.entity;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
public class OrderDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String orderId;
    private String customer;
    private String orderItem;
    private LocalDate deliveryDate;
    private Double deliveryPricing;
    private String status;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public String getCustomer() {
		return customer;
	}
	public void setCustomer(String customer) {
		this.customer = customer;
	}
	public String getOrderItem() {
		return orderItem;
	}
	public void setOrderItem(String orderItem) {
		this.orderItem = orderItem;
	}
	public LocalDate getDeliveryDate() {
		return deliveryDate;
	}
	public void setDeliveryDate(LocalDate deliveryDate) {
		this.deliveryDate = deliveryDate;
	}
	public Double getDeliveryPricing() {
		return deliveryPricing;
	}
	public void setDeliveryPricing(Double deliveryPricing) {
		this.deliveryPricing = deliveryPricing;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public OrderDetails(Long id, String orderId, String customer, String orderItem, LocalDate deliveryDate,
			Double deliveryPricing, String status) {
		super();
		this.id = id;
		this.orderId = orderId;
		this.customer = customer;
		this.orderItem = orderItem;
		this.deliveryDate = deliveryDate;
		this.deliveryPricing = deliveryPricing;
		this.status = status;
	}
	public OrderDetails() {
	
	}
    
    
}