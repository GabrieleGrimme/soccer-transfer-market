import { useState } from 'react';
import Tags from './Tags';

function App() {
  const [skills, setSkills] = useState([]);
  
  function updateSkills(newSkill) {
    setSkills([...skills, newSkill.toUpperCase()]);
  }
  function deleteSkill(skillToDelete) {
    const skillsToKeep = skills.filter((skill) => skill !== skillToDelete);
    setSkills(skillsToKeep);
  }
  return (
    <div>
      <form>
        <Tags
          tags={skills}
          onUpdateTags={updateSkills}
          onDeleteTag={deleteSkill}
        />
      </form>
    </div>
  );
}
export default App;