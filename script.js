var _a;
var popUpContainer = document.querySelector(".popup-container");
(_a = document.querySelector(".resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePicture = document.querySelector("#profile-picture");
    var nameInput = document.querySelector("#name");
    var emailInput = document.querySelector("#email");
    var phoneInput = document.querySelector("#phone");
    var educationInput = document.querySelector("#education");
    var skillsInput = document.querySelector("#skills"); // Corrected ID
    var experienceInput = document.querySelector("#experience");
    if (profilePicture &&
        nameInput &&
        emailInput &&
        phoneInput &&
        educationInput &&
        skillsInput &&
        experienceInput) {
        var userName = nameInput.value;
        var userEmail = emailInput.value;
        var userPhone = phoneInput.value;
        var userEducation = educationInput.value;
        var userSkills = skillsInput.value;
        var userExperience = experienceInput.value;
        var profilePictureFile = (_a = profilePicture.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"picture\">")
            : "", "\n        <p><strong>Name: </strong>").concat(userName, "</p>\n        <p><strong>Email: </strong>").concat(userEmail, "</p>\n        <p><strong>Phone: </strong>").concat(userPhone, "</p>\n        \n        <h3>Education</h3>\n        <p>").concat(userEducation, "</p>\n        \n        <h3>Skills</h3>\n        <p>").concat(userSkills, "</p>\n        \n        <h3>Experience</h3>\n        <p>").concat(userExperience, "</p>\n        ");
        var resumeOutputElement = document.querySelector(".output");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume elements are missing.");
        }
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        educationInput.value = "";
        skillsInput.value = "";
        experienceInput.value = "";
        profilePicture.value = "";
    }
    else {
        console.error("One or more elements are missing.");
    }
});
