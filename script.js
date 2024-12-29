// Select DOM elements
const fetchDataButton = document.getElementById('fetch-data');
const loader = document.getElementById('loader');
const dataContainer = document.getElementById('data-container');

// Example API URL (replace with your API endpoint)
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch data from API
async function fetchData() {
  try {
    // Show loader and clear previous data
    loader.style.display = 'block';
    dataContainer.innerHTML = '';

    // Fetch API data
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Display fetched data
    displayData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    dataContainer.textContent = 'Failed to fetch data.';
  } finally {
    // Hide loader
    loader.style.display = 'none';
  }
}

// Function to display data
function displayData(data) {
  data.slice(0, 5).forEach((item) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    `;
    dataContainer.appendChild(div);
  });
}

// Add event listener to button
fetchDataButton.addEventListener('click', fetchData);
