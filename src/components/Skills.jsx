import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      name: 'Programming',
      description: 'Proficient in writing clean, efficient code in multiple languages.',
      tools: ['JavaScript', 'Python', 'Java', 'C++'],
    },
    {
      name: 'Web Development',
      description: 'Building responsive, dynamic web applications with modern frameworks.',
      tools: ['React', 'HTML5', 'CSS3', 'Node.js'],
    },
    {
      name: 'Data Structures & Algorithms',
      description: 'Strong understanding of fundamental data structures and algorithm design.',
      tools: ['Arrays', 'Linked Lists', 'Trees', 'Sorting & Searching'],
    },
    {
      name: 'Databases',
      description: 'Experience with designing and querying relational and NoSQL databases.',
      tools: ['MySQL', 'MongoDB', 'SQL'],
    },
    {
      name: 'Version Control',
      description: 'Managing codebases and collaboration using version control systems.',
      tools: ['Git', 'GitHub'],
    },
    {
      name: 'Problem Solving',
      description: 'Analytical skills for tackling complex technical challenges.',
      tools: ['Debugging', 'Optimization', 'Logical Reasoning'],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-tools">
                {skill.tools.map((tool, toolIndex) => (
                  <span key={toolIndex} className="tool-tag">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;