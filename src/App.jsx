import './App.css'
import EducationSection from './components/educationSection/EducationSection.jsx';
import PersonalDetailsSection from './components/personalSection/PersonalDetailsSection.jsx';
import ResumeSection from './components/resumeSection/ResumeSection.jsx';

function App() {
  return (
    <>
      <div>
        <PersonalDetailsSection/>
        <EducationSection/>
        <ResumeSection/>
      </div>
    </>
  )
}

export default App
