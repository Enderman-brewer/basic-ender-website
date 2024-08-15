// Get a reference to the issues div
const issuesDiv = document.getElementById('issues');

// Function to fetch and display issues
async function fetchAndDisplayIssues() {
  try {
    const response = await fetch('issues.json');
    const issuesData = await response.json();

    // Clear the issues div
    issuesDiv.innerHTML = '';

    // Create HTML elements for each issue
    issuesData.forEach(issue => {
      const issueElement = document.createElement('p');
      issueElement.textContent = `${issue.name} - ${issue.issue}`;
      issuesDiv.appendChild(issueElement);
    });
  } catch (error) {
    console.error('Error fetching issues:', error);
  }
}

// Call the function to display issues when the page loads
fetchAndDisplayIssues();
