// Skills.js
import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import OtherSkills from "./OtherSkills"; // Import the new component
import OtherSkills2 from "./OtherSkills2";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <OtherSkills /> 
        <OtherSkills2 />
      </div>
    </section>
  );
};

export default Skills;
