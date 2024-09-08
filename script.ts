const popUpContainer = document.querySelector(
  ".popup-container"
) as HTMLDivElement | null;

document.querySelector(".resume-form")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const profilePicture = document.querySelector(
    "#profile-picture"
  ) as HTMLInputElement | null;
  const nameInput = document.querySelector("#name") as HTMLInputElement | null;
  const emailInput = document.querySelector(
    "#email"
  ) as HTMLInputElement | null;
  const phoneInput = document.querySelector(
    "#phone"
  ) as HTMLInputElement | null;
  const educationInput = document.querySelector(
    "#education"
  ) as HTMLTextAreaElement | null;
  const skillsInput = document.querySelector(
    "#skills"
  ) as HTMLTextAreaElement | null; // Corrected ID
  const experienceInput = document.querySelector(
    "#experience"
  ) as HTMLTextAreaElement | null;

  if (
    profilePicture &&
    nameInput &&
    emailInput &&
    phoneInput &&
    educationInput &&
    skillsInput &&
    experienceInput
  ) {
    const userName = nameInput.value;
    const userEmail = emailInput.value;
    const userPhone = phoneInput.value;
    const userEducation = educationInput.value;
    const userSkills = skillsInput.value;
    const userExperience = experienceInput.value;

    const profilePictureFile = profilePicture.files?.[0];
    const profilePictureURL = profilePictureFile
      ? URL.createObjectURL(profilePictureFile)
      : "";

    const resumeOutput = `
        <h2>Resume</h2>
        ${
          profilePictureURL
            ? `<img src="${profilePictureURL}" alt="Profile Picture" class="picture">`
            : ""
        }
        <p><strong>Name: </strong>${userName}</p>
        <p><strong>Email: </strong>${userEmail}</p>
        <p><strong>Phone: </strong>${userPhone}</p>
        
        <h3>Education</h3>
        <p>${userEducation}</p>
        
        <h3>Skills</h3>
        <p>${userSkills}</p>
        
        <h3>Experience</h3>
        <p>${userExperience}</p>
        `;

    const resumeOutputElement = document.querySelector(
      ".output"
    ) as HTMLDivElement | null;
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
    } else {
      console.error("The resume elements are missing.");
    }
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    educationInput.value = "";
    skillsInput.value = "";
    experienceInput.value = "";
    profilePicture.value = "";

  } else {
    console.error("One or more elements are missing.");
  }
});
