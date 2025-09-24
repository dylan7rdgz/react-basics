import CustomInput from "./CustomInput";
import CustomLabel from "./CustomLabel";
import './CustomField.css';

function CustomField({ id, labelText, inputType }) {
    return (
        <div className="custom-field-container">
            <CustomLabel className="custom-field-label" labelFor={id} labelText={labelText}></CustomLabel>
            <CustomInput className="custom-field-input" id={id} inputType={inputType}></CustomInput>
        </div>
    )
}

export default CustomField;