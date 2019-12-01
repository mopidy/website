document.addEventListener("DOMContentLoaded", _ => {
  let interval = null;

  const buttonEl = document.querySelector('#auth-button');
  const errorEl = document.querySelector('#auth-error');
  const clientIdEl = document.querySelector('#auth-config [data-name="client_id"]');
  const clientSecretEl = document.querySelector('#auth-config [data-name="client_secret"]');

  function update(id, secret, error, desc) {
    if (id && secret ) {
      clientIdEl.innerText = id;
      clientSecretEl.innerText = secret;
    }

    if (!error) {
      errorEl.classList.add('is-hidden');
    } else {
      errorEl.innerText = '[' + error + '] ' + (desc || '');
      errorEl.classList.remove('is-hidden');
    }
  }

  window.addEventListener("message", event => {
    if (event.origin !== 'https://auth.mopidy.com') {
      return;
    }

    clearInterval(interval);

    update(event.data['client_id'], event.data['client_secret'],
           event.data['error'], event.data['error_description']);

    event.source.close()
  });

  buttonEl.addEventListener('click', _ => {
    clearInterval(interval);

    var opened = window.open('https://auth.mopidy.com/spotify/', 'Connect with Spotify', [
        'toolbar=no',
        'location=no',
        'directories=no',
        'status=no',
        'menubar=no',
        'scrollbars=no',
        'resizable=no',
        'copyhistory=no',
        'width=' + 800,
        'height=' + 600,
        'left=' + ((screen.width/2)-(800/2)),
        'top=' + ((screen.height/2)-(600/2))
      ].join(', '));

    interval = setInterval(_ => {
      if (opened.closed) {
        update(null, null, 'popup-closed',
               'Window closed without completing authentication.');
        clearInterval(interval);
      };
    }, 1000);
  });
});
