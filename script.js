function submitQuiz() {
  const totalQuestions = 10;
  let correctAnswers = 0;

  // Correct answers
  const answers = {
    q1: "H2O",
    q2: "Mars",
    q3: "Mitochondria",
    q4: "Carbon Dioxide",
    q5: "100°C",
    q6: "Leaves",
    q7: "Diamond",
    q8: "206",
    q9: "Gravity",
    q10: "Nitrogen"
  };

  const form = document.getElementById('quiz-form');
  for (let i = 1; i <= totalQuestions; i++) {
    const question = form[`q${i}`];
    if (question) {
      const selectedOption = form[`q${i}`].value;
      if (selectedOption === answers[`q${i}`]) {
        correctAnswers++;
      }
    }
  }

  alert(`You got ${correctAnswers} out of ${totalQuestions} correct!`);

  // Hide the quiz, show the certificate input section
  document.getElementById('quiz-form').style.display = 'none';
  document.getElementById('certificate-section').style.display = 'block';
}

function generateCertificate() {
  const userName = document.getElementById('user-name').value;

  if (userName.trim() === "") {
    alert("Please enter your name to generate the certificate.");
    return;
  }

  const canvas = document.getElementById('certificate-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 600;

  // Set canvas background color
  ctx.fillStyle = "#f5f5f5";  // Light gray background
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw certificate border
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 5;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  // Certificate title
  ctx.font = "40px Arial";
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.fillText("Certificate of Completion", canvas.width / 2, 150);

  // User's name
  ctx.font = "30px Arial";
  ctx.fillText(userName, canvas.width / 2, 300);

  // Additional text
  ctx.font = "20px Arial";
  ctx.fillText("has successfully completed the Science Quiz", canvas.width / 2, 350);
  ctx.fillText("Congratulations!", canvas.width / 2, 400);

  // Show download link
  const downloadLink = document.getElementById('download-link');
  downloadLink.href = canvas.toDataURL("image/png");
  downloadLink.download = "certificate.png";
  downloadLink.style.display = "block";
}