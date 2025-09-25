function PersonalDetailsSection({personalDetails={
    fullname: "",
    email: "",
    phone: "",
    location: "",
    linkedin: ""
}}) {
    const { fullname, email, phone, location, linkedin } = personalDetails;
    return (
        <section>
            <h2>{fullname}</h2>
            <h5>{email} | {phone} | {location} | {linkedin}</h5>
        </section>
    )
}

export default PersonalDetailsSection;