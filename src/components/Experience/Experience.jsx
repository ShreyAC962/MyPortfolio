import React from "react";

import styles from "./Experience.module.css";

import history from "../../data/history.json";
import { getImageUrl } from "../../utils";


export const Experience = () => {
  const skillCategories = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C++", "C", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React", "React Native", "Next.js", "Flutter", "Node.js",
      "Spring", "Spring MVC", "Spring Boot", "Hibernate", "Spring Data JPA",
      "Microservices", "REST API", "GraphQL", "Pandas", "NumPy", "PyTorch", "TensorFlow",
    ],
  },
  {
    category: "Cloud, DevOps & Big Data",
    items: [
      "AWS", "Firebase", "Kubernetes",
      "Docker", "Jenkins", "Maven", "Git", "Apache Spark", "Hadoop",
      "Kafka", "Elasticsearch", "OpenAPI/Swagger", "OAuth2/JWT",
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      "MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Cassandra",
      "Redis", "Database Design", "JUnit", "Mockito", "CI/CD Pipelines",
    ],
  },
];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
          
                <section className={styles.skillsWrapper}>
      {skillCategories.map(({ category, items }, idx) => (
        <div key={idx} className={styles.skillCategory}>
          <h3 className={styles.categoryTitle}>{category}</h3>
          <div className={styles.skillList}>
            {items.map((skill, id) => (
              <span key={id} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
        
        <br />

        <h2 className={styles.title}>Experience</h2>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
