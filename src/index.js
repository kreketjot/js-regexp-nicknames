import Validator from './Validator';

const logs = document.getElementById('logs');
document.getElementById('nickname').addEventListener('input', (evt) => {
  const errors = Validator.validateUsername(evt.currentTarget.value);
  if (!errors.length) {
    logs.style.color = 'green';
    logs.innerHTML = '<p>OK</p>';
    return;
  }
  logs.style.color = 'red';
  logs.innerHTML = '';
  errors.forEach((err) => {
    const p = document.createElement('p');
    p.innerText = err;
    logs.append(p);
  });
});
