// Percentage Calculator
document.getElementById('percentage-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const obtained = parseFloat(document.getElementById('obtained').value);
  const total = parseFloat(document.getElementById('total').value);
  let result = "";

  if (isNaN(obtained) || isNaN(total) || total <= 0) {
    result = "Please enter valid numbers for both fields.";
  } else if (obtained < 0 || total < 0) {
    result = "Marks cannot be negative.";
  } else if (obtained > total) {
    result = "Obtained marks cannot exceed total marks.";
  } else {
    const percentage = (obtained / total) * 100;
    result = `Percentage: <span>${percentage.toFixed(2)}%</span>`;
  }

  document.getElementById('percentage-result').innerHTML = result;
});

// Percentile Calculator
document.getElementById('percentile-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const below = parseInt(document.getElementById('below').value, 10);
  const equal = parseInt(document.getElementById('equal').value, 10);
  const totalStudents = parseInt(document.getElementById('total-students').value, 10);
  let result = "";

  if (
    isNaN(below) || below < 0 ||
    isNaN(equal) || equal < 0 ||
    isNaN(totalStudents) || totalStudents <= 0
  ) {
    result = "Please enter valid numbers for all fields.";
  } else if (below + equal > totalStudents) {
    result = "Sum of students below and equal to you cannot exceed total students.";
  } else {
    // Percentile formula: ((number below you) + 0.5*(number equal to you)) / total students * 100
    const percentile = ((below + 0.5 * equal) / totalStudents) * 100;
    result = `Percentile: <span>${percentile.toFixed(2)}</span>`;
  }

  document.getElementById('percentile-result').innerHTML = result;
});
