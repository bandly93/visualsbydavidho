require('es6-promise').polyfill();
require('isomorphic-fetch');

export function sendData(url, method, data) {
  return fetch(url, {
    method,
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then((status) => {
      console.log(status);
    }).catch((err) => {
      console.log(err);
    });
}
