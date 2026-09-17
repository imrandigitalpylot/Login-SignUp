const tabs = document.querySelectorAll('.tab');
const forms = {
  'login-tab': document.querySelector('#login-form'),
  'signup-tab': document.querySelector('#signup-form')
};
const title = document.querySelector('#form-title');
const subtitle = document.querySelector('#form-subtitle');
const switchButton = document.querySelector('#switch-button');
const switchPrompt = document.querySelector('.switch-prompt');
const message = document.querySelector('.message');

function selectTab(tabId) {
  tabs.forEach((tab) => {
    const selected = tab.id === tabId;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', selected);
    forms[tab.id].classList.toggle('hidden', !selected);
  });

  const signingUp = tabId === 'signup-tab';
  title.textContent = signingUp ? 'Create your account' : 'Welcome back';
  subtitle.textContent = signingUp
    ? 'Start planning calmer, more focused days in just a minute.'
    : "Your plans missed you. Let's pick up where you left off.";
  switchPrompt.firstChild.textContent = signingUp ? 'Already have an account? ' : 'New to Plannr? ';
  switchButton.textContent = signingUp ? 'Log in instead' : 'Create an account';
  message.textContent = '';
}

tabs.forEach((tab) => tab.addEventListener('click', () => selectTab(tab.id)));
switchButton.addEventListener('click', () => selectTab(document.querySelector('#signup-form').classList.contains('hidden') ? 'signup-tab' : 'login-tab'));

document.querySelectorAll('.show-password').forEach((button) => {
  button.addEventListener('click', () => {
    const input = button.previousElementSibling;
    const showing = input.type === 'text';
    input.type = showing ? 'password' : 'text';
    button.textContent = showing ? 'Show' : 'Hide';
    button.setAttribute('aria-label', `${showing ? 'Show' : 'Hide'} password`);
  });
});

document.querySelectorAll('.auth-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.textContent = form.id === 'login-form'
      ? 'Welcome back! Your dashboard is ready.'
      : 'Account created! Welcome to Plannr.';
  });
});
