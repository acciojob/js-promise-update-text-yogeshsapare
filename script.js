//your JS code here. If required.

function getMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

getMessage().then((message) => {
  document.getElementById("output").textContent = message;
});
