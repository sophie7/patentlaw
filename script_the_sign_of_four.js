const textContainer = document.getElementById('textContainer');

fetch('the_sign_of_four.txt')
  .then(response => response.text())
  .then(content => {
    textContainer.textContent = content;
  })
  .catch(error => {
    console.error('Error:', error);
  });
