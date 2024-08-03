import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Technical Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {
            <div>
              <h1 className={styles.title1}>
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;Education/Academics
              </h1>
              <br></br>
              <ul>
                <li>
                  <h2>
                    {" "}
                    Computer Science and Engineering|Guru Tegh Bahadur Institute
                    of Technology (GGSIPU) , Delhi{" "}
                  </h2>
                  <h3>CGPA:&nbsp;9.2(2020-2024)</h3>
                </li>
                <br></br>
                <br></br>
                <li>
                  <h2>
                    XII(CBSE) | Maharaja Agarsain Public School, Delhi
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 81%|2020
                  </h2>
                </li>
                <br></br>
                <br></br>
                <li>
                  <h2>
                    XII(CBSE) | Guru Angad Public School, Delhi &nbsp;&nbsp;
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    82%|2018
                  </h2>
                </li>
              </ul>
            </div>
          }
        </ul>
      </div>
    </section>
  );
};
