function SkillsList() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
  ];

  return (
    <div className="skills-list">
      <h2>Skills</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;