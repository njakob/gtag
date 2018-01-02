/* @flow */


export default function loadScript(): Function {
  const { gtag, document: doc } = window;

  if (typeof gtag !== 'function') {
    throw new Error('Unable to access global gtag function. Did you forget to inject the snippet?');
  }

  const script = doc.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js';
  doc.body.appendChild(script);

  return gtag;
}
