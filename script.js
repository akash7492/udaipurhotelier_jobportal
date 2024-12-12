document.getElementById("jobForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission for validation

  const jobTitle = document.getElementById("jobTitle").value;
  const noOfOpenings = document.getElementById("noOfOpenings").value;
  const salaryDetails = document.getElementById("salaryDetails").value;
  const maxSalary = document.getElementById("maxSalary").value;
  
  if (!jobTitle || !noOfOpenings || !salaryDetails) {
    alert("Please fill in all the required fields.");
    return;
  }

  alert("Job Posting Submitted Successfully!");
  this.reset(); // Reset the form after successful submission
});
