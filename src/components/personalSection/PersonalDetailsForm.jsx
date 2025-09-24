import CustomForm from "../customComponents/CustomForm.jsx";

function PersonalDetailsForm() {
    const formFieldData = [
        { key: "field-fullname", id: "fullname", labelText: "Full Name: ", inputType: "text" },
        { key: "field-email", id: "email", labelText: "Email: ", inputType: "email" },
        { key: "field-phone", id: "phone", labelText: "Phone Number: ", inputType: "tel" },
        { key: "field-location", id: "location", labelText: "Location: ", inputType: "text" },
        { key: "field-linkedin", id: "linkedin", labelText: "LinkedIn: ", inputType: "url" }
    ];

    return (
        <div>
            <CustomForm formFieldData={formFieldData} />
        </div>
    );
}

export default PersonalDetailsForm;