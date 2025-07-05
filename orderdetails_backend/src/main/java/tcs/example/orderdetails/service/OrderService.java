package tcs.example.orderdetails.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tcs.example.orderdetails.entity.OrderDetails;
import tcs.example.orderdetails.repository.OrderRepository;

@Service
public class OrderService {
	@Autowired
    private OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<OrderDetails> getAllOrders() {
        return orderRepository.findAll();
    }

    public List<OrderDetails> getOrdersByStatus(String status) {
        return orderRepository.findByStatusIgnoreCase(status);
    }

    public OrderDetails saveOrder(OrderDetails orderDetails) {
        return orderRepository.save(orderDetails);
    }
}
