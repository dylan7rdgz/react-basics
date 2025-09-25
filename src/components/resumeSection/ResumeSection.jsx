import EducationDetailsSection from "./EducationDetailsSection.jsx";
import PersonalDetailsSection from "./PersonalDetailsSection.jsx";

function ResumeSection({resumeState}) {
    const personalDetailsSection = resumeState.find(section => section.section === "personalDetails");
    const educationDetailsSection = resumeState.find(section => section.section === "educationDetails");
    const personalDetailsFields = personalDetailsSection ? personalDetailsSection.fields : {};
    const educationDetailsFields = educationDetailsSection ? educationDetailsSection.fields : [];

   return (
       <section>
            <PersonalDetailsSection personalDetails={personalDetailsFields}/>
            {educationDetailsFields.map((education, index) => (
                <EducationDetailsSection 
                    key={index} 
                    educationDetails={education}
                />
            ))}
       </section>
    );
}

export default ResumeSection;
