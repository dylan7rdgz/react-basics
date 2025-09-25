import { useState, useContext } from 'react';
import EducationDetailsForm from './EducationDetailsForm';
import Button from '../customComponents/Button';
import getComponentList from '../../utilities/getComponentList';
import resumeStateModule from '../../stateObjects/resumeState.js';
import ResumeStateContext from '../../contexts/ResumeStateContext.js';


function EducationSection() {
    const [eduSectionCount, updateEduSectionCount] = useState(1);
    const { state, setState } = useContext(ResumeStateContext);

    return (
        <section>
            {getComponentList(eduSectionCount, EducationDetailsForm)}
            <Button 
                onClick={() => {
                    updateEduSectionCount(eduSectionCount + 1);
                    const newState = resumeStateModule.addSection(
                        state, 
                        "educationalDetails", {
                        school: "",
                        degree: "",
                        fieldofstudy: "",
                        startyear: "",
                        endyear: ""
                    });
                    setState(newState);
                }} 
                text="Add Education"
            />
        </section>
    );
}

export default EducationSection;