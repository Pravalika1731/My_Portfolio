package com.portfolio.api.controller;

import com.portfolio.api.entity.Project;
import com.portfolio.api.repository.ProjectRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:5173") // Allow React to fetch the data
public class ProjectController {

    private final ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @GetMapping
    public List<Project> getAllProjects() {
        // Fetches all projects from the PostgreSQL database
        return projectRepository.findAll();
    }
}
