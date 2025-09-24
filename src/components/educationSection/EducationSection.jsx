import { useState } from 'react';
import EducationDetailsForm from './EducationDetailsForm';
import Button from '../customComponents/Button';
import getComponentList from '../../utilities/getComponentList';


function EducationSection() {
    const [eduSectionCount, updateEduSectionCount] = useState(1);
    return (
        <section>
            {getComponentList(eduSectionCount, EducationDetailsForm)}
            <Button 
                onClick={() => {
                    updateEduSectionCount(eduSectionCount + 1);
                }} 
                text="Add Education"
            />
        </section>
    );
}

export default EducationSection;