import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <a href={source} target="_blank" rel="noreferrer" className={styles.cardLink}>
  <div className={styles.container}>
    <div className={styles.imageWrapper}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
    </div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <ul className={styles.skills}>
      {skills.map((skill, id) => (
        <li key={id} className={styles.skill}>
          {skill}
        </li>
      ))}
    </ul>
    <div className={styles.links}>
      <span className={styles.link}>Source</span> {/* Changed to span to avoid nested <a> */}
    </div>
  </div>
</a>
  );
};

