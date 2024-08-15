const issuesDiv = document.getElementById('issues');
const agreeCheckbox = document.getElementById('agree');
const postButton = document.getElementById('post');

function checkAgree() {
  postButton.disabled = !agreeCheckbox.checked;
}

async function fetchAndDisplayIssues() {
  try {
    const response = await fetch('issues.json');
    const issuesData = await response.json();

    issuesDiv.innerHTML = '';

    issuesData.forEach(issue => {
      const issueElement = document.createElement('p');
      issueElement.textContent = `${issue.name} - ${issue.issue}`;
      issuesDiv.appendChild(issueElement);
    });
  } catch (error) {
    console.error('Error fetching issues:', error);
  }
}

postButton.addEventListener('click', async () => {
  const nameInput = document.getElementById('name');
  const issueInput = document.getElementById('issue');

  const newIssue = {
    name: nameInput.value,
    issue: issueInput.value
  };

  try {
    const response = await fetch('issues.json');
    const issuesData = await response.json();
    issuesData.push(newIssue);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(issuesData)
    };

    await fetch('issues.json', options);

    nameInput.value = '';
    issueInput.value = '';
    agreeCheckbox.checked = false;
    postButton.disabled = true;
    fetchAndDisplayIssues();
  } catch (error) {
    console.error('Error posting issue:', error);
  }
});

fetchAndDisplayIssues();
