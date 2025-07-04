const steps = document.querySelectorAll('.step-content');
const stepItems = document.querySelectorAll('.step-item');
let currentStep = 0;

function updateSteps() {
  steps.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep);
    stepItems[index].classList.toggle('active', index === currentStep);
  });
}

function addButtonListeners() {
  const nextBtns = document.querySelectorAll('#nextBtn');
  const prevBtns = document.querySelectorAll('#prevBtn');

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateSteps();
      }
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        updateSteps();
      }
    });
  });
}

// Allow clicking sidebar steps to jump
stepItems.forEach(item => {
  item.addEventListener('click', () => {
    currentStep = parseInt(item.getAttribute('data-step'));
    updateSteps();
  });
});

// Initialize
updateSteps();
addButtonListeners();