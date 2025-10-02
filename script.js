document.addEventListener("DOMContentLoaded", () => {
  // Utility function to simulate a delay
  function delay(ms, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
  }

  const arr = [1, 2, 3, 4];              // Define array inside DOMContentLoaded
  const outputDiv = document.getElementById("output"); // Ensure element exists

  // Start the promise chain
  delay(3000, arr) // initial 3-second delay
    .then(result => {
      const evens = result.filter(num => num % 2 === 0);
      return delay(1000, evens).then(filtered => {
        outputDiv.textContent = filtered; // display [2,4]
        return filtered;
      });
    })
    .then(filtered => {
      const multiplied = filtered.map(num => num * 2);
      return delay(2000, multiplied).then(finalArr => {
        outputDiv.textContent = finalArr; // display [4,8]
        return finalArr;
      });
    })
    .catch(error => {
      outputDiv.textContent = "Error: " + error;
    });
});
