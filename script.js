let wheelSpinned = false;

function spinWheel() {
  if (!wheelSpinned) {
    // First spin, rotate and show "Try again"
    const wheel = document.querySelector('.wheel');
    const resultDiv = document.getElementById('result');
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;

    setTimeout(() => {
      resultDiv.textContent = "Try again";
    }, 4000);

    wheelSpinned = true;
  } else {
    // Second spin, show the gift card
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = "Congratulations! You won a $50 gift card!";
  }
}
