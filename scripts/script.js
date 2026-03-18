// Elementos do DOM com IDs específicos
const contactForm = document.getElementById('contactFormTecnico');
const successMsg = document.getElementById('successMessageTecnico');
const formWrapper = document.querySelector('.form-wrapper-tecnico');

// Verifica se os elementos existem antes de executar
if (contactForm && successMsg) {
  
  // Função para mostrar/ocultar o formulário e a mensagem de sucesso
  function toggleContactForm(showForm) {
    if (showForm) {
      contactForm.classList.remove('hidden-tecnico');
      successMsg.classList.add('hidden-tecnico');
    } else {
      contactForm.classList.add('hidden-tecnico');
      successMsg.classList.remove('hidden-tecnico');
    }
  }

  // Função para resetar o formulário
  function resetContactForm() {
    contactForm.reset();
  }

  // Evento de submit
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Coleta os dados
    const formData = {
      name: document.getElementById('nameTecnico').value,
      email: document.getElementById('emailTecnico').value,
      phone: document.getElementById('phoneTecnico').value,
      course: document.getElementById('courseTecnico').value,
      modality: document.getElementById('modalityTecnico').value,
    };
    
    console.log('Formulário técnico enviado:', formData);

    // Esconde formulário e mostra mensagem de sucesso
    toggleContactForm(false);

    // Após 3 segundos, volta ao formulário e limpa os campos
    setTimeout(() => {
      toggleContactForm(true);
      resetContactForm();
    }, 3000);
  });
}