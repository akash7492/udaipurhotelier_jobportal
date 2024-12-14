document.getElementById('download-btn').addEventListener('click', function() {
    // Collect data from form inputs
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const pinCode = document.getElementById('pin-code').value;
    const jobTitle = document.getElementById('job-title').value;
    const employer = document.getElementById('last-employer').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const schoolName = document.getElementById('school-name').value;
    const schoolLocation = document.getElementById('school-location').value;
    const qualification = document.getElementById('qualification').value;
    const gradYear = document.getElementById('graduation-year').value;
    const skills = document.getElementById('skills').value;
    const summary = document.getElementById('summary').value;
    const languages = document.getElementById('languages').value;
    const hobbies = document.getElementById('hobbies').value;
    const certifications = document.getElementById('certifications').value;

    // Create resume content
    let resumeContent = `
        <h1>${firstName} ${lastName}</h1>
        <p>Email: ${email} | Contact: ${contact}</p>
        <p>Address: ${address}, ${city}, ${pinCode}</p>

        <h2>Experience</h2>
        <p>Job Title: ${jobTitle}</p>
        <p>Employer: ${employer}</p>
        <p>Start Date: ${startDate} | End Date: ${endDate}</p>
        
        <h2>Education</h2>
        <p>${schoolName} (${schoolLocation})</p>
        <p>Qualification: ${qualification} | Graduation Year: ${gradYear}</p>

        <h2>Skills</h2>
        <p>${skills}</p>

        <h2>Summary</h2>
        <p>${summary}</p>

        <h2>Languages</h2>
        <p>${languages}</p>

        <h2>Hobbies and Interests</h2>
        <p>${hobbies}</p>

        <h2>Certifications</h2>
        <p>${certifications}</p>
    `;

    // Create a downloadable TXT file
    const txtFile = new Blob([resumeContent], { type: 'text/plain' });
    const txtUrl
