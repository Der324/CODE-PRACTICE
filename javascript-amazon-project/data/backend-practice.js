const xhr = new XMLHttpRequest();

// awaits for the response and this time it's defined
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send(); // Asynchronous code
// xhr.response alone gets delaid and becomes undefined