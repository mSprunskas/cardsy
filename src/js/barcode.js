import JsBarcode from 'jsbarcode';
import { createCanvas } from 'canvas';

var canvas = createCanvas();

const getBarcode = (card) => {
    JsBarcode(
        canvas,
        card.value,
        {
            format: card.format,
        }
    );
    return canvas.toDataURL();
};

export default getBarcode;
