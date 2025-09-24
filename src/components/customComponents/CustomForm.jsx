import CustomField from "./CustomField";
import "./CustomForm.css";

function CustomForm ({ formFieldData }) {
    const formFields = formFieldData.map(({id, key, labelText, inputType}) => {
        return <CustomField id={id} key={key} labelText={labelText} inputType={inputType}></CustomField>
    });
    return (
        <form className="custom-form">
            {formFields}
        </form>
    );
}

export default CustomForm;