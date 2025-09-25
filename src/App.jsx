import './App.css'
import { useState } from 'react';
import EducationSection from './components/educationSection/EducationSection.jsx';
import PersonalDetailsSection from './components/personalSection/PersonalDetailsSection.jsx';
import ResumeSection from './components/resumeSection/ResumeSection.jsx';

/* Initial State Data */
import resumeStateModule from './stateObjects/resumeState.js';

/* Contexts */
import ResumeStateContext from './contexts/ResumeStateContext.js';


function App() {
  const [state, setState] = useState(resumeStateModule.initialResumeState);
  return (
    <div className='container-grid'>
      <div>
        <ResumeStateContext.Provider value={{state, setState}}>
          <PersonalDetailsSection />
          <EducationSection />
        </ResumeStateContext.Provider>
      </div>
      <div>
        <ResumeSection resumeState={state}/>
      </div>
    </div>
  )
}

export default App
