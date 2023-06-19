//your code here

// Band names array
let bandNames = [];

// Function to remove articles from band names
function removeArticles(name) {
  const articles = ['a', 'an', 'the'];
  const words = name.split(' ');

  // Remove articles from the name
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));

  // Return the modified name
  return filteredWords.join(' ');
}

// Sort the band names without articles
const sortedBandNames = bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the <ul> element by its id
const ulElement = document.getElementById('band');

// Clear the existing content of the <ul> element
ulElement.innerHTML = '';

// Loop through the sorted band names and create <li> elements
sortedBandNames.forEach(name => {
  // Create a new <li> element
  const liElement = document.createElement('li');

  // Set the text content of the <li> element to the band name
  liElement.textContent = name;

  // Append the <li> element to the <ul> element
  ulElement.appendChild(liElement);
});
