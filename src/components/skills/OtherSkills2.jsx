// OtherSkills.js
import React from "react";

const OtherSkills = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Cybersecurity Concepts & Frameworks</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">NIST</h3>
              <span className="skills__level"><br></br> </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">CIS Controls</h3>
              <span className="skills__level"><br></br> </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Cyber Kill Chain</h3>
              <span className="skills__level"><br></br> </span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">MITRE ATT&CK</h3>
              <span className="skills__level"> </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Threat Detection and Analysis</h3>
              <span className="skills__level"> </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Digital Forensics</h3>
              <span className="skills__level"> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherSkills;
