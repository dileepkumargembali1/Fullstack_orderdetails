package tcs.example.orderdetails.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tcs.example.orderdetails.entity.OrderDetails;

public interface OrderRepository extends JpaRepository<OrderDetails, Long> {
    List<OrderDetails> findByStatusIgnoreCase(String status);
}
