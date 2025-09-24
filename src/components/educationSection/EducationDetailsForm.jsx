import CustomForm from "../customComponents/CustomForm";

function EducationDetailsForm() {
    const formFieldData = [
            { key: "field-school", id: "school", labelText: "School: ", inputType: "text" },
            { key: "field-degree", id: "degree", labelText: "Degree: ", inputType: "text" },
            { key: "field-fieldofstudy", id: "fieldofstudy", labelText: "Field of Study: ", inputType: "text" },
            { key: "field-startyear", id: "startyear", labelText: "Start Year: ", inputType: "number" },
            { key: "field-endyear", id: "endyear", labelText: "End Year: ", inputType: "number" }
    ]
    return (
        <CustomForm formFieldData={formFieldData} />
    );
}

export default EducationDetailsForm;