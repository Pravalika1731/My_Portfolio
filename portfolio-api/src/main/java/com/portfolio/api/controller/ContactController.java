package com.portfolio.api.controller;

import com.portfolio.api.entity.Message;
import com.portfolio.api.repository.MessageRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final MessageRepository messageRepository;

    public ContactController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @PostMapping
    public ResponseEntity<String> submitContactForm(@RequestBody Message message) {
        messageRepository.save(message);
        return ResponseEntity.ok("Message securely saved!");
    }
}
