import '../scss/style.scss';
import 'bootstrap';

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
});
