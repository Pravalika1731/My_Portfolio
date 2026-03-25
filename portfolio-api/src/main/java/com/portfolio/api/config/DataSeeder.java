package com.portfolio.api.config;

import com.portfolio.api.entity.Project;
import com.portfolio.api.repository.ProjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProjectRepository projectRepository;

    public DataSeeder(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Only seed data if the table is completely empty
        if (projectRepository.count() == 0) {
            
            Project p1 = new Project();
            p1.setTitle("Enterprise AI Chatbot with RAG");
            p1.setDescription("A custom, ChatGPT-like full-stack application leveraging Retrieval-Augmented Generation (RAG) to provide context-aware responses.");
            p1.setTechStack("React,Django REST Framework,LangChain,LangGraph,Pinecone,JWT");
            p1.setGithubLink("https://github.com/yourusername/ai-chatbot");

            Project p2 = new Project();
            p2.setTitle("LSTM Stock Price Predictor");
            p2.setDescription("A machine learning web application that forecasts stock market trends using an LSTM neural network model on the backend.");
            p2.setTechStack("Python,Django,React,Machine Learning (LSTM),Pandas");
            p2.setGithubLink("https://github.com/yourusername/stock-predictor");

            Project p3 = new Project();
            p3.setTitle("Multi-Role Content Management System");
            p3.setDescription("A comprehensive full-stack blog platform featuring granular multi-user roles, strict permission boundaries, and advanced search functionality.");
            p3.setTechStack("Django,PostgreSQL,HTML/CSS,Authentication,Search API");
            p3.setGithubLink("https://github.com/yourusername/django-blog");

            projectRepository.saveAll(List.of(p1, p2, p3));
            System.out.println("✅ Successfully seeded the database with your projects!");
        }
    }
}