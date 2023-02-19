// import registerServiceWorker from '@/js/registerServiceWorker';
import getBarcode from '@/js/barcode';

// Test import of styles
import '@/styles/index.scss';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(error => {
            console.log('SW registration failed: ', error);
        });
    });
}

const app = document.querySelector('#root');

document.addEventListener(
    "DOMContentLoaded",
    (event) => {
        // const heading = document.createElement('h1');
        // heading.textContent = 'Hello world';
        // app.append(heading);

        const cards = [
            {
                key: 'thx',
                value: 'D66055296018022',
                format: 'CODE128',
            },
            {
                key: 'p24',
                value: '905010',
                format: 'CODE128',
            },
        ];

        const card = cards.find(item => item.key === 'thx');

        const img = document.createElement('img');
        img.src = getBarcode(card);
        app.append(img);

       //  console.log('barcode', barcode);
    },
);


