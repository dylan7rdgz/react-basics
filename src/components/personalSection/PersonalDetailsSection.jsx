import { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import Button from '../customComponents/Button';
import getComponentList from '../../utilities/getComponentList';


function PersonalDetailsSection({updateGlobalState}) {
    const [pdSectionCount, updatePdSectionCount] = useState(1);
    return (
        <section>
            {getComponentList(pdSectionCount, PersonalDetailsForm, updateGlobalState)}
            {/*getComponentList(pdSectionCount, PersonalDetailsForm, { updateGlobalState })*/}
            {/*<Button 
                onClick={() => {
                    updatePdSectionCount(pdSectionCount + 1);
                }} 
                text="Add Personal Details"
            />*/}
        </section>
    );
}

export default PersonalDetailsSection;