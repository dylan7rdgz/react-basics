import CustomInput from "./CustomInput";
import CustomLabel from "./CustomLabel";
import './CustomField.css';
import ResumeStateContext from '../../contexts/ResumeStateContext.js';
import { useContext } from "react";

function CustomField({ id, labelText, inputType, section, index }) {
    const { state: resumeState, setState: setResumeState } = useContext(ResumeStateContext);

    const handleChange = (e) => {
        const { id, value } = e.target;

        setResumeState(prevState => 
            // Create a new array by mapping over the previous state
            prevState.map(currentSection => {
                // If it's not the section we're editing, return it unchanged
                if (currentSection.section !== section) {
                    return currentSection;
                }

                // Handle if 'fields' is an array (like in educationalDetails)
                if (Array.isArray(currentSection.fields)) {
                    // Use the index to update the correct object in the fields array
                    const newFields = [...currentSection.fields];
                    newFields[index] = {
                        ...newFields[index],
                        [id]: value
                    };
                    return { ...currentSection, fields: newFields };
                }

                // Handle if 'fields' is an object (like in personalDetails)
                else {
                    return {
                        ...currentSection,
                        fields: {
                            ...currentSection.fields,
                            [id]: value
                        }
                    };
                }
            })
        );
    }

    return (
        <div className="custom-field-container">
            <CustomLabel className="custom-field-label" labelFor={id} labelText={labelText}></CustomLabel>
            <CustomInput className="custom-field-input" id={id} inputType={inputType} onChange={handleChange}></CustomInput>
        </div>
    )
}

export default CustomField;