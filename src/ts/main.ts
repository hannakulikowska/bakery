import '../scss/style.scss';
import 'bootstrap';

// Preloader;
const spinner = document.getElementById('spinner') as HTMLElement;
const content = document.getElementById('content') as HTMLElement;

window.addEventListener('load', () => {
  spinner.style.opacity = '0';

  spinner.addEventListener('transitionend', () => {
    document.body.removeChild(spinner);
    content.style.display = 'block';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }

  const readMoreButtons = document.querySelectorAll('.read-more-btn') as NodeListOf<HTMLButtonElement>;

  readMoreButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      const buttonElement = event.currentTarget as HTMLButtonElement;
      const isExpanded = buttonElement.getAttribute('aria-expanded') === 'true';

      const buttonText = isExpanded ? 'Read Less' : 'Read More';
      const iconElement = buttonElement.querySelector('i');

      buttonElement.textContent = buttonText;

      if (iconElement) {
        buttonElement.appendChild(iconElement);
      }
    });
  });

  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach((formElement) => {
    const form = formElement as HTMLFormElement;
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });

  const submitButton = document.getElementById('enroll-btn');
  if (submitButton) {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const form = document.getElementById('enroll-form') as HTMLFormElement;
      if (form) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated');
        } else {
          form.submit();
        }
      }
    });
  }

  // Subscribe Button

  const subscribeButton = document.getElementById('subscribe-btn');
  if (subscribeButton) {
    subscribeButton.addEventListener('click', (event) => {
      event.preventDefault();
      const form = document.getElementById('subscribtion-form') as HTMLFormElement;
      if (form) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated');
        } else {
          form.submit();
        }
      }
    });
  }

  // Hamburger Menu

  const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarToggler && navbarToggler.getAttribute('aria-expanded') === 'true') {
        navbarToggler.click();
      }
    });
  });
});
