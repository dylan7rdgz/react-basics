import CustomForm from "../customComponents/CustomForm";

function EducationDetailsForm({index=0}) {
    const formFieldData = [
            { key: "field-school", id: "school", labelText: "School: ", inputType: "text", section: "education" },
            { key: "field-degree", id: "degree", labelText: "Degree: ", inputType: "text", section: "education" },
            { key: "field-fieldofstudy", id: "fieldofstudy", labelText: "Field of Study: ", inputType: "text", section: "education" },
            { key: "field-startyear", id: "startyear", labelText: "Start Year: ", inputType: "number", section: "education" },
            { key: "field-endyear", id: "endyear", labelText: "End Year: ", inputType: "number", section: "education"}
    ]
    return (
        <CustomForm formFieldData={formFieldData} section="educationalDetails" index={index}/>
    );
}

export default EducationDetailsForm;