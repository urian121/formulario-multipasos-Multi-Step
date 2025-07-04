 // Selecciona todos los pasos del formulario multipasos
  const steps = document.querySelectorAll('.step-content');
  const progressBar = document.querySelector('.progress-bar');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  let currentStep = 0;

    // Actualiza la visualización del formulario y la barra de progreso
  function updateForm() {
    steps.forEach((step, index) => {
      step.classList.toggle('active', index === currentStep);
    });
    progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
    prevBtn.disabled = currentStep === 0;
    nextBtn.textContent = currentStep === steps.length - 1 ? 'Enviar formulario →' : 'Siguiente →';
  }

    // Maneja el evento de avanzar al siguiente paso o enviar el formulario
  nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateForm();
    } else {
      alert('Formulario enviado!');
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      updateForm();
    }
  });

  updateForm();