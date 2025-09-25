function EducationDetailsSection({educationDetails={
    school:"",
    degree:"",
    fieldofstudy:"",
    startyear:"",
    endyear:""
}}) {
    const { school, degree, fieldofstudy, startyear, endyear } = educationDetails;
    return (
        <section>
            <h2>{school}</h2>
            <h5>{degree} in {fieldofstudy}</h5>
            <h5>{startyear} - {endyear}</h5>
        </section>
    )
}

export default EducationDetailsSection;