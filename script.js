document.addEventListener("DOMContentLoaded", () => {
  function delay(ms, value) {
    return new Promise(resolve => setTimeout(() => resolve(value), ms));
  }

  const arr = [1, 2, 3, 4];              
  const outputDiv = document.getElementById("output"); 
  delay(3000, arr) 
    .then(result => {
      const evens = result.filter(num => num % 2 === 0);
      return delay(1000, evens).then(filtered => {
        outputDiv.textContent = filtered; 
        return filtered;
      });
    })
    .then(filtered => {
      const multiplied = filtered.map(num => num * 2);
      return delay(2000, multiplied).then(finalArr => {
        outputDiv.textContent = finalArr;
        return finalArr;
      });
    })
    .catch(error => {
      outputDiv.textContent = "Error: " + error;
    });
});
