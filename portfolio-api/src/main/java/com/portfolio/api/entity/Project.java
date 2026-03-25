package com.portfolio.api.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "projects")
@Data
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    // We will store this as a comma-separated string (e.g., "React, Django, Python")
    @Column(name = "tech_stack")
    private String techStack;

    @Column(name = "github_link")
    private String githubLink;

    @Column(name = "live_link")
    private String liveLink;
}