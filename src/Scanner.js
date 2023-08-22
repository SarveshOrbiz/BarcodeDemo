import { useState } from 'react';
import { useZxing } from 'react-zxing';

import './scanner.css';

const Scanner = () => {
    const [barcode,setBarcode] = useState('No barcode scanned!');
    const { ref } = useZxing({
        onDecodeResult(result) {
          setBarcode(result.getText());
        }
      });

    return <div>
        <span className='scanner'>
            <hr className='bar'/>
            <video ref={ref} />
        </span>
        <p>{barcode}</p>
    </div>
}

export default Scanner;