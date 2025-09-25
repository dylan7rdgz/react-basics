import CustomField from "./CustomField";
import "./CustomForm.css";

function CustomForm ({ formFieldData, section, index }) {
    const formFields = formFieldData.map(({id, key, labelText, inputType}) => {
        return <CustomField id={id} key={key} labelText={labelText} inputType={inputType} section={section} index={index}></CustomField>
    });
    return (
        <form className="custom-form">
            {formFields}
        </form>
    );
}

export default CustomForm;