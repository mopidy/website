document.addEventListener('DOMContentLoaded', _ => {
  const buttonEl = document.querySelector('#auth-button');
  const errorEl = document.querySelector('#auth-error');
  const tokenEl = document.querySelector('#auth-config [data-name="auth_token"]');

  function update(user, error) {
    if (error) {
      errorEl.classList.remove('is-hidden');
      errorEl.innerText = error.message;
    } else {
      errorEl.classList.add('is-hidden');
      tokenEl.innerText = SC.accessToken();
    }
  }

  SC.initialize({
    client_id: '93e33e327fd8a9b77becd179652272e2',
    redirect_uri: 'https://www.mopidy.com/soundcloud_callback'
  });

  buttonEl.addEventListener('click', _ => SC.connect(_ => SC.get('/me', update)));
});
