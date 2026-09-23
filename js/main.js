const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const detailsToggle = document.querySelector('.details-toggle');
const projectDetails = document.getElementById('real-mercado-details');

if (detailsToggle && projectDetails) {
  detailsToggle.addEventListener('click', () => {
    const isOpen = detailsToggle.getAttribute('aria-expanded') === 'true';
    detailsToggle.setAttribute('aria-expanded', String(!isOpen));
    projectDetails.hidden = isOpen;
    detailsToggle.firstChild.textContent = isOpen ? 'Ver escopo completo ' : 'Ocultar escopo ';
    detailsToggle.querySelector('span').textContent = isOpen ? '+' : '−';
  });
}
