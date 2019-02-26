import './style.scss';

const element = document.getElementById('mailto');

const onMailSend = e => {
  e.preventDefault();
  e.stopPropagation();
  
  window.location.href = `mailto:${atob(e.target.getAttribute('href'))}`;
};

element.addEventListener('click', onMailSend);