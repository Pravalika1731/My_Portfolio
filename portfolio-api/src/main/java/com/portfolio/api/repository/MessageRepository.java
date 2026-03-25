package com.portfolio.api.repository;

import com.portfolio.api.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

// <-- Changed the second parameter from Long to Integer!
public interface MessageRepository extends JpaRepository<Message, Integer> {
}