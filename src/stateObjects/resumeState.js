const resumeStateModule = (() => {
  const initialResumeState = [
    {
      section: "personalDetails",
      // Note: Changed 'fields' to be an object for consistency, as a person has one set of details.
      fields: {
        fullname: "",
        email: "",
        phone: "",
        location: "",
        linkedin: ""
      }
    },
    {
      section: "educationalDetails",
      // 'fields' is an array here to allow for multiple education entries.
      fields: [{
        school: "",
        degree: "",
        fieldofstudy: "",
        startyear: "",
        endyear: ""
      }]
    }
  ];


  const addSection = (currentState, sectionName, fieldsTemplate) => {
    return currentState.map(section => {
      if (section.section === sectionName) {
        // Ensure the fields property is an array before trying to spread it.
        if (Array.isArray(section.fields)) {
          return {
            ...section,
            fields: [...section.fields, fieldsTemplate]
          };
        }
      }
      // If it's not the section we're looking for, return it unchanged.
      return section;
    });
  };

  return { initialResumeState, addSection };
})();

export default resumeStateModule;