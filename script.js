//your JS code here. If required.
const output = document.getElementById("output");

// Function to generate a random delay (1–3 seconds)
function randomDelay() {
  return Math.random() * 2 + 1; // seconds
}

// Create 3 promises with random delays
const promises = Array.from({ length: 3 }, () => {
  const delay = randomDelay();
  return new Promise((resolve) => {
    setTimeout(() => resolve(delay), delay * 1000);
  });
});

const startTime = performance.now();

// Wait for all promises to resolve
Promise.all(promises).then((results) => {
  const endTime = performance.now();
  const totalTime = (endTime - startTime) / 1000; // convert to seconds

  // Clear loading row
  output.innerHTML = "";

  // Add each promise result
  results.forEach((time, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${time.toFixed(3)}</td>
    `;
    output.appendChild(row);
  });

  // Add total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${Math.max(...results).toFixed(3)}</td>
  `;
  output.appendChild(totalRow);
});
