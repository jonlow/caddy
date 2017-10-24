class Caddy {
  constructor() {
    console.log('caddy constructor');
  }

  init() {
    console.log('caddy init');

    document.body.addEventListener('click', e => {
      console.log('Body Click', this);
    });
  }
};

const caddy = new Caddy();