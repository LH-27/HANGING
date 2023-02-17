import imag0 from '../assets/0.png';
import imag1 from '../assets/1.png';
import imag2 from '../assets/2.png';
import imag3 from '../assets/3.png';
import imag4 from '../assets/4.png';
import imag5 from '../assets/5.png';
import imag6 from '../assets/6.png';
import imag7 from '../assets/7.png';
import imag8 from '../assets/8.png';
import imag9 from '../assets/9.png';

const images: string[] = [
    imag0,
    imag1,
    imag2,
    imag3,
    imag4,
    imag5,
    imag6,
    imag7,
    imag8,
    imag9,
];

interface props {
    imageNumber: number;
}

export function HangImage( { imageNumber }: props) {

    if ( imageNumber >= 9 ) {
        imageNumber = 9;
    }


return (
    <img 
        src={ images[imageNumber]}
         alt="Hang image"
        style={{ width: 250 }} 
     />
);

}