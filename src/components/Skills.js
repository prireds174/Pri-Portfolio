import React from "react"
import {skills} from "../components/data/myskills"
import Cube from './Cube'
import './styles/skills.scss'

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                {/* <p>{skill.para}</p> */}
              </div>
            ))}
          </div>
          <div className="image-wrapper">
            <Cube />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills